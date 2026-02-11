"use strict";
n.d(t, { SS: () => y, cP: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(82495),
    l = n(482589),
    u = n(938396),
    c = n(649032),
    d = n(26508),
    _ = n(318346),
    f = n(309954),
    h = n(305003),
    p = n(162097),
    g = n(219980),
    E = n(652215),
    A = n(985018),
    I = n(847688);
let T = { START: I.Vl, END: I.Wk },
    y = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                analyticsPage: y,
                linkText: S = A.intl.string(A.t.XRdyjz),
                cardAlignment: v = T.START,
                className: C,
            } = e,
            { balance: b } = (0, f.W)(),
            N = (0, d.DK)(c.W.NITRO, "BalanceWidgetMenu"),
            [R, O] = i.useState(h.k.DEFAULT),
            [D, L] = i.useState(!1),
            [w, x] = i.useState(!1),
            P = i.useRef(null);
        (0, l.j)(!D);
        let M = i.useCallback(() => {
                let e = !D;
                e &&
                    null != y &&
                    (0, _.Y)({
                        pageType: y,
                        sectionType: E.JJy.ORBS_BALANCE_MENU,
                        ctaObject: E.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    O(e ? h.k.SELECTED : h.k.DEFAULT),
                    L(e);
            }, [D, y]),
            k = i.useCallback(() => {
                D && M();
            }, [D, M]),
            U = (0, o.A)(null, k),
            G = i.useMemo(
                () =>
                    (0, r.jsx)(p.b, {
                        analyticsPage: y,
                        ctaText: n,
                        ctaOnClick: () => {
                            M(), a();
                        },
                        linkText: S,
                    }),
                [y, n, S, M, a],
            ),
            F = i.useMemo(
                () =>
                    (0, r.jsx)(u.A, {
                        targetElementRef: P,
                        shouldShow: D,
                        onRequestClose: M,
                        ctaText: n,
                        ctaOnClick: () => {
                            M(), a();
                        },
                    }),
                [D, M, n, a],
            );
        return (0, r.jsxs)("div", {
            className: s()(I.kL, C, { [I.R]: w, [I.RK]: !w }),
            children: [
                (0, r.jsx)(g.J, {
                    pillRef: P,
                    balance: b,
                    balanceWidgetMode: R,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: M,
                    showNotificationBadge: t,
                }),
                N
                    ? F
                    : D &&
                      (0, r.jsx)("div", { className: s()(I.Ui, v, { [I.R]: w, [I.RK]: !w }), ref: U, children: G }),
            ],
        });
    };
y.CardAlignment = T;
