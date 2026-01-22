n.d(t, {
    A: () => A,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(582754),
    o = n(937773),
    l = n(544028),
    c = n(403362),
    u = n(427262),
    d = n(448613),
    f = n(679492),
    p = n(8925),
    _ = n(939496),
    h = n(518477),
    m = n(307731),
    g = n(818348),
    E = n(650583),
    b = n(985018),
    y = n(433366);
let O = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ":".concat(t.name, ":");
    switch (r) {
        case h.dS.ACTIVITY:
            let s = b.intl.formatToPlainString(b.t.EUFEJt, {
                    username: n,
                }),
                o = "\n> ".concat(i);
            return null != i
                ? "".concat(p.c5).concat(s, "*").concat(o, "\n").concat(a)
                : "".concat(p.c5).concat(s, "*\n").concat(a);
        case h.dS.AVATAR:
            let l = b.intl.formatToPlainString(b.t.E6H15q, {
                username: n,
            });
            return "".concat(p.c5).concat(l, "*\n").concat(a);
        case h.dS.STATUS:
            let u = b.intl.formatToPlainString(b.t.XPQgL2, {
                    username: n,
                }),
                d = "\n> ".concat(i);
            return null != i
                ? "".concat(p.c5).concat(u, "*").concat(d, "\n").concat(a)
                : "".concat(p.c5).concat(u, "*\n").concat(a);
        default:
            (0, c.xb)(r);
    }
};

function A(e) {
    let {
            user: t,
            guildId: n,
            entry: c,
            sourceType: p,
            sourceDetails: b,
            setPopoutRef: A,
            onAction: v,
            onClose: S,
        } = e,
        { resetInteraction: I, setInteractionToast: T } = (0, f.Pq)(),
        { theme: C } = (0, _.E)(),
        N = (0, a.bG)([l.A], () => l.A.theme),
        R = (0, s.Mw)(N) ? !(0, s.Mw)(C) : (0, s.Mw)(C),
        w = i.useRef(null);
    i.useEffect(() => {
        null == A || A(null == w ? void 0 : w.current);
    }, [w, A]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === E.dh.ESCAPE && (e.stopPropagation(), I());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [S, I]);
    let P = async (e) => {
        if (null == e) return;
        p === h.dS.AVATAR
            ? v({
                  action: "SEND_REACT_AVATAR",
              })
            : p === h.dS.STATUS
              ? v({
                    action: "SEND_REACT_CUSTOM_STATUS",
                })
              : v({
                    action: "SEND_REACT_ACTIVITY",
                });
        let n = O({
            emoji: e,
            username: u.Ay.getName(t),
            sourceType: p,
            sourceDetails: b,
        });
        T(null);
        try {
            await (0, d.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: c,
            });
        } catch (e) {}
        T(h.AQ.REACT);
    };
    return (0, r.jsx)(o.A, {
        headerClassName: R ? y.X : void 0,
        guildId: null != n ? n : void 0,
        closePopout: g.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await P(t), n && (I(), null == S || S());
        },
        pickerIntention: m.b_.PROFILE,
    });
}
