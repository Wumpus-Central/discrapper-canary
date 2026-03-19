"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(73153),
    r = n(964486),
    o = n(203982),
    c = n(851109),
    d = n(355741),
    u = n(480680),
    h = n(652215),
    A = n(985018),
    m = n(39368);
function g(e) {
    let { children: t, popoutPosition: n, popoutAlign: u, targetElementRef: m, spacing: g = 0 } = e,
        { isOpen: _, setIsOpen: f } = (0, d.A)(),
        x = s.useCallback(() => {
            f(!1);
        }, [f]),
        C = s.useCallback(() => {
            f(!_);
        }, [_, f]);
    (0, r.Ay)(() => {
        let e = () => {
            f(!1);
        };
        return a.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        s.useEffect(
            () => (o._.subscribe(h.jej.TOGGLE_INBOX, C), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, C)),
            [C],
        );
    let { entrypoint: E } = (0, c.X8)({ location: "NotificationsInboxPopout" });
    return (0, i.jsx)(l.YNO, {
        targetElementRef: m,
        shouldShow: _,
        align: u,
        animation: E === c.RK.TITLE_BAR_LEFT ? l.YNO.Animation.TRANSLATE : l.YNO.Animation.FADE,
        animationPosition: E === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: x,
        spacing: g,
        renderPopout: () => (0, i.jsx)(l.lGe, { "aria-label": A.intl.string(A.t.GSmTKJ), children: (0, i.jsx)(p, {}) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return t(C, i, e);
        },
    });
}
function p() {
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)("div", { className: m._Q, children: (0, i.jsx)("span", { className: m.Tp }) }),
            (0, i.jsx)(u.A, {}),
        ],
    });
}
