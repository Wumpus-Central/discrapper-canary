"use strict";
n.d(t, { SS: () => A, cP: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(82495),
    l = n(84483),
    u = n(938396),
    c = n(318346),
    d = n(309954),
    _ = n(305003),
    f = n(162097),
    p = n(219980),
    h = n(652215),
    m = n(985018),
    g = n(847688);
let E = { START: g.Vl, END: g.Wk },
    A = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: A,
                linkText: I = m.intl.string(m.t.XRdyjz),
                cardAlignment: T = E.START,
                className: y,
            } = e,
            { balance: S } = (0, d.W)(),
            { isInTreatment: v } = (0, l.uX)("BalanceWidgetMenu"),
            [C, b] = i.useState(_.k.DEFAULT),
            [N, R] = i.useState(!1),
            [O, D] = i.useState(!1),
            L = i.useRef(null),
            w = i.useCallback(() => {
                let e = !N;
                e &&
                    null != A &&
                    (0, c.Y)({
                        pageType: A,
                        sectionType: h.JJy.ORBS_BALANCE_MENU,
                        ctaObject: h.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    b(e ? _.k.SELECTED : _.k.DEFAULT),
                    R(e);
            }, [N, A]),
            x = i.useCallback(() => {
                N && w();
            }, [N, w]),
            P = (0, o.A)(null, x),
            M = i.useMemo(
                () =>
                    (0, r.jsx)(f.b, {
                        analyticsPage: A,
                        ctaText: n,
                        ctaOnClick: () => {
                            w(), a();
                        },
                        linkText: I,
                    }),
                [A, n, I, w, a],
            ),
            k = i.useMemo(
                () =>
                    (0, r.jsx)(u.A, {
                        targetElementRef: L,
                        shouldShow: N,
                        onRequestClose: w,
                        ctaText: n,
                        ctaOnClick: () => {
                            w(), a();
                        },
                    }),
                [N, w, n, a],
            );
        return (0, r.jsxs)("div", {
            className: s()(g.kL, y, { [g.R]: O, [g.RK]: !O }),
            children: [
                (0, r.jsx)(p.J, {
                    pillRef: L,
                    balance: S,
                    balanceWidgetMode: C,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: w,
                    showNotificationBadge: t,
                }),
                v
                    ? k
                    : N &&
                      (0, r.jsx)("div", { className: s()(g.Ui, T, { [g.R]: O, [g.RK]: !O }), ref: P, children: M }),
            ],
        });
    };
A.CardAlignment = E;
