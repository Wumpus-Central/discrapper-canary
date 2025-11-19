n.d(t, {
    V9: () => g,
    ek: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(351773),
    l = n(507808),
    c = n(790542),
    u = n(317257),
    d = n(120786),
    f = n(82856),
    _ = n(981631),
    p = n(388032),
    h = n(522323);
let m = {
        START: h.alignLeft,
        END: h.alignRight,
    },
    g = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: g,
                linkText: E = p.intl.string(p.t.XRdyjz),
                cardAlignment: b = m.START,
                className: y,
            } = e,
            { balance: O } = (0, c.A)(),
            [v, I] = i.useState(u.b.DEFAULT),
            [T, S] = i.useState(!1),
            [A, C] = i.useState(!1),
            N = i.useRef(null),
            R = i.useCallback(() => {
                let e = !T;
                e &&
                    null != g &&
                    (0, l.Y)({
                        pageType: g,
                        sectionType: _.jXE.ORBS_BALANCE_MENU,
                        ctaObject: _.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    I(e ? u.b.SELECTED : u.b.DEFAULT),
                    S(e);
            }, [T, g]),
            P = i.useCallback(() => {
                T && R();
            }, [T, R]),
            D = (0, s.Z)(null, P),
            w = i.useMemo(
                () =>
                    (0, r.jsx)(d.L, {
                        analyticsPage: g,
                        ctaText: n,
                        ctaOnClick: () => {
                            R(), a();
                        },
                        linkText: E,
                    }),
                [g, n, E, R, a],
            );
        return (0, r.jsxs)("div", {
            className: o()(h.container, y, {
                [h.hidden]: A,
                [h.visible]: !A,
            }),
            children: [
                (0, r.jsx)(f.y, {
                    pillRef: N,
                    balance: O,
                    balanceWidgetMode: v,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: R,
                    showNotificationBadge: t,
                }),
                T &&
                    (0, r.jsx)("div", {
                        className: o()(h.cardContainer, b, {
                            [h.hidden]: A,
                            [h.visible]: !A,
                        }),
                        ref: D,
                        children: w,
                    }),
            ],
        });
    };
g.CardAlignment = m;
