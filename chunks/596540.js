n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(265872),
    a = n(305866),
    r = n(73153),
    o = n(964486),
    d = n(203982),
    c = n(851109),
    u = n(355741),
    h = n(480680),
    A = n(652215),
    _ = n(985018),
    m = n(243415);
function g(e) {
    let { children: t, popoutPosition: n, popoutAlign: h, targetElementRef: m, spacing: g = 0 } = e,
        { isOpen: f, setIsOpen: E } = (0, u.A)(),
        x = l.useCallback(() => {
            E(!1);
        }, [E]),
        I = l.useCallback(() => {
            E(!f);
        }, [f, E]);
    (0, o.Ay)(() => {
        let e = () => {
            E(!1);
        };
        return r.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => r.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (d._.subscribe(A.jej.TOGGLE_INBOX, I), () => void d._.unsubscribe(A.jej.TOGGLE_INBOX, I)),
            [I],
        );
    let { entrypoint: C } = (0, c.X8)({ location: "NotificationsInboxPopout" });
    return (0, i.jsx)(s.Y, {
        targetElementRef: m,
        shouldShow: f,
        align: h,
        animation: C === c.RK.TITLE_BAR_LEFT ? s.Y.Animation.TRANSLATE : s.Y.Animation.FADE,
        animationPosition: C === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: x,
        spacing: g,
        renderPopout: () => (0, i.jsx)(a.l, { "aria-label": _.intl.string(_.t.GSmTKJ), children: (0, i.jsx)(p, {}) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return t(I, i, e);
        },
    });
}
function p() {
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)("div", { className: m._Q, children: (0, i.jsx)("span", { className: m.Tp }) }),
            (0, i.jsx)(h.A, {}),
        ],
    });
}
