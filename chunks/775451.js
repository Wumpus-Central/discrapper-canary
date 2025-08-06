(n.d(t, {
    V9: () => x,
    ek: () => b
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(351773),
    o = n(507808),
    c = n(23547),
    d = n(790542),
    u = n(317257),
    m = n(120786),
    p = n(82856),
    g = n(981631),
    h = n(388032),
    f = n(313008);
let b = {
        START: f.alignLeft,
        END: f.alignRight
    },
    x = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, anchorPillType: x, analyticsPage: _, isCoachmarkEnabled: j = !0, linkText: E = h.intl.string(h.t.XRdyj4), cardAlignment: C = b.START, className: O } = e,
            { balance: v } = (0, d.A)(),
            [S, T] = r.useState(u.b.DEFAULT),
            [I, N] = r.useState(!1),
            [y, A] = r.useState(!1),
            P = r.useRef(null),
            { shouldOpen: R } = (0, c.Mm)({
                backgroundElementRef: P,
                isCoachmarkEnabled: j,
                onCloseCallback: g.dG4,
                onClickPill: g.dG4
            });
        r.useEffect(() => {
            j && ((0, c.wH)() || R ? (A(!0), N(!1)) : A(!1));
        }, [j, R]);
        let D = r.useCallback(() => {
                let e = !I;
                (e &&
                    null != _ &&
                    (0, o.Y)({
                        pageType: _,
                        sectionType: g.jXE.ORBS_BALANCE_MENU,
                        ctaObject: g.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
                    }),
                    T(e ? u.b.SELECTED : u.b.DEFAULT),
                    N(e));
            }, [I, _]),
            Z = r.useCallback(() => {
                I && D();
            }, [I, D]),
            w = (0, l.Z)(null, Z),
            k = r.useMemo(
                () =>
                    (0, i.jsx)(m.L, {
                        analyticsPage: _,
                        ctaText: n,
                        ctaOnClick: () => {
                            (D(), s());
                        },
                        linkText: E
                    }),
                [_, n, E, D, s]
            );
        return (0, i.jsxs)('div', {
            className: a()(f.container, O, {
                [f.hidden]: y,
                [f.visible]: !y
            }),
            children: [
                (0, i.jsx)(p.y, {
                    pillRef: P,
                    anchorPillType: x,
                    balance: v,
                    balanceWidgetMode: R ? u.b.DEFAULT : S,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: D,
                    showNotificationBadge: t
                }),
                I &&
                    (0, i.jsx)('div', {
                        className: a()(f.cardContainer, C, {
                            [f.hidden]: y,
                            [f.visible]: !y
                        }),
                        ref: w,
                        children: k
                    })
            ]
        });
    };
x.CardAlignment = b;
