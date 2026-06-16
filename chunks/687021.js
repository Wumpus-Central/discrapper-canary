n.d(l, { A: () => m, v: () => v }), n(667532);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    t = n.n(r),
    s = n(17928),
    u = n(444550),
    d = n(548118),
    c = n(128450),
    o = n(836602),
    p = n(71393),
    f = n(711014),
    g = n(403362),
    h = n(375708),
    x = n(379464);
function m(e) {
    let { guildId: l, className: n, globalOption: a, hideDivider: r = !1, onChange: s, renderOptionSuffix: u } = e;
    return (0, i.jsx)(c.A, {
        className: t()(x.u, n),
        title: h.intl.string(h.t.ref7Ki),
        hideDivider: r,
        forcedDivider: !0,
        children: (0, i.jsx)(v, { guildId: l, onChange: s, renderOptionSuffix: u, globalOption: a }),
    });
}
function v(e) {
    let { guildId: l, globalOption: n, onChange: r, renderOptionSuffix: t } = e,
        c = (0, s.bG)([o.A], () => o.A.showNotice()),
        m = (0, s.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()),
        v = (0, s.bG)([p.A], () => p.A.getGuilds()),
        A = a.useMemo(() => {
            let e = m
                .map((e) => {
                    let l = v[e];
                    return null == l ? null : { label: l.name, value: l.id };
                })
                .filter(g.Vq);
            return null != n && e.unshift(n), e;
        }, [m, v, n]),
        b = a.useCallback(
            (e) => {
                let l = e?.label === n?.label && e?.value === n?.value;
                return null == e || "" === e.value || l
                    ? null
                    : (0, i.jsx)(d.Ay, { className: x.c, guild: v[e.value], size: d.Ay.Sizes.SMOL, active: !0 });
            },
            [v, n],
        );
    return (0, i.jsx)(u.p, {
        isDisabled: c,
        onChange: (e) => {
            if ("" === e || e === n?.value) return void r(null);
            let l = v[e];
            null != l && r(l);
        },
        value: l,
        options: A,
        renderOptionPrefix: b,
        renderOptionSuffix: t,
        placeholder: h.intl.string(h.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
