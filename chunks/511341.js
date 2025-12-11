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
    p = n(810097),
    _ = n(652853),
    m = n(228168),
    h = n(185923),
    g = n(231338),
    E = n(295907),
    b = n(388032),
    y = n(84784);
let O = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ":".concat(t.name, ":");
    switch (r) {
        case m.n_.ACTIVITY:
            let o = b.intl.formatToPlainString(b.t.EUFEJt, { username: n }),
                s = "\n> ".concat(i);
            return null != i
                ? "".concat(p.jd).concat(o, "*").concat(s, "\n").concat(a)
                : "".concat(p.jd).concat(o, "*\n").concat(a);
        case m.n_.AVATAR:
            let l = b.intl.formatToPlainString(b.t.E6H15q, { username: n });
            return "".concat(p.jd).concat(l, "*\n").concat(a);
        case m.n_.STATUS:
            let u = b.intl.formatToPlainString(b.t.XPQgL2, { username: n }),
                d = "\n> ".concat(i);
            return null != i
                ? "".concat(p.jd).concat(u, "*").concat(d, "\n").concat(a)
                : "".concat(p.jd).concat(u, "*\n").concat(a);
        default:
            (0, c.vE)(r);
    }
};
function v(e) {
    let {
            user: t,
            guildId: n,
            entry: c,
            sourceType: p,
            sourceDetails: b,
            setPopoutRef: v,
            onAction: S,
            onClose: I,
        } = e,
        { resetInteraction: T, setInteractionToast: C } = (0, f.Xo)(),
        { theme: A } = (0, _.z)(),
        N = (0, a.e7)([l.Z], () => l.Z.theme),
        P = (0, o.wj)(N) ? !(0, o.wj)(A) : (0, o.wj)(A),
        R = i.useRef(null);
    i.useEffect(() => {
        null == v || v(null == R ? void 0 : R.current);
    }, [R, v]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === E.vn.ESCAPE && (e.stopPropagation(), T());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [I, T]);
    let w = async (e) => {
        if (null == e) return;
        p === m.n_.AVATAR
            ? S({ action: "SEND_REACT_AVATAR" })
            : p === m.n_.STATUS
              ? S({ action: "SEND_REACT_CUSTOM_STATUS" })
              : S({ action: "SEND_REACT_ACTIVITY" });
        let n = O({
            emoji: e,
            username: u.ZP.getName(t),
            sourceType: p,
            sourceDetails: b,
        });
        C(null);
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
        C(m.P.REACT);
    };
    return (0, r.jsx)(s.Z, {
        headerClassName: P ? y.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: g.dG,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await w(t), n && (T(), null == I || I());
        },
        pickerIntention: h.Hz.PROFILE,
    });
}
