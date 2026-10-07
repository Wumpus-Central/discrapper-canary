(n.d(l, { A: () => m, v: () => v }), n(667532));
var i = n(477900),
    a = n(582128),
    t = n(503698),
    r = n.n(t),
    s = n(17928),
    u = n(444550),
    d = n(548118),
    c = n(128450),
    o = n(836602),
    p = n(71393),
    g = n(711014),
    h = n(403362),
    x = n(660183),
    f = n(897023);
function m(e) {
    let { guildId: l, className: n, globalOption: a, hideDivider: t = !1, onChange: s, renderOptionSuffix: u } = e;
    return (0, i.jsx)(c.A, {
        className: r()(f.u, n),
        title: x.intl.string(x.t.ref7Ki),
        hideDivider: t,
        forcedDivider: !0,
        children: (0, i.jsx)(v, { guildId: l, onChange: s, renderOptionSuffix: u, globalOption: a }),
    });
}
function v(e) {
    let { guildId: l, globalOption: n, onChange: t, renderOptionSuffix: r } = e,
        c = (0, s.bG)([o.A], () => o.A.showNotice()),
        m = (0, s.bG)([g.Ay], () => g.Ay.getFlattenedGuildIds()),
        v = (0, s.bG)([p.A], () => p.A.getGuilds()),
        A = a.useMemo(() => {
            let e = m
                .map((e) => {
                    let l = v[e];
                    return null == l ? null : { label: l.name, value: l.id };
                })
                .filter(h.Vq);
            return (null != n && e.unshift(n), e);
        }, [m, v, n]),
        b = a.useCallback(
            (e) => {
                let l = e?.label === n?.label && e?.value === n?.value;
                return null == e || "" === e.value || l
                    ? null
                    : (0, i.jsx)(d.Ay, { className: f.c, guild: v[e.value], size: d.Ay.Sizes.SMOL, active: !0 });
            },
            [v, n],
        );
    return (0, i.jsx)(u.p, {
        isDisabled: c,
        onChange: function (e) {
            if ("" === e || e === n?.value) return void t(null);
            let l = v[e];
            null != l && t(l);
        },
        value: l,
        options: A,
        renderOptionPrefix: b,
        renderOptionSuffix: r,
        placeholder: x.intl.string(x.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
