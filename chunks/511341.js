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
    p = n(810097),
    _ = n(652853),
    h = n(228168),
    m = n(185923),
    g = n(420212),
    E = n(231338),
    v = n(388032),
    b = n(666868);
let y = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        o = ':'.concat(t.name, ':');
    switch (r) {
        case h.n_.ACTIVITY:
            let a = v.NW.formatToPlainString(v.t.EUFEJi, { username: n }),
                s = '\n> '.concat(i);
            return null != i ? ''.concat(p.jd).concat(a, '*').concat(s, '\n').concat(o) : ''.concat(p.jd).concat(a, '*\n').concat(o);
        case h.n_.AVATAR:
            let l = v.NW.formatToPlainString(v.t.E6H15u, { username: n });
            return ''.concat(p.jd).concat(l, '*\n').concat(o);
        case h.n_.STATUS:
            let u = v.NW.formatToPlainString(v.t.XPQgLy, { username: n }),
                d = '\n> '.concat(i);
            return null != i ? ''.concat(p.jd).concat(u, '*').concat(d, '\n').concat(o) : ''.concat(p.jd).concat(u, '*\n').concat(o);
        default:
            (0, c.vE)(r);
    }
};
function O(e) {
    let { user: t, guildId: n, entry: c, sourceType: p, sourceDetails: v, setPopoutRef: O, onAction: S, onClose: I } = e,
        { resetInteraction: T, setInteractionToast: N } = (0, f.Xo)(),
        { theme: A } = (0, _.z)(),
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
        }, [I, T]);
    let w = async (e) => {
        if (null == e) return;
        p === h.n_.AVATAR ? S({ action: 'SEND_REACT_AVATAR' }) : p === h.n_.STATUS ? S({ action: 'SEND_REACT_CUSTOM_STATUS' }) : S({ action: 'SEND_REACT_ACTIVITY' });
        let n = y({
            emoji: e,
            username: u.ZP.getName(t),
            sourceType: p,
            sourceDetails: v
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
        headerClassName: R ? b.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: E.dG,
        onSelectEmoji: async (e, t) => {
            await w(e), t && (T(), null == I || I());
        },
        pickerIntention: m.Hz.PROFILE
    });
}
