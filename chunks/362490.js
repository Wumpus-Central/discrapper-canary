n.d(t, {
    RD: () => g,
    U9: () => b,
    _M: () => h,
}),
    n(321073);
var r = n(64700),
    i = n(868714),
    a = n(975807),
    s = n(474951),
    o = n(954571),
    l = n(307600),
    c = n(312083),
    u = n(975460),
    d = n(704824),
    f = n(308151),
    p = n(652215);
let _ = "AUTHORIZE_REQUEST";
var h = (function (e) {
    return (e.RPC = "rpc"), (e.WEB = "web"), e;
})({});
let m = ["rpc", "web"];
function g(e) {
    var t, n, i, a, s, o;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: c = !1 } = l,
        f = (0, u.g)(e),
        p = y(f, l),
        _ = null == p ? void 0 : p.preferredFlow,
        h = null != _,
        { token: m, fetched: g } = (0, d.U)(
            null != (t = null == f ? void 0 : f.parentId) ? t : null == f ? void 0 : f.id,
        ),
        E = g && null != m;
    return {
        fetched: g,
        hasAlreadyLinked: E,
        canStartAuthorization: h,
        startAuthorization: r.useCallback((e) => (null == _ ? null : (_.initiate(e), _.type)), [_]),
        connectionApp: f,
        chosenFlow: null != (n = null == _ ? void 0 : _.type) ? n : null,
        debug: c
            ? {
                  isSubscribedToAuthorizeRequest:
                      null != (i = null == p || null == (s = p.context) ? void 0 : s.isSubscribedToAuthorizeRequest) &&
                      i,
                  oauth2Token: m,
                  hasConnectionEntrypointUrl: (null == f ? void 0 : f.connectionEntrypointUrl) != null,
                  validFlows:
                      null != (a = null == p || null == (o = p.availableFlows) ? void 0 : o.map((e) => e.type))
                          ? a
                          : [],
              }
            : void 0,
    };
}
function E(e) {
    return s.A.listenIsSubscribed(e);
}
function b(e, t) {
    var n;
    let u = (0, i.A)(null != (n = null == t ? void 0 : t.allowedFlows) ? n : m),
        d = (0, f.A)(
            E,
            r.useCallback(
                () =>
                    e.map((e) => ({
                        application: e,
                        isSubscribedToAuthorizeRequest: s.A.isSubscribed(e.id, _),
                    })),
                [e],
            ),
        );
    return r.useMemo(
        () =>
            d.map((e) => {
                let t = [];
                if (
                    (u.includes("rpc") &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: "rpc",
                            initiate(t) {
                                var n;
                                let r = c.A.getConfig({ location: "useStartAuthorize" }).enabled;
                                s.A.dispatchToSubscriptions(_, (t) => t.socket.application.id === e.application.id, {}),
                                    null == (n = t.onConfirm) || n.call(t),
                                    r &&
                                        o.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                            location_stack: t.analyticsLocations,
                                            application_id: e.application.id,
                                            flow_type: "rpc",
                                        });
                            },
                        }),
                    u.includes("web") && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: "web",
                        initiate(t) {
                            let r = c.A.getConfig({ location: "useStartAuthorize" }).enabled;
                            (0, l.h)({
                                href: n,
                                onConfirm: () => {
                                    var e;
                                    (0, a.A)(n), null == t || null == (e = t.onConfirm) || e.call(t);
                                },
                            }),
                                r &&
                                    o.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: "web",
                                    });
                        },
                    });
                }
                return {
                    context: e,
                    availableFlows: t,
                    preferredFlow: t.length > 0 ? t[0] : null,
                };
            }),
        [d, u],
    );
}
function y(e, t) {
    let n = b(
        r.useMemo(() => (null != e ? [e] : []), [e]),
        t,
    );
    return n.length > 0 ? n[0] : null;
}
