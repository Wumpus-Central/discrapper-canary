var n = l(582128),
    a = l(855986),
    i = l(233470),
    r = l(260498),
    s = l(733791),
    u = l(16619),
    o = l(313537),
    d = l(680032),
    c = l(959956),
    f = l(258576),
    m = l(792996);
function g(e) {
    let t = (0, u.z9)("ConjureProjectServerChange"),
        l = (0, a.bG)([r.Ay], () => (0, o.fL)(r.Ay.getProject(e)), [e]);
    return n.useMemo(() => t.filter((e) => e.id !== l), [t, l]);
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, a.bG)([r.Ay], () => r.Ay.getProject(e), [e]),
                l = g(e),
                [u] = n.useState(() => t?.install_scope === "guild"),
                [o] = n.useState(l);
            n.useEffect(() => {
                u && (0, i.GO)(e);
            }, [u, e]);
            let p = (0, s.Bs)(u ? e : null),
                [h, v] = n.useState(null),
                x = null == h ? p : h.target,
                [b, y] = n.useState(null),
                j = o.find((e) => e.id === b) ?? o[0] ?? null,
                [k, A] = n.useState(!1),
                [S, w] = n.useState(null),
                C = t?.name ?? "",
                E = n.useMemo(
                    () => (null == t || null == j ? [] : u ? (0, d.by)(t, x, j.name) : (0, d.dv)(t, j.name)),
                    [t, j, u, x],
                ),
                I = n.useCallback((e) => {
                    (y(e), w(null));
                }, []),
                P = n.useCallback(async () => {
                    if (null == j) return null;
                    (A(!0), w(null), v({ target: p }));
                    try {
                        await (0, i.xo)(e, j.id);
                    } catch (t) {
                        let e = t?.body?.message;
                        return (
                            w("string" == typeof e ? e : m.intl.string(u ? f.default.mdrXGt : f.default.qDjkvv)),
                            v(null),
                            A(!1),
                            null
                        );
                    }
                    return (
                        A(!1),
                        null != t && (0, c.Ay)(t, u ? "moved" : "added"),
                        m.intl.formatToPlainString(u ? f.default["B+Xtjy"] : f.default.yHhjsi, {
                            app: C,
                            server: j.name,
                        })
                    );
                }, [C, j, p, u, t, e]);
            return {
                appName: C,
                moving: u,
                guilds: o,
                guild: j,
                pickGuild: I,
                rows: E,
                pending: k,
                error: S,
                submit: P,
            };
        },
        Y: g,
    },
);
