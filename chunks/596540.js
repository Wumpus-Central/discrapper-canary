n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(73153),
    r = n(964486),
    o = n(203982),
    c = n(851109),
    d = n(355741),
    u = n(480680),
    h = n(652215),
    A = n(985018),
    _ = n(310855);
function m(e) {
    let { children: t, popoutPosition: n, popoutAlign: u, targetElementRef: _, spacing: m = 0 } = e,
        { isOpen: p, setIsOpen: f } = (0, d.A)(),
        x = l.useCallback(() => {
            f(!1);
        }, [f]),
        E = l.useCallback(() => {
            f(!p);
        }, [p, f]);
    (0, r.Ay)(() => {
        let e = () => {
            f(!1);
        };
        return a.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (o._.subscribe(h.jej.TOGGLE_INBOX, E), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, E)),
            [E],
        );
    let { entrypoint: I } = (0, c.X8)({ location: "NotificationsInboxPopout" });
    return (0, i.jsx)(s.YNO, {
        targetElementRef: _,
        shouldShow: p,
        align: u,
        animation: I === c.RK.TITLE_BAR_LEFT ? s.YNO.Animation.TRANSLATE : s.YNO.Animation.FADE,
        animationPosition: I === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: x,
        spacing: m,
        renderPopout: () => (0, i.jsx)(s.lGe, { "aria-label": A.intl.string(A.t.GSmTKJ), children: (0, i.jsx)(g, {}) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return t(E, i, e);
        },
    });
}
function g() {
    return (0, i.jsxs)("div", {
        className: _.kL,
        children: [
            (0, i.jsx)("div", { className: _._Q, children: (0, i.jsx)("span", { className: _.Tp }) }),
            (0, i.jsx)(u.A, {}),
        ],
    });
}
