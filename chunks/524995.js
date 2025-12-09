n.d(t, {
    F: () => _,
    r: () => p,
});
var r = n(473749),
    i = n(782568),
    a = n(906555),
    o = n(812967),
    s = n(626135),
    l = n(49012),
    c = n(481960),
    u = n(407089),
    d = n(491662),
    f = n(981631),
    p = (function (e) {
        return (e.RPC = "rpc"), (e.WEB = "web"), e;
    })({});
function _(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { allowedFlows: p = ["rpc", "web"], debug: _ = !1 } = n,
        m = (0, u.R)(e),
        h = (0, a.t)(null == m ? void 0 : m.id, "AUTHORIZE_REQUEST"),
        g = p.includes("rpc") && h,
        E = p.includes("web") && (null == m ? void 0 : m.connectionEntrypointUrl) != null,
        b = g ? "rpc" : E ? "web" : null,
        y = g || E,
        { token: O, fetched: v } = (0, d.o)(
            null != (t = null == m ? void 0 : m.parentId) ? t : null == m ? void 0 : m.id,
        ),
        S = v && null != O;
    return {
        fetched: v,
        hasAlreadyLinked: S,
        canStartAuthorization: y,
        startAuthorization: r.useCallback(
            (e) => {
                if (null == m) return null;
                let t = c.Z.getConfig({ location: "useStartAuthorize" }).enabled;
                if (g) {
                    var n;
                    return (
                        o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === m.id, {}),
                        null == (n = e.onConfirm) || n.call(e),
                        t &&
                            s.default.track(f.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                location_stack: e.analyticsLocations,
                                application_id: m.id,
                                flow_type: "rpc",
                            }),
                        "rpc"
                    );
                }
                if (E) {
                    let n = m.connectionEntrypointUrl;
                    return (
                        (0, l.q)({
                            href: n,
                            onConfirm: () => {
                                var t;
                                (0, i.Z)(n), null == (t = e.onConfirm) || t.call(e);
                            },
                        }),
                        t &&
                            s.default.track(f.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                location_stack: e.analyticsLocations,
                                application_id: m.id,
                                flow_type: "web",
                            }),
                        "web"
                    );
                }
                return null;
            },
            [g, E, m],
        ),
        connectionApp: m,
        preferredFlow: b,
        debug: _
            ? {
                  isSubscribedToAuthorizeRequest: h,
                  oauth2Token: O,
                  hasConnectionEntrypointUrl: (null == m ? void 0 : m.connectionEntrypointUrl) != null,
                  validFlows: [g ? "rpc" : null, E ? "web" : null].filter((e) => null != e),
              }
            : void 0,
    };
}
