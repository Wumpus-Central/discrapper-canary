n.d(t, {
    V9: () => g,
    ek: () => h,
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
    p = n(981631),
    _ = n(388032),
    m = n(152935);
let h = {
        START: m.alignLeft,
        END: m.alignRight,
    },
    g = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: g,
                linkText: E = _.intl.string(_.t.XRdyjz),
                cardAlignment: b = h.START,
                className: y,
            } = e,
            { balance: O } = (0, c.A)(),
            [v, S] = i.useState(u.b.DEFAULT),
            [I, T] = i.useState(!1),
            [A, C] = i.useState(!1),
            N = i.useRef(null),
            P = i.useCallback(() => {
                let e = !I;
                e &&
                    null != g &&
                    (0, l.Y)({
                        pageType: g,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    S(e ? u.b.SELECTED : u.b.DEFAULT),
                    T(e);
            }, [I, g]),
            R = i.useCallback(() => {
                I && P();
            }, [I, P]),
            D = (0, s.Z)(null, R),
            w = i.useMemo(
                () =>
                    (0, r.jsx)(d.L, {
                        analyticsPage: g,
                        ctaText: n,
                        ctaOnClick: () => {
                            P(), a();
                        },
                        linkText: E,
                    }),
                [g, n, E, P, a],
            );
        return (0, r.jsxs)("div", {
            className: o()(m.container, y, {
                [m.hidden]: A,
                [m.visible]: !A,
            }),
            children: [
                (0, r.jsx)(f.y, {
                    pillRef: N,
                    balance: O,
                    balanceWidgetMode: v,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: P,
                    showNotificationBadge: t,
                }),
                I &&
                    (0, r.jsx)("div", {
                        className: o()(m.cardContainer, b, {
                            [m.hidden]: A,
                            [m.visible]: !A,
                        }),
                        ref: D,
                        children: w,
                    }),
            ],
        });
    };
g.CardAlignment = h;
