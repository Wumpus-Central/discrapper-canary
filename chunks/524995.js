n.d(t, {
    F: () => d,
    r: () => u,
});
var r = n(473749),
    i = n(782568),
    a = n(906555),
    o = n(812967),
    s = n(49012),
    l = n(407089),
    c = n(491662),
    u = (function (e) {
        return (e.RPC = "rpc"), (e.WEB = "web"), e;
    })({});
function d(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { allowedFlows: u = ["rpc", "web"], debug: d = !1 } = n,
        f = (0, l.R)(e),
        _ = (0, a.t)(null == f ? void 0 : f.id, "AUTHORIZE_REQUEST"),
        p = u.includes("rpc") && _,
        h = u.includes("web") && (null == f ? void 0 : f.connectionEntrypointUrl) != null,
        m = p ? "rpc" : h ? "web" : null,
        g = p || h,
        { token: E, fetched: b } = (0, c.o)(
            null != (t = null == f ? void 0 : f.parentId) ? t : null == f ? void 0 : f.id,
        ),
        y = b && null != E;
    return {
        fetched: b,
        hasAlreadyLinked: y,
        canStartAuthorization: g,
        startAuthorization: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == f) return null;
                if (p) {
                    var t;
                    return (
                        o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === f.id, {}),
                        null == (t = e.onConfirm) || t.call(e),
                        "rpc"
                    );
                }
                if (h) {
                    let t = f.connectionEntrypointUrl;
                    return (
                        (0, s.q)({
                            href: t,
                            onConfirm: () => {
                                var n;
                                (0, i.Z)(t), null == (n = e.onConfirm) || n.call(e);
                            },
                        }),
                        "web"
                    );
                }
                return null;
            },
            [p, h, f],
        ),
        connectionApp: f,
        preferredFlow: m,
        debug: d
            ? {
                  isSubscribedToAuthorizeRequest: _,
                  oauth2Token: E,
                  hasConnectionEntrypointUrl: (null == f ? void 0 : f.connectionEntrypointUrl) != null,
                  validFlows: [p ? "rpc" : null, h ? "web" : null].filter((e) => null != e),
              }
            : void 0,
    };
}
