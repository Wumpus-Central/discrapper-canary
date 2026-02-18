l.d(t, { SS: () => v, cP: () => f });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(82495),
    o = l(482589),
    u = l(938396),
    c = l(649032),
    d = l(26508),
    p = l(318346),
    m = l(309954),
    h = l(305003),
    x = l(162097),
    b = l(219980),
    g = l(652215),
    y = l(985018),
    E = l(847688);
let f = { START: E.Vl, END: E.Wk },
    v = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: l,
                ctaOnClick: r,
                analyticsPage: v,
                linkText: S = y.intl.string(y.t.XRdyjz),
                cardAlignment: j = f.START,
                className: T,
            } = e,
            { balance: C } = (0, m.W)(),
            P = (0, d.DK)(c.W.NITRO, "BalanceWidgetMenu"),
            [R, A] = n.useState(h.k.DEFAULT),
            [_, N] = n.useState(!1),
            [I, k] = n.useState(!1),
            D = n.useRef(null);
        (0, o.j)(!_);
        let M = n.useCallback(() => {
                let e = !_;
                e &&
                    null != v &&
                    (0, p.Y)({
                        pageType: v,
                        sectionType: g.JJy.ORBS_BALANCE_MENU,
                        ctaObject: g.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    A(e ? h.k.SELECTED : h.k.DEFAULT),
                    N(e);
            }, [_, v]),
            O = n.useCallback(() => {
                _ && M();
            }, [_, M]),
            B = (0, s.A)(null, O),
            V = n.useMemo(
                () =>
                    (0, a.jsx)(x.b, {
                        analyticsPage: v,
                        ctaText: l,
                        ctaOnClick: () => {
                            M(), r();
                        },
                        linkText: S,
                    }),
                [v, l, S, M, r],
            ),
            w = n.useMemo(
                () =>
                    (0, a.jsx)(u.A, {
                        targetElementRef: D,
                        shouldShow: _,
                        onRequestClose: M,
                        ctaText: l,
                        ctaOnClick: () => {
                            M(), r();
                        },
                    }),
                [_, M, l, r],
            );
        return (0, a.jsxs)("div", {
            className: i()(E.kL, T, { [E.R]: I, [E.RK]: !I }),
            children: [
                (0, a.jsx)(b.J, {
                    pillRef: D,
                    balance: C,
                    balanceWidgetMode: R,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: M,
                    showNotificationBadge: t,
                }),
                P
                    ? w
                    : _ &&
                      (0, a.jsx)("div", { className: i()(E.Ui, j, { [E.R]: I, [E.RK]: !I }), ref: B, children: V }),
            ],
        });
    };
v.CardAlignment = f;
