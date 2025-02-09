n.d(t, { Z: () => _ }), n(47120), n(773603);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(447543),
    s = n(568154),
    o = n(703656),
    c = n(430824),
    d = n(701190),
    u = n(449934),
    h = n(650233),
    m = n(981631),
    p = n(898625),
    g = n(748506);
let _ = (e) => {
    let { guildId: t, inviteCode: n } = e,
        [_, f] = l.useState(p.hO.INITIAL),
        [E, I] = l.useState(null != n);
    l.useEffect(() => {
        null != n && a.Z.resolveInvite(n, 'Hub').finally(() => I(!1));
    }, [n]);
    let C = (0, r.e7)([d.Z], () => (null != n ? d.Z.getInvite(n) : null)),
        v = (0, r.e7)([c.Z], () => c.Z.getGuild(t));
    l.useEffect(() => {
        null != v && (0, o.uL)(m.Z5c.CHANNEL(t));
    }, [v, t]);
    let N = l.useCallback((e) => {
            f((t) => Math.max(t, e));
        }, []),
        T = (0, u.gK)();
    return (0, i.jsx)('div', {
        className: g.page,
        children: (0, i.jsxs)(s.Z, {
            embedded: !0,
            splash: T,
            waveState: _,
            showLogo: !1,
            updateWaveState: N,
            children: [
                (0, i.jsx)('div', { className: g.dragRegion }),
                (0, i.jsx)('div', {
                    className: g.contentWrapper,
                    children: !E && (0, i.jsx)(h.H, { invite: C })
                })
            ]
        })
    });
};
