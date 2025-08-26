n.d(t, {
    V9: () => g,
    ek: () => m,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(351773),
    l = n(507808),
    c = n(790542),
    u = n(317257),
    d = n(120786),
    f = n(82856),
    _ = n(981631),
    p = n(388032),
    h = n(152935);
let m = {
        START: h.alignLeft,
        END: h.alignRight,
    },
    g = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: o,
                anchorPillType: g,
                analyticsPage: E,
                linkText: b = p.intl.string(p.t.XRdyj4),
                cardAlignment: y = m.START,
                className: O,
            } = e,
            { balance: v } = (0, c.A)(),
            [I, T] = i.useState(u.b.DEFAULT),
            [S, A] = i.useState(!1),
            [C, N] = i.useState(!1),
            R = i.useRef(null),
            P = i.useCallback(() => {
                let e = !S;
                e &&
                    null != E &&
                    (0, l.Y)({
                        pageType: E,
                        sectionType: _.jXE.ORBS_BALANCE_MENU,
                        ctaObject: _.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    T(e ? u.b.SELECTED : u.b.DEFAULT),
                    A(e);
            }, [S, E]),
            w = i.useCallback(() => {
                S && P();
            }, [S, P]),
            D = (0, s.Z)(null, w),
            x = i.useMemo(
                () =>
                    (0, r.jsx)(d.L, {
                        analyticsPage: E,
                        ctaText: n,
                        ctaOnClick: () => {
                            P(), o();
                        },
                        linkText: b,
                    }),
                [E, n, b, P, o],
            );
        return (0, r.jsxs)("div", {
            className: a()(h.container, O, {
                [h.hidden]: C,
                [h.visible]: !C,
            }),
            children: [
                (0, r.jsx)(f.y, {
                    pillRef: R,
                    anchorPillType: g,
                    balance: v,
                    balanceWidgetMode: I,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: P,
                    showNotificationBadge: t,
                }),
                S &&
                    (0, r.jsx)("div", {
                        className: a()(h.cardContainer, y, {
                            [h.hidden]: C,
                            [h.visible]: !C,
                        }),
                        ref: D,
                        children: x,
                    }),
            ],
        });
    };
g.CardAlignment = m;
