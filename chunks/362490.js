"use strict";
a.d(t, { RD: () => g, U9: () => x, _M: () => m }), a(321073);
var r,
    l = a(64700),
    n = a(868714),
    i = a(975807),
    s = a(474951),
    o = a(954571),
    d = a(307600),
    c = a(975460),
    u = a(704824),
    h = a(308151),
    p = a(652215);
let _ = "AUTHORIZE_REQUEST";
var m = (((r = {}).RPC = "rpc"), (r.WEB = "web"), r);
let b = ["rpc", "web"];
function g(e) {
    var t, a;
    let r,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: i = !1 } = n,
        s = (0, c.g)(e),
        o =
            ((t = s),
            (a = n),
            (r = x(
                l.useMemo(() => (null != t ? [t] : []), [t]),
                a,
            )).length > 0
                ? r[0]
                : null),
        d = o?.preferredFlow,
        h = null != d,
        { token: p, fetched: _ } = (0, u.U)(s?.parentId ?? s?.id, { disableFetch: n.disableFetch });
    return {
        fetched: _,
        hasAlreadyLinked: _ && null != p,
        canStartAuthorization: h,
        startAuthorization: l.useCallback((e) => (null == d ? null : (d.initiate(e), d.type)), [d]),
        connectionApp: s,
        chosenFlow: d?.type ?? null,
        token: p,
        debug: i
            ? {
                  isSubscribedToAuthorizeRequest: o?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: p,
                  hasConnectionEntrypointUrl: s?.connectionEntrypointUrl != null,
                  validFlows: o?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function f(e) {
    return s.A.listenIsSubscribed(e);
}
function x(e, t) {
    let a = (0, n.A)(t?.allowedFlows ?? b),
        r = (0, h.A)(
            f,
            l.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: s.A.isSubscribed(e.id, _) })),
                [e],
            ),
        );
    return l.useMemo(
        () =>
            r.map((e) => {
                let t = [];
                if (
                    (a.includes("rpc") &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: "rpc",
                            initiate(t) {
                                s.A.dispatchToSubscriptions(_, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    o.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: "rpc",
                                    });
                            },
                        }),
                    a.includes("web") && null != e.application.connectionEntrypointUrl)
                ) {
                    let a = e.application.connectionEntrypointUrl;
                    t.push({
                        type: "web",
                        initiate(t) {
                            (0, d.h)({
                                href: a,
                                onConfirm: () => {
                                    (0, i.A)(a), t?.onConfirm?.();
                                },
                            }),
                                o.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: "web",
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [r, a],
    );
}
