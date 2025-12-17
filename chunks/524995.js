n.d(t, {
    FG: () => g,
    ro: () => m,
}),
    n(539854);
var r = n(473749),
    i = n(764011),
    a = n(782568),
    o = n(812967),
    s = n(626135),
    l = n(49012),
    c = n(481960),
    u = n(407089),
    d = n(491662),
    f = n(928994),
    p = n(981631);
let _ = "AUTHORIZE_REQUEST";
var m = (function (e) {
    return (e.RPC = "rpc"), (e.WEB = "web"), e;
})({});
let h = ["rpc", "web"];
function g(e) {
    var t, n, i, a, o, s;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: c = !1 } = l,
        f = (0, u.R)(e),
        p = y(f, l),
        _ = null == p ? void 0 : p.preferredFlow,
        m = null != _,
        { token: h, fetched: g } = (0, d.o)(
            null != (i = null == f ? void 0 : f.parentId) ? i : null == f ? void 0 : f.id,
        ),
        E = g && null != h;
    return {
        fetched: g,
        hasAlreadyLinked: E,
        canStartAuthorization: m,
        startAuthorization: r.useCallback((e) => (null == _ ? null : (_.initiate(e), _.type)), [_]),
        connectionApp: f,
        chosenFlow: null != (a = null == _ ? void 0 : _.type) ? a : null,
        debug: c
            ? {
                  isSubscribedToAuthorizeRequest:
                      null != (o = null == p || null == (t = p.context) ? void 0 : t.isSubscribedToAuthorizeRequest) &&
                      o,
                  oauth2Token: h,
                  hasConnectionEntrypointUrl: (null == f ? void 0 : f.connectionEntrypointUrl) != null,
                  validFlows:
                      null != (s = null == p || null == (n = p.availableFlows) ? void 0 : n.map((e) => e.type))
                          ? s
                          : [],
              }
            : void 0,
    };
}
function E(e) {
    return o.Z.listenIsSubscribed(e);
}
function b(e, t) {
    var n;
    let u = (0, i.Z)(null != (n = null == t ? void 0 : t.allowedFlows) ? n : h),
        d = (0, f.Z)(
            E,
            r.useCallback(
                () =>
                    e.map((e) => ({
                        application: e,
                        isSubscribedToAuthorizeRequest: o.Z.isSubscribed(e.id, _),
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
                                let r = c.Z.getConfig({ location: "useStartAuthorize" }).enabled;
                                o.Z.dispatchToSubscriptions(_, (t) => t.socket.application.id === e.application.id, {}),
                                    null == (n = t.onConfirm) || n.call(t),
                                    r &&
                                        s.default.track(p.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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
                            let r = c.Z.getConfig({ location: "useStartAuthorize" }).enabled;
                            (0, l.q)({
                                href: n,
                                onConfirm: () => {
                                    var e;
                                    (0, a.Z)(n), null == t || null == (e = t.onConfirm) || e.call(t);
                                },
                            }),
                                r &&
                                    s.default.track(p.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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
