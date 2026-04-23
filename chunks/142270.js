n.d(t, { SS: () => g, cP: () => b });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(82495),
    u = n(482589),
    c = n(938396),
    o = n(649032),
    d = n(26508),
    m = n(318346),
    f = n(309954),
    x = n(305003),
    h = n(162097),
    A = n(219980),
    j = n(652215),
    v = n(985018),
    N = n(253167);
let b = { START: N.Vl, END: N.Wk },
    g = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: r,
                analyticsPage: g,
                linkText: C = v.intl.string(v.t.XRdyjz),
                cardAlignment: R = b.START,
                className: E,
            } = e,
            { balance: k } = (0, f.W)(),
            p = (0, d.DK)(o.W.NITRO, "BalanceWidgetMenu"),
            [S, O] = a.useState(x.k.DEFAULT),
            [y, _] = a.useState(!1),
            [D, T] = a.useState(!1),
            M = a.useRef(null);
        (0, u.j)(!y);
        let L = a.useCallback(() => {
                let e = !y;
                e &&
                    null != g &&
                    (0, m.Y)({
                        pageType: g,
                        sectionType: j.JJy.ORBS_BALANCE_MENU,
                        ctaObject: j.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    O(e ? x.k.SELECTED : x.k.DEFAULT),
                    _(e);
            }, [y, g]),
            w = a.useCallback(() => {
                y && L();
            }, [y, L]),
            B = (0, i.A)(null, w),
            F = a.useMemo(
                () =>
                    (0, l.jsx)(h.b, {
                        analyticsPage: g,
                        ctaText: n,
                        ctaOnClick: () => {
                            L(), r();
                        },
                        linkText: C,
                    }),
                [g, n, C, L, r],
            ),
            P = a.useMemo(
                () =>
                    (0, l.jsx)(c.A, {
                        targetElementRef: M,
                        shouldShow: y,
                        onRequestClose: L,
                        ctaText: n,
                        ctaOnClick: () => {
                            L(), r();
                        },
                    }),
                [y, L, n, r],
            );
        return (0, l.jsxs)("div", {
            className: s()(N.kL, E, { [N.R]: D, [N.RK]: !D }),
            children: [
                (0, l.jsx)(A.J, {
                    pillRef: M,
                    balance: k,
                    balanceWidgetMode: S,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: L,
                    showNotificationBadge: t,
                }),
                p
                    ? P
                    : y &&
                      (0, l.jsx)("div", { className: s()(N.Ui, R, { [N.R]: D, [N.RK]: !D }), ref: B, children: F }),
            ],
        });
    };
g.CardAlignment = b;
