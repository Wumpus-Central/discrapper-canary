r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(780384),
    l = r(907040),
    u = r(210887),
    c = r(823379),
    d = r(51144),
    f = r(698305),
    _ = r(510659),
    h = r(810097),
    p = r(652853),
    m = r(228168),
    g = r(185923),
    E = r(420212),
    v = r(231338),
    I = r(388032),
    T = r(894639);
let b = (e) => {
    let { emoji: n, username: r, sourceType: i, sourceDetails: a } = e,
        s = ':'.concat(n.name, ':');
    switch (i) {
        case m.n_.ACTIVITY:
            let o = I.intl.formatToPlainString(I.t.EUFEJi, { username: r }),
                l = '\n> '.concat(a);
            return null != a ? ''.concat(h.jd).concat(o, '*').concat(l, '\n').concat(s) : ''.concat(h.jd).concat(o, '*\n').concat(s);
        case m.n_.AVATAR:
            let u = I.intl.formatToPlainString(I.t.E6H15u, { username: r });
            return ''.concat(h.jd).concat(u, '*\n').concat(s);
        case m.n_.STATUS:
            let d = I.intl.formatToPlainString(I.t.XPQgLy, { username: r }),
                f = '\n> '.concat(a);
            return null != a ? ''.concat(h.jd).concat(d, '*').concat(f, '\n').concat(s) : ''.concat(h.jd).concat(d, '*\n').concat(s);
        default:
            (0, c.vE)(i);
    }
};
function y(e) {
    let { user: n, guildId: r, entry: c, sourceType: h, sourceDetails: I, setPopoutRef: y, onAction: S, onClose: A } = e,
        { resetInteraction: N, setInteractionToast: C } = (0, _.Xo)(),
        { theme: R } = (0, p.z)(),
        O = (0, s.e7)([u.Z], () => u.Z.theme),
        D = (0, o.wj)(O) ? !(0, o.wj)(R) : (0, o.wj)(R),
        L = a.useRef(null);
    a.useEffect(() => {
        null == y || y(null == L ? void 0 : L.current);
    }, [L, y]),
        a.useEffect(() => {
            let e = (e) => {
                e.key === E.vn.ESCAPE && (e.stopPropagation(), N());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [A, N]);
    let x = async (e) => {
        if (null == e) return;
        h === m.n_.AVATAR ? S({ action: 'SEND_REACT_AVATAR' }) : h === m.n_.STATUS ? S({ action: 'SEND_REACT_CUSTOM_STATUS' }) : S({ action: 'SEND_REACT_ACTIVITY' });
        let r = b({
            emoji: e,
            username: d.ZP.getName(n),
            sourceType: h,
            sourceDetails: I
        });
        C(null);
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
        C(m.P.REACT);
    };
    return (0, i.jsx)(l.Z, {
        headerClassName: D ? T.noBoxShadowMargin : void 0,
        guildId: null != r ? r : void 0,
        closePopout: v.dG,
        onSelectEmoji: async (e, n) => {
            await x(e), n && (N(), null == A || A());
        },
        pickerIntention: g.Hz.PROFILE
    });
}
