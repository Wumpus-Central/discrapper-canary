t.d(n, { A: () => b });
var s = t(627968),
    i = t(64700),
    o = t(922016),
    a = t(305866),
    l = t(228366),
    r = t(964486),
    c = t(625494),
    u = t(851109);
let d = (0, t(353640).v)((e) => ({ isOpen: !1, setIsOpen: (n) => e({ isOpen: n }) }));
var h = t(276523),
    p = t(652215),
    _ = t(985018),
    m = t(243415);
function b(e) {
    let { children: n, popoutPosition: t, popoutAlign: h, targetElementRef: m, spacing: b = 0 } = e,
        { isOpen: g, setIsOpen: x } = d(),
        E = i.useCallback(() => {
            x(!1);
        }, [x]),
        T = i.useCallback(() => {
            x(!g);
        }, [g, x]);
    (0, r.Ay)(() => {
        let e = () => {
            x(!1);
        };
        return l.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => l.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        i.useEffect(
            () => (c._.subscribe(p.jej.TOGGLE_INBOX, T), () => void c._.unsubscribe(p.jej.TOGGLE_INBOX, T)),
            [T],
        );
    let { entrypoint: A } = (0, u.X8)({ location: "NotificationsInboxPopout" });
    return (0, s.jsx)(o.Y, {
        targetElementRef: m,
        shouldShow: g,
        align: h,
        animation: A === u.RK.TITLE_BAR_LEFT ? o.Y.Animation.TRANSLATE : o.Y.Animation.FADE,
        animationPosition: A === u.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: t,
        onRequestClose: E,
        spacing: b,
        renderPopout: () => (0, s.jsx)(a.l, { "aria-label": _.intl.string(_.t.GSmTKJ), children: (0, s.jsx)(f, {}) }),
        children: (e, t) => {
            let { isShown: s } = t;
            return n(T, s, e);
        },
    });
}
function f() {
    return (0, s.jsxs)("div", {
        className: m.kL,
        children: [
            (0, s.jsx)("div", { className: m._Q, children: (0, s.jsx)("span", { className: m.Tp }) }),
            (0, s.jsx)(h.default, {}),
        ],
    });
}
