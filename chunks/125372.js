var n = l(582128),
    a = l(855986),
    r = l(233470),
    i = l(260498),
    s = l(733791),
    u = l(16619),
    o = l(313537),
    d = l(680032),
    c = l(894076),
    f = l(191850),
    m = l(792996);
function g(e) {
    let t = (0, u.z9)("ConjureProjectServerChange"),
        l = (0, a.bG)([i.Ay], () => (0, o.fL)(i.Ay.getProject(e)), [e]);
    return n.useMemo(() => t.filter((e) => e.id !== l), [t, l]);
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, a.bG)([i.Ay], () => i.Ay.getProject(e), [e]),
                l = g(e),
                [u] = n.useState(() => t?.install_scope === "guild"),
                [o] = n.useState(l);
            n.useEffect(() => {
                u && (0, r.GO)(e);
            }, [u, e]);
            let p = (0, s.Bs)(u ? e : null),
                [v, h] = n.useState(null),
                x = null == v ? p : v.target,
                [b, y] = n.useState(null),
                j = o.find((e) => e.id === b) ?? o[0] ?? null,
                [A, k] = n.useState(!1),
                [w, S] = n.useState(null),
                C = t?.name ?? "",
                E = n.useMemo(
                    () => (null == t || null == j ? [] : u ? (0, d.by)(t, x, j.name) : (0, d.dv)(t, j.name)),
                    [t, j, u, x],
                ),
                P = n.useCallback((e) => {
                    (y(e), S(null));
                }, []),
                _ = n.useCallback(async () => {
                    if (null == j) return null;
                    (k(!0), S(null), h({ target: p }));
                    try {
                        await (0, r.xo)(e, j.id);
                    } catch (t) {
                        let e = t?.body?.message;
                        return (
                            S("string" == typeof e ? e : m.intl.string(u ? f.default.mdrXGt : f.default.qDjkvv)),
                            h(null),
                            k(!1),
                            null
                        );
                    }
                    return (
                        k(!1),
                        null != t && (0, c.A)(t, u ? "moved" : "added"),
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
                pickGuild: P,
                rows: E,
                pending: A,
                error: w,
                submit: _,
            };
        },
        Y: g,
    },
);
