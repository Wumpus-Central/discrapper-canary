n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(447543),
    s = n(568154),
    o = n(703656),
    c = n(430824),
    d = n(701190),
    u = n(449934),
    h = n(650233),
    m = n(981631),
    p = n(898625),
    g = n(214463);
t.Z = (e) => {
    let { guildId: t, inviteCode: n } = e,
        [f, _] = r.useState(p.hO.INITIAL),
        [E, I] = r.useState(null != n);
    r.useEffect(() => {
        null != n && a.Z.resolveInvite(n, 'Hub').finally(() => I(!1));
    }, [n]);
    let C = (0, l.e7)([d.Z], () => (null != n ? d.Z.getInvite(n) : null)),
        v = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
    r.useEffect(() => {
        null != v && (0, o.uL)(m.Z5c.CHANNEL(t));
    }, [v, t]);
    let N = r.useCallback((e) => {
            _((t) => Math.max(t, e));
        }, []),
        S = (0, u.gK)();
    return (0, i.jsx)('div', {
        className: g.page,
        children: (0, i.jsxs)(s.Z, {
            embedded: !0,
            splash: S,
            waveState: f,
            showLogo: !1,
            updateWaveState: N,
            children: [
                (0, i.jsx)('div', { className: g.dragRegion }),
                (0, i.jsx)('div', {
                    className: g.contentWrapper,
                    children: !E && (0, i.jsx)(h.HubEmailConnectionModalView, { invite: C })
                })
            ]
        })
    });
};
