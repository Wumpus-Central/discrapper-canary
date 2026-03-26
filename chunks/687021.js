a.d(t, { A: () => g, v: () => h }), a(667532);
var r = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(311907),
    d = a(444550),
    o = a(263063),
    c = a(128450),
    u = a(836602),
    _ = a(71393),
    m = a(711014),
    p = a(403362),
    b = a(985018),
    f = a(263928);
function g(e) {
    let { guildId: t, className: a, globalOption: n, hideDivider: i = !1, onChange: l, renderOptionSuffix: d } = e;
    return (0, r.jsx)(c.A, {
        className: s()(f.u, a),
        title: b.intl.string(b.t.ref7Ki),
        hideDivider: i,
        forcedDivider: !0,
        children: (0, r.jsx)(h, { guildId: t, onChange: l, renderOptionSuffix: d, globalOption: n }),
    });
}
function h(e) {
    let { guildId: t, globalOption: a, onChange: i, renderOptionSuffix: s } = e,
        c = (0, l.bG)([u.A], () => u.A.showNotice()),
        g = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()),
        h = (0, l.bG)([_.A], () => _.A.getGuilds()),
        A = n.useMemo(() => {
            let e = g
                .map((e) => {
                    let t = h[e];
                    return null == t ? null : { label: t.name, value: t.id };
                })
                .filter(p.Vq);
            return null != a && e.unshift(a), e;
        }, [g, h, a]),
        x = n.useCallback(
            (e) => {
                let t = e?.label === a?.label && e?.value === a?.value;
                return null == e || "" === e.value || t
                    ? null
                    : (0, r.jsx)(o.Ay, { className: f.c, guild: h[e.value], size: o.Ay.Sizes.SMOL, active: !0 });
            },
            [h, a],
        );
    return (0, r.jsx)(d.p, {
        isDisabled: c,
        onChange: (e) => {
            if ("" === e || e === a?.value) return void i(null);
            let t = h[e];
            null != t && i(t);
        },
        value: t,
        options: A,
        renderOptionPrefix: x,
        renderOptionSuffix: s,
        placeholder: b.intl.string(b.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
