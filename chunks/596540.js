n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(73153),
    r = n(964486),
    o = n(203982),
    d = n(851109),
    c = n(355741),
    u = n(480680),
    h = n(652215),
    A = n(985018),
    m = n(39368);
function p(e) {
    let { children: t, popoutPosition: n, popoutAlign: u, targetElementRef: m, spacing: p = 0 } = e,
        { isOpen: _, setIsOpen: f } = (0, c.A)(),
        x = l.useCallback(() => {
            f(!1);
        }, [f]),
        C = l.useCallback(() => {
            f(!_);
        }, [_, f]);
    (0, r.Ay)(() => {
        let e = () => {
            f(!1);
        };
        return a.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (o._.subscribe(h.jej.TOGGLE_INBOX, C), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, C)),
            [C],
        );
    let { entrypoint: E } = (0, d.X8)({ location: "NotificationsInboxPopout" });
    return (0, i.jsx)(s.YNO, {
        targetElementRef: m,
        shouldShow: _,
        align: u,
        animation: E === d.RK.TITLE_BAR_LEFT ? s.YNO.Animation.TRANSLATE : s.YNO.Animation.FADE,
        animationPosition: E === d.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: x,
        spacing: p,
        renderPopout: () => (0, i.jsx)(s.lGe, { "aria-label": A.intl.string(A.t.GSmTKJ), children: (0, i.jsx)(g, {}) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return t(C, i, e);
        },
    });
}
function g() {
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)("div", { className: m._Q, children: (0, i.jsx)("span", { className: m.Tp }) }),
            (0, i.jsx)(u.A, {}),
        ],
    });
}
