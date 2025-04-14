n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(780384),
    s = n(907040),
    l = n(210887),
    c = n(823379),
    u = n(51144),
    d = n(698305),
    f = n(510659),
    _ = n(810097),
    p = n(652853),
    h = n(228168),
    m = n(185923),
    g = n(420212),
    E = n(231338),
    b = n(388032),
    y = n(366463);
let v = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        o = ':'.concat(t.name, ':');
    switch (r) {
        case h.n_.ACTIVITY:
            let a = b.NW.formatToPlainString(b.t.EUFEJi, { username: n }),
                s = '\n> '.concat(i);
            return null != i ? ''.concat(_.jd).concat(a, '*').concat(s, '\n').concat(o) : ''.concat(_.jd).concat(a, '*\n').concat(o);
        case h.n_.AVATAR:
            let l = b.NW.formatToPlainString(b.t.E6H15u, { username: n });
            return ''.concat(_.jd).concat(l, '*\n').concat(o);
        case h.n_.STATUS:
            let u = b.NW.formatToPlainString(b.t.XPQgLy, { username: n }),
                d = '\n> '.concat(i);
            return null != i ? ''.concat(_.jd).concat(u, '*').concat(d, '\n').concat(o) : ''.concat(_.jd).concat(u, '*\n').concat(o);
        default:
            (0, c.vE)(r);
    }
};
function O(e) {
    let { user: t, guildId: n, entry: c, sourceType: _, sourceDetails: b, setPopoutRef: O, onAction: I, onClose: S } = e,
        { resetInteraction: T, setInteractionToast: N } = (0, f.Xo)(),
        { theme: A } = (0, p.z)(),
        C = (0, o.e7)([l.Z], () => l.Z.theme),
        R = (0, a.wj)(C) ? !(0, a.wj)(A) : (0, a.wj)(A),
        P = i.useRef(null);
    i.useEffect(() => {
        null == O || O(null == P ? void 0 : P.current);
    }, [P, O]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === g.vn.ESCAPE && (e.stopPropagation(), T());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [S, T]);
    let w = async (e) => {
        if (null == e) return;
        _ === h.n_.AVATAR ? I({ action: 'SEND_REACT_AVATAR' }) : _ === h.n_.STATUS ? I({ action: 'SEND_REACT_CUSTOM_STATUS' }) : I({ action: 'SEND_REACT_ACTIVITY' });
        let n = v({
            emoji: e,
            username: u.ZP.getName(t),
            sourceType: _,
            sourceDetails: b
        });
        N(null);
        try {
            await (0, d.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1,
                entry: c
            });
        } catch (e) {}
        N(h.P.REACT);
    };
    return (0, r.jsx)(s.Z, {
        headerClassName: R ? y.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: E.dG,
        onSelectEmoji: async (e, t) => {
            await w(e), t && (T(), null == S || S());
        },
        pickerIntention: m.Hz.PROFILE
    });
}
