n.d(t, { A: () => x, v: () => p }), n(667532);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(444550),
    c = n(263063),
    d = n(128450),
    u = n(836602),
    _ = n(71393),
    m = n(711014),
    A = n(403362),
    g = n(985018),
    h = n(651203);
function x(e) {
    let { guildId: t, className: n, globalOption: s, hideDivider: a = !1, onChange: r, renderOptionSuffix: o } = e;
    return (0, i.jsx)(d.A, {
        className: l()(h.u, n),
        title: g.intl.string(g.t.ref7Ki),
        hideDivider: a,
        forcedDivider: !0,
        children: (0, i.jsx)(p, { guildId: t, onChange: r, renderOptionSuffix: o, globalOption: s }),
    });
}
function p(e) {
    let { guildId: t, globalOption: n, onChange: a, renderOptionSuffix: l } = e,
        d = (0, r.bG)([u.A], () => u.A.showNotice()),
        x = (0, r.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()),
        p = (0, r.bG)([_.A], () => _.A.getGuilds()),
        E = s.useMemo(() => {
            let e = x
                .map((e) => {
                    let t = p[e];
                    return null == t ? null : { label: t.name, value: t.id };
                })
                .filter(A.Vq);
            return null != n && e.unshift(n), e;
        }, [x, p, n]),
        C = s.useCallback(
            (e) => {
                let t = e?.label === n?.label && e?.value === n?.value;
                return null == e || "" === e.value || t
                    ? null
                    : (0, i.jsx)(c.Ay, { className: h.c, guild: p[e.value], size: c.Ay.Sizes.SMOL, active: !0 });
            },
            [p, n],
        );
    return (0, i.jsx)(o.p, {
        isDisabled: d,
        onChange: (e) => {
            if ("" === e || e === n?.value) return void a(null);
            let t = p[e];
            null != t && a(t);
        },
        value: t,
        options: E,
        renderOptionPrefix: C,
        renderOptionSuffix: l,
        placeholder: g.intl.string(g.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
