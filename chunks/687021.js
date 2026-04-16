a.d(t, { A: () => h, v: () => A }), a(667532);
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    l = a(311907),
    o = a(444550),
    d = a(263063),
    c = a(128450),
    u = a(836602),
    p = a(71393),
    m = a(711014),
    b = a(403362),
    f = a(985018),
    g = a(379464);
function h(e) {
    let { guildId: t, className: a, globalOption: r, hideDivider: n = !1, onChange: l, renderOptionSuffix: o } = e;
    return (0, s.jsx)(c.A, {
        className: i()(g.u, a),
        title: f.intl.string(f.t.ref7Ki),
        hideDivider: n,
        forcedDivider: !0,
        children: (0, s.jsx)(A, { guildId: t, onChange: l, renderOptionSuffix: o, globalOption: r }),
    });
}
function A(e) {
    let { guildId: t, globalOption: a, onChange: n, renderOptionSuffix: i } = e,
        c = (0, l.bG)([u.A], () => u.A.showNotice()),
        h = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()),
        A = (0, l.bG)([p.A], () => p.A.getGuilds()),
        x = r.useMemo(() => {
            let e = h
                .map((e) => {
                    let t = A[e];
                    return null == t ? null : { label: t.name, value: t.id };
                })
                .filter(b.Vq);
            return null != a && e.unshift(a), e;
        }, [h, A, a]),
        R = r.useCallback(
            (e) => {
                let t = e?.label === a?.label && e?.value === a?.value;
                return null == e || "" === e.value || t
                    ? null
                    : (0, s.jsx)(d.Ay, { className: g.c, guild: A[e.value], size: d.Ay.Sizes.SMOL, active: !0 });
            },
            [A, a],
        );
    return (0, s.jsx)(o.p, {
        isDisabled: c,
        onChange: (e) => {
            if ("" === e || e === a?.value) return void n(null);
            let t = A[e];
            null != t && n(t);
        },
        value: t,
        options: x,
        renderOptionPrefix: R,
        renderOptionSuffix: i,
        placeholder: f.intl.string(f.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
