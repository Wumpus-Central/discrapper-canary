var n = l(582128),
    a = l(855986),
    r = l(233470),
    i = l(260498),
    s = l(733791),
    u = l(16619),
    o = l(313537),
    d = l(680032),
    c = l(191850),
    f = l(792996);
function m(e) {
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
                l = m(e),
                [u] = n.useState(() => t?.install_scope === "guild"),
                [o] = n.useState(l);
            n.useEffect(() => {
                u && (0, r.GO)(e);
            }, [u, e]);
            let p = (0, s.Bs)(u ? e : null),
                [g, v] = n.useState(null),
                h = null == g ? p : g.target,
                [x, b] = n.useState(null),
                y = o.find((e) => e.id === x) ?? o[0] ?? null,
                [j, k] = n.useState(!1),
                [A, S] = n.useState(null),
                w = t?.name ?? "",
                C = n.useMemo(
                    () => (null == t || null == y ? [] : u ? (0, d.by)(t, h, y.name) : (0, d.dv)(t, y.name)),
                    [t, y, u, h],
                ),
                P = n.useCallback((e) => {
                    (b(e), S(null));
                }, []),
                E = n.useCallback(async () => {
                    if (null == y) return null;
                    (k(!0), S(null), v({ target: p }));
                    try {
                        await (0, r.xo)(e, y.id);
                    } catch (t) {
                        let e = t?.body?.message;
                        return (
                            S("string" == typeof e ? e : f.intl.string(u ? c.default.mdrXGt : c.default.qDjkvv)),
                            v(null),
                            k(!1),
                            null
                        );
                    }
                    return (
                        k(!1),
                        f.intl.formatToPlainString(u ? c.default["B+Xtjy"] : c.default.yHhjsi, {
                            app: w,
                            server: y.name,
                        })
                    );
                }, [w, y, p, u, e]);
            return {
                appName: w,
                moving: u,
                guilds: o,
                guild: y,
                pickGuild: P,
                rows: C,
                pending: j,
                error: A,
                submit: E,
            };
        },
        Y: m,
    },
);
