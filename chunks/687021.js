n.d(t, { A: () => h, v: () => p }), n(667532);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(444550),
    c = n(263063),
    d = n(128450),
    u = n(71393),
    _ = n(711014),
    m = n(403362),
    A = n(833336),
    g = n(985018),
    E = n(306505);
function h(e) {
    let { guildId: t, className: n, globalOption: s, hideDivider: r = !1, onChange: l, renderOptionSuffix: o } = e;
    return (0, i.jsx)(d.A, {
        className: a()(E.u, n),
        title: g.intl.string(g.t.ref7Ki),
        hideDivider: r,
        forcedDivider: !0,
        children: (0, i.jsx)(p, { guildId: t, onChange: l, renderOptionSuffix: o, globalOption: s }),
    });
}
function p(e) {
    let { guildId: t, globalOption: n, onChange: r, renderOptionSuffix: a } = e,
        d = (0, l.bG)([A.A], () => A.A.showNotice()),
        h = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
        p = (0, l.bG)([u.A], () => u.A.getGuilds()),
        C = s.useMemo(() => {
            let e = h
                .map((e) => {
                    let t = p[e];
                    return null == t ? null : { label: t.name, value: t.id };
                })
                .filter(m.Vq);
            return null != n && e.unshift(n), e;
        }, [h, p, n]),
        x = s.useCallback(
            (e) => {
                let t = e?.label === n?.label && e?.value === n?.value;
                return null == e || "" === e.value || t
                    ? null
                    : (0, i.jsx)(c.A, { className: E.c, guild: p[e.value], size: c.A.Sizes.SMOL, active: !0 });
            },
            [p, n],
        );
    return (0, i.jsx)(o.p, {
        isDisabled: d,
        onChange: (e) => {
            if ("" === e || e === n?.value) return void r(null);
            let t = p[e];
            null != t && r(t);
        },
        value: t,
        options: C,
        renderOptionPrefix: x,
        renderOptionSuffix: a,
        placeholder: g.intl.string(g.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
