"use strict";
n.d(t, { RD: () => m, U9: () => A, _M: () => h }), n(321073);
var r,
    i = n(64700),
    s = n(868714),
    a = n(975807),
    o = n(474951),
    l = n(954571),
    u = n(307600),
    c = n(975460),
    d = n(704824),
    _ = n(308151),
    f = n(652215);
let p = "AUTHORIZE_REQUEST";
var h = (((r = {}).RPC = "rpc"), (r.WEB = "web"), r);
let E = ["rpc", "web"];
function m(e) {
    var t, n;
    let r,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: a = !1 } = s,
        o = (0, c.g)(e),
        l =
            ((t = o),
            (n = s),
            (r = A(
                i.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? r[0]
                : null),
        u = l?.preferredFlow,
        _ = null != u,
        { token: f, fetched: p } = (0, d.U)(o?.parentId ?? o?.id, { disableFetch: s.disableFetch });
    return {
        fetched: p,
        hasAlreadyLinked: p && null != f,
        canStartAuthorization: _,
        startAuthorization: i.useCallback((e) => (null == u ? null : (u.initiate(e), u.type)), [u]),
        connectionApp: o,
        chosenFlow: u?.type ?? null,
        token: f,
        debug: a
            ? {
                  isSubscribedToAuthorizeRequest: l?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: f,
                  hasConnectionEntrypointUrl: o?.connectionEntrypointUrl != null,
                  validFlows: l?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return o.A.listenIsSubscribed(e);
}
function A(e, t) {
    let n = (0, s.A)(t?.allowedFlows ?? E),
        r = (0, _.A)(
            g,
            i.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: o.A.isSubscribed(e.id, p) })),
                [e],
            ),
        );
    return i.useMemo(
        () =>
            r.map((e) => {
                let t = [];
                if (
                    (n.includes("rpc") &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: "rpc",
                            initiate(t) {
                                o.A.dispatchToSubscriptions(p, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    l.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: "rpc",
                                    });
                            },
                        }),
                    n.includes("web") && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: "web",
                        initiate(t) {
                            (0, u.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, a.A)(n), t?.onConfirm?.();
                                },
                            }),
                                l.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: "web",
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [r, n],
    );
}
