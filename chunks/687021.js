n.d(t, { A: () => p, v: () => x }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(444550),
    d = n(263063),
    u = n(128450),
    c = n(836602),
    g = n(71393),
    m = n(711014),
    _ = n(403362),
    A = n(985018),
    h = n(379464);
function p(e) {
    let { guildId: t, className: n, globalOption: s, hideDivider: l = !1, onChange: r, renderOptionSuffix: o } = e;
    return (0, i.jsx)(u.A, {
        className: a()(h.u, n),
        title: A.intl.string(A.t.ref7Ki),
        hideDivider: l,
        forcedDivider: !0,
        children: (0, i.jsx)(x, { guildId: t, onChange: r, renderOptionSuffix: o, globalOption: s }),
    });
}
function x(e) {
    let { guildId: t, globalOption: n, onChange: l, renderOptionSuffix: a } = e,
        u = (0, r.bG)([c.A], () => c.A.showNotice()),
        p = (0, r.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()),
        x = (0, r.bG)([g.A], () => g.A.getGuilds()),
        E = s.useMemo(() => {
            let e = p
                .map((e) => {
                    let t = x[e];
                    return null == t ? null : { label: t.name, value: t.id };
                })
                .filter(_.Vq);
            return null != n && e.unshift(n), e;
        }, [p, x, n]),
        T = s.useCallback(
            (e) => {
                let t = e?.label === n?.label && e?.value === n?.value;
                return null == e || "" === e.value || t
                    ? null
                    : (0, i.jsx)(d.Ay, { className: h.c, guild: x[e.value], size: d.Ay.Sizes.SMOL, active: !0 });
            },
            [x, n],
        );
    return (0, i.jsx)(o.p, {
        isDisabled: u,
        onChange: (e) => {
            if ("" === e || e === n?.value) return void l(null);
            let t = x[e];
            null != t && l(t);
        },
        value: t,
        options: E,
        renderOptionPrefix: T,
        renderOptionSuffix: a,
        placeholder: A.intl.string(A.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
