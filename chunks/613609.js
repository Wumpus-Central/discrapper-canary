n.d(t, { Z: () => m }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(447543),
    o = n(568154),
    s = n(703656),
    c = n(430824),
    u = n(701190),
    d = n(449934),
    p = n(650233),
    f = n(981631),
    h = n(898625),
    g = n(242517);
let m = (e) => {
    let { guildId: t, inviteCode: n } = e,
        [m, b] = i.useState(h.hO.INITIAL),
        [_, O] = i.useState(null != n);
    i.useEffect(() => {
        null != n && a.ZP.resolveInvite(n, "Hub").finally(() => O(!1));
    }, [n]);
    let E = (0, l.e7)([u.Z], () => (null != n ? u.Z.getInvite(n) : null)),
        v = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
    i.useEffect(() => {
        null != v && (0, s.uL)(f.Z5c.CHANNEL(t));
    }, [v, t]);
    let y = i.useCallback((e) => {
            b((t) => Math.max(t, e));
        }, []),
        I = (0, d.gK)();
    return (0, r.jsx)("div", {
        className: g.page,
        children: (0, r.jsxs)(o.Z, {
            embedded: !0,
            splash: I,
            waveState: m,
            showLogo: !1,
            updateWaveState: y,
            children: [
                (0, r.jsx)("div", { className: g.dragRegion }),
                (0, r.jsx)("div", {
                    className: g.contentWrapper,
                    children: !_ && (0, r.jsx)(p.H, { invite: E }),
                }),
            ],
        }),
    });
};
