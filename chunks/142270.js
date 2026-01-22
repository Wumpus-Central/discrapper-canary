n.d(t, {
    SS: () => b,
    cP: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(82495),
    l = n(84483),
    c = n(938396),
    u = n(318346),
    d = n(309954),
    f = n(305003),
    p = n(162097),
    _ = n(219980),
    h = n(652215),
    m = n(985018),
    g = n(847688);
let E = {
        START: g.Vl,
        END: g.Wk,
    },
    b = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: b,
                linkText: y = m.intl.string(m.t.XRdyjz),
                cardAlignment: O = E.START,
                className: A,
            } = e,
            { balance: v } = (0, d.W)(),
            { isInTreatment: S } = (0, l.uX)("BalanceWidgetMenu"),
            [I, T] = i.useState(f.k.DEFAULT),
            [C, N] = i.useState(!1),
            [R, w] = i.useState(!1),
            P = i.useRef(null),
            D = i.useCallback(() => {
                let e = !C;
                e &&
                    null != b &&
                    (0, u.Y)({
                        pageType: b,
                        sectionType: h.JJy.ORBS_BALANCE_MENU,
                        ctaObject: h.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    T(e ? f.k.SELECTED : f.k.DEFAULT),
                    N(e);
            }, [C, b]),
            x = i.useCallback(() => {
                C && D();
            }, [C, D]),
            L = (0, o.A)(null, x),
            j = i.useMemo(
                () =>
                    (0, r.jsx)(p.b, {
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
                    (0, r.jsx)(c.A, {
                        targetElementRef: P,
                        shouldShow: C,
                        onRequestClose: D,
                        ctaText: n,
                        ctaOnClick: () => {
                            D(), a();
                        },
                    }),
                [C, D, n, a],
            );
        return (0, r.jsxs)("div", {
            className: s()(g.kL, A, {
                [g.R]: R,
                [g.RK]: !R,
            }),
            children: [
                (0, r.jsx)(_.J, {
                    pillRef: P,
                    balance: v,
                    balanceWidgetMode: I,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: D,
                    showNotificationBadge: t,
                }),
                S
                    ? M
                    : C &&
                      (0, r.jsx)("div", {
                          className: s()(g.Ui, O, {
                              [g.R]: R,
                              [g.RK]: !R,
                          }),
                          ref: L,
                          children: j,
                      }),
            ],
        });
    };
b.CardAlignment = E;
