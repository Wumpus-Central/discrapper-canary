n.d(t, { A: () => m });
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
    g = n(782462);
function m(e) {
    let { children: t, popoutPosition: n, popoutAlign: u, targetElementRef: g, spacing: m = 0 } = e,
        { isOpen: _, setIsOpen: x } = (0, c.A)(),
        f = l.useCallback(() => {
            x(!1);
        }, [x]),
        E = l.useCallback(() => {
            x(!_);
        }, [_, x]);
    (0, r.Ay)(() => {
        let e = () => {
            x(!1);
        };
        return a.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (o._.subscribe(h.jej.TOGGLE_INBOX, E), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, E)),
            [E],
        );
    let { entrypoint: C } = (0, d.X8)({ location: "NotificationsInboxPopout" });
    return (0, i.jsx)(s.YNO, {
        targetElementRef: g,
        shouldShow: _,
        align: u,
        animation: C === d.RK.TITLE_BAR_LEFT ? s.YNO.Animation.TRANSLATE : s.YNO.Animation.FADE,
        animationPosition: C === d.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: f,
        spacing: m,
        renderPopout: () => (0, i.jsx)(s.lGe, { "aria-label": A.intl.string(A.t.GSmTKJ), children: (0, i.jsx)(p, {}) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return t(E, i, e);
        },
    });
}
function p() {
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", { className: g._Q, children: (0, i.jsx)("span", { className: g.Tp }) }),
            (0, i.jsx)(u.A, {}),
        ],
    });
}
