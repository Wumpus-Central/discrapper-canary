n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(780384),
    o = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(698305),
    f = n(510659),
    _ = n(810097),
    p = n(652853),
    h = n(228168),
    m = n(185923),
    g = n(420212),
    E = n(231338),
    v = n(388032),
    y = n(894639);
let I = (e) => {
    let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
        a = ':'.concat(t.name, ':');
    switch (i) {
        case h.n_.ACTIVITY:
            let s = v.intl.formatToPlainString(v.t.EUFEJi, { username: n }),
                o = '\n> '.concat(r);
            return null != r ? ''.concat(_.jd).concat(s, '*').concat(o, '\n').concat(a) : ''.concat(_.jd).concat(s, '*\n').concat(a);
        case h.n_.AVATAR:
            let l = v.intl.formatToPlainString(v.t.E6H15u, { username: n });
            return ''.concat(_.jd).concat(l, '*\n').concat(a);
        case h.n_.STATUS:
            let c = v.intl.formatToPlainString(v.t.XPQgLy, { username: n }),
                d = '\n> '.concat(r);
            return null != r ? ''.concat(_.jd).concat(c, '*').concat(d, '\n').concat(a) : ''.concat(_.jd).concat(c, '*\n').concat(a);
        default:
            (0, u.vE)(i);
    }
};
function T(e) {
    let { user: t, guildId: n, entry: u, sourceType: _, sourceDetails: v, setPopoutRef: T, onAction: b, onClose: S } = e,
        { resetInteraction: A, setInteractionToast: N } = (0, f.Xo)(),
        { theme: C } = (0, p.z)(),
        R = (0, a.e7)([l.Z], () => l.Z.theme),
        O = (0, s.wj)(R) ? !(0, s.wj)(C) : (0, s.wj)(C),
        D = r.useRef(null);
    r.useEffect(() => {
        null == T || T(null == D ? void 0 : D.current);
    }, [D, T]),
        r.useEffect(() => {
            let e = (e) => {
                e.key === g.vn.ESCAPE && (e.stopPropagation(), A());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [S, A]);
    let x = async (e) => {
        if (null == e) return;
        _ === h.n_.AVATAR ? b({ action: 'SEND_REACT_AVATAR' }) : _ === h.n_.STATUS ? b({ action: 'SEND_REACT_CUSTOM_STATUS' }) : b({ action: 'SEND_REACT_ACTIVITY' });
        let n = I({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: _,
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
                entry: u
            });
        } catch (e) {}
        N(h.P.REACT);
    };
    return (0, i.jsx)(o.Z, {
        headerClassName: O ? y.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: E.dG,
        onSelectEmoji: async (e, t) => {
            await x(e), t && (A(), null == S || S());
        },
        pickerIntention: m.Hz.PROFILE
    });
}
