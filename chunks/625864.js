n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(922016),
    r = n(305866),
    a = n(228366),
    o = n(964486),
    d = n(625494),
    c = n(851109);
let u = (0, n(353640).v)((e) => ({ isOpen: !1, setIsOpen: (t) => e({ isOpen: t }) }));
var h = n(276523),
    A = n(652215),
    _ = n(985018),
    g = n(243415);
function m(e) {
    let { children: t, popoutPosition: n, popoutAlign: h, targetElementRef: g, spacing: m = 0 } = e,
        { isOpen: f, setIsOpen: E } = u(),
        C = l.useCallback(() => {
            E(!1);
        }, [E]),
        x = l.useCallback(() => {
            E(!f);
        }, [f, E]);
    (0, o.Ay)(() => {
        let e = () => {
            E(!1);
        };
        return a.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (d._.subscribe(A.jej.TOGGLE_INBOX, x), () => void d._.unsubscribe(A.jej.TOGGLE_INBOX, x)),
            [x],
        );
    let { entrypoint: I } = (0, c.X8)({ location: "NotificationsInboxPopout" });
    return (0, i.jsx)(s.Y, {
        targetElementRef: g,
        shouldShow: f,
        align: h,
        animation: I === c.RK.TITLE_BAR_LEFT ? s.Y.Animation.TRANSLATE : s.Y.Animation.FADE,
        animationPosition: I === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: C,
        spacing: m,
        renderPopout: () => (0, i.jsx)(r.l, { "aria-label": _.intl.string(_.t.GSmTKJ), children: (0, i.jsx)(p, {}) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return t(x, i, e);
        },
    });
}
function p() {
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", { className: g._Q, children: (0, i.jsx)("span", { className: g.Tp }) }),
            (0, i.jsx)(h.A, {}),
        ],
    });
}
