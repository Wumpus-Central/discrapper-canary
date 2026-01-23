n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(73153),
    a = n(964486),
    o = n(203982),
    c = n(851109),
    u = n(355741),
    d = n(480680),
    p = n(652215),
    h = n(985018),
    f = n(782462);

function g(e) {
    let { children: t, popoutPosition: n, popoutAlign: d, targetElementRef: f, spacing: g = 0 } = e,
        { isOpen: b, setIsOpen: A } = (0, u.A)(),
        y = l.useCallback(() => {
            A(!1);
        }, [A]),
        _ = l.useCallback(() => {
            A(!b);
        }, [b, A]);
    (0, a.Ay)(() => {
        let e = () => {
            A(!1);
        };
        return s.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        l.useEffect(
            () => (o._.subscribe(p.jej.TOGGLE_INBOX, _), () => void o._.unsubscribe(p.jej.TOGGLE_INBOX, _)),
            [_],
        );
    let { entrypoint: O } = (0, c.X8)({
        location: "NotificationsInboxPopout",
    });
    return (0, r.jsx)(i.YNO, {
        targetElementRef: f,
        shouldShow: b,
        align: d,
        animation: O === c.RK.TITLE_BAR_LEFT ? i.YNO.Animation.TRANSLATE : i.YNO.Animation.FADE,
        animationPosition: O === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: y,
        spacing: g,
        renderPopout: () =>
            (0, r.jsx)(i.lGe, {
                "aria-label": h.intl.string(h.t.GSmTKJ),
                children: (0, r.jsx)(m, {}),
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(_, r, e);
        },
    });
}

function m() {
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsx)("div", {
                className: f._Q,
                children: (0, r.jsx)("span", {
                    className: f.Tp,
                }),
            }),
            (0, r.jsx)(d.A, {}),
        ],
    });
}
