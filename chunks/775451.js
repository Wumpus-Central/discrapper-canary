n.d(t, {
    V9: () => E,
    ek: () => g,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(351773),
    l = n(507808),
    c = n(23547),
    u = n(790542),
    d = n(317257),
    f = n(120786),
    _ = n(82856),
    p = n(981631),
    h = n(388032),
    m = n(152935);
let g = {
        START: m.alignLeft,
        END: m.alignRight,
    },
    E = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: a,
                anchorPillType: E,
                analyticsPage: b,
                isCoachmarkEnabled: y = !0,
                linkText: O = h.intl.string(h.t.XRdyj4),
                cardAlignment: v = g.START,
                className: I,
            } = e,
            { balance: T } = (0, u.A)(),
            [S, A] = i.useState(d.b.DEFAULT),
            [C, N] = i.useState(!1),
            [R, P] = i.useState(!1),
            w = i.useRef(null),
            { shouldOpen: D } = (0, c.Mm)({
                backgroundElementRef: w,
                isCoachmarkEnabled: y,
                onCloseCallback: p.dG4,
                onClickPill: p.dG4,
            });
        i.useEffect(() => {
            y && ((0, c.wH)() || D ? (P(!0), N(!1)) : P(!1));
        }, [y, D]);
        let x = i.useCallback(() => {
                let e = !C;
                e &&
                    null != b &&
                    (0, l.Y)({
                        pageType: b,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    A(e ? d.b.SELECTED : d.b.DEFAULT),
                    N(e);
            }, [C, b]),
            L = i.useCallback(() => {
                C && x();
            }, [C, x]),
            j = (0, s.Z)(null, L),
            M = i.useMemo(
                () =>
                    (0, r.jsx)(f.L, {
                        analyticsPage: b,
                        ctaText: n,
                        ctaOnClick: () => {
                            x(), a();
                        },
                        linkText: O,
                    }),
                [b, n, O, x, a],
            );
        return (0, r.jsxs)("div", {
            className: o()(m.container, I, {
                [m.hidden]: R,
                [m.visible]: !R,
            }),
            children: [
                (0, r.jsx)(_.y, {
                    pillRef: w,
                    anchorPillType: E,
                    balance: T,
                    balanceWidgetMode: D ? d.b.DEFAULT : S,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: x,
                    showNotificationBadge: t,
                }),
                C &&
                    (0, r.jsx)("div", {
                        className: o()(m.cardContainer, v, {
                            [m.hidden]: R,
                            [m.visible]: !R,
                        }),
                        ref: j,
                        children: M,
                    }),
            ],
        });
    };
E.CardAlignment = g;
