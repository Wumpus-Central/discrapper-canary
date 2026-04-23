n.d(t, { A: () => p, v: () => E }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(444550),
    d = n(548118),
    u = n(128450),
    c = n(836602),
    g = n(71393),
    _ = n(711014),
    m = n(403362),
    h = n(985018),
    A = n(379464);
function p(e) {
    let { guildId: t, className: n, globalOption: l, hideDivider: s = !1, onChange: r, renderOptionSuffix: o } = e;
    return (0, i.jsx)(u.A, {
        className: a()(A.u, n),
        title: h.intl.string(h.t.ref7Ki),
        hideDivider: s,
        forcedDivider: !0,
        children: (0, i.jsx)(E, { guildId: t, onChange: r, renderOptionSuffix: o, globalOption: l }),
    });
}
function E(e) {
    let { guildId: t, globalOption: n, onChange: s, renderOptionSuffix: a } = e,
        u = (0, r.bG)([c.A], () => c.A.showNotice()),
        p = (0, r.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
        E = (0, r.bG)([g.A], () => g.A.getGuilds()),
        T = l.useMemo(() => {
            let e = p
                .map((e) => {
                    let t = E[e];
                    return null == t ? null : { label: t.name, value: t.id };
                })
                .filter(m.Vq);
            return null != n && e.unshift(n), e;
        }, [p, E, n]),
        S = l.useCallback(
            (e) => {
                let t = e?.label === n?.label && e?.value === n?.value;
                return null == e || "" === e.value || t
                    ? null
                    : (0, i.jsx)(d.Ay, { className: A.c, guild: E[e.value], size: d.Ay.Sizes.SMOL, active: !0 });
            },
            [E, n],
        );
    return (0, i.jsx)(o.p, {
        isDisabled: u,
        onChange: (e) => {
            if ("" === e || e === n?.value) return void s(null);
            let t = E[e];
            null != t && s(t);
        },
        value: t,
        options: T,
        renderOptionPrefix: S,
        renderOptionSuffix: a,
        placeholder: h.intl.string(h.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
