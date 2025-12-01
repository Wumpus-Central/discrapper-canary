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
        p = (0, a.t)(null == f ? void 0 : f.id, "AUTHORIZE_REQUEST"),
        _ = u.includes("rpc") && p,
        m = u.includes("web") && (null == f ? void 0 : f.connectionEntrypointUrl) != null,
        h = _ ? "rpc" : m ? "web" : null,
        g = _ || m,
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
                if (_) {
                    var t;
                    return (
                        o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === f.id, {}),
                        null == (t = e.onConfirm) || t.call(e),
                        "rpc"
                    );
                }
                if (m) {
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
            [_, m, f],
        ),
        connectionApp: f,
        preferredFlow: h,
        debug: d
            ? {
                  isSubscribedToAuthorizeRequest: p,
                  oauth2Token: E,
                  hasConnectionEntrypointUrl: (null == f ? void 0 : f.connectionEntrypointUrl) != null,
                  validFlows: [_ ? "rpc" : null, m ? "web" : null].filter((e) => null != e),
              }
            : void 0,
    };
}
