r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(780384),
    l = r(907040),
    u = r(210887),
    c = r(823379),
    d = r(51144),
    f = r(698305),
    p = r(510659),
    h = r(810097),
    _ = r(652853),
    m = r(228168),
    g = r(185923),
    E = r(420212),
    v = r(231338),
    y = r(388032),
    b = r(894639);
let I = (e) => {
    let { emoji: n, username: r, sourceType: i, sourceDetails: a } = e,
        o = ':'.concat(n.name, ':');
    switch (i) {
        case m.n_.ACTIVITY:
            let s = y.intl.formatToPlainString(y.t.EUFEJi, { username: r }),
                l = '\n> '.concat(a);
            return null != a ? ''.concat(h.jd).concat(s, '*').concat(l, '\n').concat(o) : ''.concat(h.jd).concat(s, '*\n').concat(o);
        case m.n_.AVATAR:
            let u = y.intl.formatToPlainString(y.t.E6H15u, { username: r });
            return ''.concat(h.jd).concat(u, '*\n').concat(o);
        case m.n_.STATUS:
            let d = y.intl.formatToPlainString(y.t.XPQgLy, { username: r }),
                f = '\n> '.concat(a);
            return null != a ? ''.concat(h.jd).concat(d, '*').concat(f, '\n').concat(o) : ''.concat(h.jd).concat(d, '*\n').concat(o);
        default:
            (0, c.vE)(i);
    }
};
function T(e) {
    let { user: n, guildId: r, entry: c, sourceType: h, sourceDetails: y, setPopoutRef: T, onAction: S, onClose: A } = e,
        { resetInteraction: C, setInteractionToast: N } = (0, p.Xo)(),
        { theme: R } = (0, _.z)(),
        O = (0, o.e7)([u.Z], () => u.Z.theme),
        D = (0, s.wj)(O) ? !(0, s.wj)(R) : (0, s.wj)(R),
        x = a.useRef(null);
    a.useEffect(() => {
        null == T || T(null == x ? void 0 : x.current);
    }, [x, T]),
        a.useEffect(() => {
            let e = (e) => {
                e.key === E.vn.ESCAPE && (e.stopPropagation(), C());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [A, C]);
    let L = async (e) => {
        if (null == e) return;
        h === m.n_.AVATAR ? S({ action: 'SEND_REACT_AVATAR' }) : h === m.n_.STATUS ? S({ action: 'SEND_REACT_CUSTOM_STATUS' }) : S({ action: 'SEND_REACT_ACTIVITY' });
        let r = I({
            emoji: e,
            username: d.ZP.getName(n),
            sourceType: h,
            sourceDetails: y
        });
        N(null);
        try {
            await (0, f.Z)({
                userId: n.id,
                content: r,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1,
                entry: c
            });
        } catch (e) {}
        N(m.P.REACT);
    };
    return (0, i.jsx)(l.Z, {
        headerClassName: D ? b.noBoxShadowMargin : void 0,
        guildId: null != r ? r : void 0,
        closePopout: v.dG,
        onSelectEmoji: async (e, n) => {
            await L(e), n && (C(), null == A || A());
        },
        pickerIntention: g.Hz.PROFILE
    });
}
