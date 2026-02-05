"use strict";
n.d(t, { SS: () => I, cP: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(82495),
    l = n(84483),
    u = n(482589),
    c = n(938396),
    d = n(318346),
    _ = n(309954),
    f = n(305003),
    p = n(162097),
    h = n(219980),
    m = n(652215),
    g = n(985018),
    E = n(847688);
let A = { START: E.Vl, END: E.Wk },
    I = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: I,
                linkText: T = g.intl.string(g.t.XRdyjz),
                cardAlignment: y = A.START,
                className: S,
            } = e,
            { balance: v } = (0, _.W)(),
            { isInTreatment: C } = (0, l.uX)("BalanceWidgetMenu"),
            [b, N] = i.useState(f.k.DEFAULT),
            [R, O] = i.useState(!1),
            [D, L] = i.useState(!1),
            w = i.useRef(null);
        (0, u.j)(!R);
        let x = i.useCallback(() => {
                let e = !R;
                e &&
                    null != I &&
                    (0, d.Y)({
                        pageType: I,
                        sectionType: m.JJy.ORBS_BALANCE_MENU,
                        ctaObject: m.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    N(e ? f.k.SELECTED : f.k.DEFAULT),
                    O(e);
            }, [R, I]),
            P = i.useCallback(() => {
                R && x();
            }, [R, x]),
            M = (0, o.A)(null, P),
            k = i.useMemo(
                () =>
                    (0, r.jsx)(p.b, {
                        analyticsPage: I,
                        ctaText: n,
                        ctaOnClick: () => {
                            x(), a();
                        },
                        linkText: T,
                    }),
                [I, n, T, x, a],
            ),
            U = i.useMemo(
                () =>
                    (0, r.jsx)(c.A, {
                        targetElementRef: w,
                        shouldShow: R,
                        onRequestClose: x,
                        ctaText: n,
                        ctaOnClick: () => {
                            x(), a();
                        },
                    }),
                [R, x, n, a],
            );
        return (0, r.jsxs)("div", {
            className: s()(E.kL, S, { [E.R]: D, [E.RK]: !D }),
            children: [
                (0, r.jsx)(h.J, {
                    pillRef: w,
                    balance: v,
                    balanceWidgetMode: b,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: x,
                    showNotificationBadge: t,
                }),
                C
                    ? U
                    : R &&
                      (0, r.jsx)("div", { className: s()(E.Ui, y, { [E.R]: D, [E.RK]: !D }), ref: M, children: k }),
            ],
        });
    };
I.CardAlignment = A;
