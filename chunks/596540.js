n.d(t, {
    A: () => m,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(73153),
    c = n(964486),
    u = n(203982),
    d = n(851109),
    f = n(355741),
    p = n(480680),
    h = n(652215),
    b = n(985018),
    g = n(782462);

function m(e) {
    let { children: t, popoutPosition: n, popoutAlign: i, targetElementRef: p, spacing: m = 0 } = e,
        { isOpen: y, setIsOpen: O } = (0, f.A)(),
        j = l.useCallback(() => {
            O(!1);
        }, [O]),
        v = l.useCallback(() => {
            O(!y);
        }, [y, O]);
    (0, c.Ay)(() => {
        let e = () => {
            O(!1);
        };
        return o.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => o.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (u._.subscribe(h.jej.TOGGLE_INBOX, v), () => void u._.unsubscribe(h.jej.TOGGLE_INBOX, v)),
            [v],
        );
    let { entrypoint: x } = (0, d.X8)({
        location: "NotificationsInboxPopout",
    });
    return (0, r.jsx)(s.YNO, {
        targetElementRef: p,
        shouldShow: y,
        align: i,
        animation: x === d.RK.TITLE_BAR_LEFT ? s.YNO.Animation.TRANSLATE : s.YNO.Animation.FADE,
        animationPosition: x === d.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: j,
        spacing: m,
        renderPopout: () =>
            (0, r.jsx)(s.lGe, {
                "aria-label": b.intl.string(b.t.GSmTKJ),
                className: a()({
                    [g.Um]: x === d.RK.TITLE_BAR_LEFT,
                    [g.vf]: x === d.RK.SERVER_RAIL_TOP,
                }),
                children: (0, r.jsx)(A, {}),
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(v, r, e);
        },
    });
}

function A() {
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsx)("div", {
                className: g._Q,
                children: (0, r.jsx)("span", {
                    className: g.Tp,
                }),
            }),
            (0, r.jsx)(p.A, {}),
        ],
    });
}
