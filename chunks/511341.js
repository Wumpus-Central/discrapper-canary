n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(780384),
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
    g = n(231338),
    E = n(295907),
    b = n(388032),
    y = n(396579);
let O = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ":".concat(t.name, ":");
    switch (r) {
        case h.n_.ACTIVITY:
            let o = b.intl.formatToPlainString(b.t.EUFEJt, { username: n }),
                s = "\n> ".concat(i);
            return null != i
                ? "".concat(_.jd).concat(o, "*").concat(s, "\n").concat(a)
                : "".concat(_.jd).concat(o, "*\n").concat(a);
        case h.n_.AVATAR:
            let l = b.intl.formatToPlainString(b.t.E6H15q, { username: n });
            return "".concat(_.jd).concat(l, "*\n").concat(a);
        case h.n_.STATUS:
            let u = b.intl.formatToPlainString(b.t.XPQgL2, { username: n }),
                d = "\n> ".concat(i);
            return null != i
                ? "".concat(_.jd).concat(u, "*").concat(d, "\n").concat(a)
                : "".concat(_.jd).concat(u, "*\n").concat(a);
        default:
            (0, c.vE)(r);
    }
};
function v(e) {
    let {
            user: t,
            guildId: n,
            entry: c,
            sourceType: _,
            sourceDetails: b,
            setPopoutRef: v,
            onAction: I,
            onClose: T,
        } = e,
        { resetInteraction: S, setInteractionToast: A } = (0, f.Xo)(),
        { theme: C } = (0, p.z)(),
        N = (0, a.e7)([l.Z], () => l.Z.theme),
        R = (0, o.wj)(N) ? !(0, o.wj)(C) : (0, o.wj)(C),
        P = i.useRef(null);
    i.useEffect(() => {
        null == v || v(null == P ? void 0 : P.current);
    }, [P, v]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === E.vn.ESCAPE && (e.stopPropagation(), S());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [T, S]);
    let D = async (e) => {
        if (null == e) return;
        _ === h.n_.AVATAR
            ? I({ action: "SEND_REACT_AVATAR" })
            : _ === h.n_.STATUS
              ? I({ action: "SEND_REACT_CUSTOM_STATUS" })
              : I({ action: "SEND_REACT_ACTIVITY" });
        let n = O({
            emoji: e,
            username: u.ZP.getName(t),
            sourceType: _,
            sourceDetails: b,
        });
        A(null);
        try {
            await (0, d.Z)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: c,
            });
        } catch (e) {}
        A(h.P.REACT);
    };
    return (0, r.jsx)(s.Z, {
        headerClassName: R ? y.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: g.dG,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await D(t), n && (S(), null == T || T());
        },
        pickerIntention: m.Hz.PROFILE,
    });
}
