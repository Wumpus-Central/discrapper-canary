n.d(t, {
    V9: () => b,
    ek: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(351773),
    l = n(375527),
    c = n(627725),
    u = n(507808),
    d = n(790542),
    f = n(317257),
    p = n(120786),
    _ = n(82856),
    h = n(981631),
    m = n(388032),
    g = n(461207);
let E = {
        START: g.alignLeft,
        END: g.alignRight,
    },
    b = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: b,
                linkText: y = m.intl.string(m.t.XRdyjz),
                cardAlignment: O = E.START,
                className: v,
            } = e,
            { balance: S } = (0, d.A)(),
            { isInTreatment: I } = (0, l.er)("BalanceWidgetMenu"),
            [T, C] = i.useState(f.b.DEFAULT),
            [A, N] = i.useState(!1),
            [P, w] = i.useState(!1),
            R = i.useRef(null),
            D = i.useCallback(() => {
                let e = !A;
                e &&
                    null != b &&
                    (0, u.Y)({
                        pageType: b,
                        sectionType: h.jXE.ORBS_BALANCE_MENU,
                        ctaObject: h.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    C(e ? f.b.SELECTED : f.b.DEFAULT),
                    N(e);
            }, [A, b]),
            x = i.useCallback(() => {
                A && D();
            }, [A, D]),
            L = (0, s.Z)(null, x),
            j = i.useMemo(
                () =>
                    (0, r.jsx)(p.L, {
                        analyticsPage: b,
                        ctaText: n,
                        ctaOnClick: () => {
                            D(), a();
                        },
                        linkText: y,
                    }),
                [b, n, y, D, a],
            ),
            M = i.useMemo(
                () =>
                    (0, r.jsx)(c.Z, {
                        targetElementRef: R,
                        shouldShow: A,
                        onRequestClose: D,
                        ctaText: n,
                        ctaOnClick: () => {
                            D(), a();
                        },
                    }),
                [A, D, n, a],
            );
        return (0, r.jsxs)("div", {
            className: o()(g.container, v, {
                [g.hidden]: P,
                [g.visible]: !P,
            }),
            children: [
                (0, r.jsx)(_.y, {
                    pillRef: R,
                    balance: S,
                    balanceWidgetMode: T,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: D,
                    showNotificationBadge: t,
                }),
                I
                    ? M
                    : A &&
                      (0, r.jsx)("div", {
                          className: o()(g.cardContainer, O, {
                              [g.hidden]: P,
                              [g.visible]: !P,
                          }),
                          ref: L,
                          children: j,
                      }),
            ],
        });
    };
b.CardAlignment = E;
