"use strict";
n.d(t, { RD: () => m, U9: () => g, _M: () => p }), n(321073);
var r = n(64700),
    i = n(868714),
    s = n(975807),
    a = n(474951),
    o = n(954571),
    l = n(307600),
    u = n(975460),
    c = n(704824),
    d = n(308151),
    _ = n(652215);
let f = "AUTHORIZE_REQUEST";
var p = (function (e) {
    return (e.RPC = "rpc"), (e.WEB = "web"), e;
})({});
let h = ["rpc", "web"];
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        i = (0, u.g)(e),
        s = A(i, t),
        a = s?.preferredFlow,
        o = null != a,
        { token: l, fetched: d } = (0, c.U)(i?.parentId ?? i?.id),
        _ = d && null != l;
    return {
        fetched: d,
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
function E(e) {
    return a.A.listenIsSubscribed(e);
}
function g(e, t) {
    let n = (0, i.A)(t?.allowedFlows ?? h),
        u = (0, d.A)(
            E,
            r.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: a.A.isSubscribed(e.id, f) })),
                [e],
            ),
        );
    return r.useMemo(
        () =>
            u.map((e) => {
                let t = [];
                if (
                    (n.includes("rpc") &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: "rpc",
                            initiate(t) {
                                a.A.dispatchToSubscriptions(f, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    o.default.track(_.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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
                            (0, l.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, s.A)(n), t?.onConfirm?.();
                                },
                            }),
                                o.default.track(_.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: "web",
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [u, n],
    );
}
function A(e, t) {
    let n = g(
        r.useMemo(() => (null != e ? [e] : []), [e]),
        t,
    );
    return n.length > 0 ? n[0] : null;
}
