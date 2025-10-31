n.d(t, { Z: () => g }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(447543),
    s = n(568154),
    o = n(703656),
    c = n(430824),
    u = n(701190),
    d = n(449934),
    p = n(650233),
    f = n(981631),
    m = n(898625),
    h = n(242517);
let g = (e) => {
    let { guildId: t, inviteCode: n } = e,
        [g, _] = i.useState(m.hO.INITIAL),
        [b, E] = i.useState(null != n);
    i.useEffect(() => {
        null != n && a.ZP.resolveInvite(n, "Hub").finally(() => E(!1));
    }, [n]);
    let O = (0, l.e7)([u.Z], () => (null != n ? u.Z.getInvite(n) : null)),
        I = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
    i.useEffect(() => {
        null != I && (0, o.uL)(f.Z5c.CHANNEL(t));
    }, [I, t]);
    let y = i.useCallback((e) => {
            _((t) => Math.max(t, e));
        }, []),
        v = (0, d.gK)();
    return (0, r.jsx)("div", {
        className: h.page,
        children: (0, r.jsxs)(s.Z, {
            embedded: !0,
            splash: v,
            waveState: g,
            showLogo: !1,
            updateWaveState: y,
            children: [
                (0, r.jsx)("div", { className: h.dragRegion }),
                (0, r.jsx)("div", {
                    className: h.contentWrapper,
                    children: !b && (0, r.jsx)(p.H, { invite: O }),
                }),
            ],
        }),
    });
};
