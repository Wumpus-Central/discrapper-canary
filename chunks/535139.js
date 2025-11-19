n.d(t, {
    F: () => d,
    r: () => u,
});
var r = n(473749),
    i = n(782568),
    a = n(906555),
    o = n(812967),
    s = n(49012),
    l = n(491662),
    c = n(758677),
    u = (function (e) {
        return (e.RPC = "rpc"), (e.WEB = "web"), e;
    })({});
function d(e) {
    var t;
    let { allowedFlows: n = ["rpc", "web"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = (0, c.t)(e),
        d = (0, a.t)(null == u ? void 0 : u.id, "AUTHORIZE_REQUEST"),
        f = n.includes("rpc") && d,
        _ = n.includes("web") && (null == u ? void 0 : u.connectionEntrypointUrl) != null,
        p = f ? "rpc" : _ ? "web" : null,
        h = f || _,
        { token: m, fetched: g } = (0, l.o)(
            null != (t = null == u ? void 0 : u.parentId) ? t : null == u ? void 0 : u.id,
        ),
        E = g && null != m;
    return {
        fetched: g,
        hasAlreadyLinked: E,
        canStartAuthorization: h,
        startAuthorization: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == u) return null;
                if (f) {
                    var t;
                    return (
                        o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === u.id, {}),
                        null == (t = e.onConfirm) || t.call(e),
                        "rpc"
                    );
                }
                if (_) {
                    let t = u.connectionEntrypointUrl;
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
            [f, _, u],
        ),
        connectionApp: u,
        preferredFlow: p,
    };
}
