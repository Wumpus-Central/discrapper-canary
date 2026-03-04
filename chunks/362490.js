"use strict";
n.d(t, { RD: () => E, U9: () => A, _M: () => h }), n(321073);
var r = n(64700),
    i = n(868714),
    s = n(975807),
    a = n(474951),
    o = n(954571),
    l = n(307600),
    u = n(312083),
    c = n(975460),
    d = n(704824),
    _ = n(308151),
    f = n(652215);
let p = "AUTHORIZE_REQUEST";
var h = (function (e) {
    return (e.RPC = "rpc"), (e.WEB = "web"), e;
})({});
let m = ["rpc", "web"];
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        i = (0, c.g)(e),
        s = I(i, t),
        a = s?.preferredFlow,
        o = null != a,
        { token: l, fetched: u } = (0, d.U)(i?.parentId ?? i?.id),
        _ = u && null != l;
    return {
        fetched: u,
        hasAlreadyLinked: _,
        canStartAuthorization: o,
        startAuthorization: r.useCallback((e) => (null == a ? null : (a.initiate(e), a.type)), [a]),
        connectionApp: i,
        chosenFlow: a?.type ?? null,
        token: l,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: s?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: l,
                  hasConnectionEntrypointUrl: i?.connectionEntrypointUrl != null,
                  validFlows: s?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return a.A.listenIsSubscribed(e);
}
function A(e, t) {
    let n = (0, i.A)(t?.allowedFlows ?? m),
        c = (0, _.A)(
            g,
            r.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: a.A.isSubscribed(e.id, p) })),
                [e],
            ),
        );
    return r.useMemo(
        () =>
            c.map((e) => {
                let t = [];
                if (
                    (n.includes("rpc") &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: "rpc",
                            initiate(t) {
                                let n = u.A.getConfig({ location: "useStartAuthorize" }).enabled;
                                a.A.dispatchToSubscriptions(p, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    n &&
                                        o.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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
                            let r = u.A.getConfig({ location: "useStartAuthorize" }).enabled;
                            (0, l.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, s.A)(n), t?.onConfirm?.();
                                },
                            }),
                                r &&
                                    o.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: "web",
                                    });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [c, n],
    );
}
function I(e, t) {
    let n = A(
        r.useMemo(() => (null != e ? [e] : []), [e]),
        t,
    );
    return n.length > 0 ? n[0] : null;
}
