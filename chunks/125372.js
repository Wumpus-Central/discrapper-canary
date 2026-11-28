var n = l(582128),
    u = l(855986),
    a = l(71393),
    r = l(233470),
    i = l(260498),
    s = l(733791),
    o = l(16619),
    d = l(313537),
    f = l(680032),
    p = l(624048),
    c = l(947275),
    y = l(652215),
    g = l(258576),
    h = l(792996);
function k(t) {
    return t.features.has(y.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
function _(t) {
    let e = (0, o.z9)("ConjureProjectServerChange"),
        l = (0, u.bG)([i.Ay], () => (0, d.fL)(i.Ay.getProject(t)), [t]),
        r = (0, u.bG)(
            [a.A],
            () => {
                let t = null == l ? null : a.A.getGuild(l);
                return null == t ? null : k(t);
            },
            [l],
        );
    return n.useMemo(() => e.filter((t) => t.id !== l && (null == r || k(t) === r)), [e, l, r]);
}
l.d(
    e,
    {},
    {
        Ay: function (t) {
            let e = (0, u.bG)([i.Ay], () => i.Ay.getProject(t), [t]),
                l = _(t),
                [a] = n.useState(() => e?.install_scope === "guild"),
                [o] = n.useState(l);
            n.useEffect(() => {
                a && (0, r.GO)(t);
            }, [a, t]);
            let d = (0, s.Bs)(a ? t : null),
                [y, k] = n.useState(null),
                m = null == y ? d : y.target,
                [x, b] = n.useState(null),
                v = o.find((t) => t.id === x) ?? o[0] ?? null,
                [S, L] = n.useState(!1),
                [P, w] = n.useState(null),
                A = e?.name ?? "",
                G = n.useMemo(
                    () => (null == e || null == v ? [] : a ? (0, f.by)(e, m, v.name) : (0, f.dv)(e, v.name)),
                    [e, v, a, m],
                ),
                O = n.useCallback((t) => {
                    (b(t), w(null));
                }, []),
                T = n.useCallback(async () => {
                    if (null == v) return null;
                    (L(!0), w(null), k({ target: d }), (0, p.u6)(t));
                    try {
                        await (0, r.xo)(t, v.id);
                    } catch (l) {
                        (0, p.MX)(t);
                        let e = l?.body?.message;
                        return (
                            w("string" == typeof e ? e : h.intl.string(a ? g.default.mdrXGt : g.default.qDjkvv)),
                            k(null),
                            L(!1),
                            null
                        );
                    }
                    return (
                        L(!1),
                        null != e && (0, c.Ay)(e, a ? "moved" : "added"),
                        h.intl.formatToPlainString(a ? g.default["B+Xtjy"] : g.default.yHhjsi, {
                            app: A,
                            server: v.name,
                        })
                    );
                }, [A, v, d, a, e, t]);
            return {
                appName: A,
                moving: a,
                guilds: o,
                guild: v,
                pickGuild: O,
                rows: G,
                pending: S,
                error: P,
                submit: T,
            };
        },
        Y3: _,
    },
);
