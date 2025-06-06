n.d(t, { Z: () => m }), n(388685), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(447543),
    o = n(568154),
    s = n(703656),
    c = n(430824),
    u = n(701190),
    d = n(449934),
    p = n(650233),
    h = n(981631),
    f = n(898625),
    g = n(460160);
let m = (e) => {
    let { guildId: t, inviteCode: n } = e,
        [m, b] = i.useState(f.hO.INITIAL),
        [_, E] = i.useState(null != n);
    i.useEffect(() => {
        null != n && a.ZP.resolveInvite(n, 'Hub').finally(() => E(!1));
    }, [n]);
    let O = (0, l.e7)([u.Z], () => (null != n ? u.Z.getInvite(n) : null)),
        y = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
    i.useEffect(() => {
        null != y && (0, s.uL)(h.Z5c.CHANNEL(t));
    }, [y, t]);
    let I = i.useCallback((e) => {
            b((t) => Math.max(t, e));
        }, []),
        v = (0, d.gK)();
    return (0, r.jsx)('div', {
        className: g.page,
        children: (0, r.jsxs)(o.Z, {
            embedded: !0,
            splash: v,
            waveState: m,
            showLogo: !1,
            updateWaveState: I,
            children: [
                (0, r.jsx)('div', { className: g.dragRegion }),
                (0, r.jsx)('div', {
                    className: g.contentWrapper,
                    children: !_ && (0, r.jsx)(p.H, { invite: O })
                })
            ]
        })
    });
};
