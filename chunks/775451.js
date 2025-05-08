n.d(t, {
    V9: () => x,
    ek: () => b
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(351773),
    o = n(507808),
    c = n(23547),
    d = n(790542),
    u = n(317257),
    m = n(120786),
    g = n(970815),
    p = n(981631),
    h = n(388032),
    f = n(313008);
let b = {
        START: f.alignLeft,
        END: f.alignRight
    },
    _ = (e) => {
        if (null != e) return g.th[e];
    },
    x = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, anchorPillType: x, analyticsPage: E, isCoachmarkEnabled: C = !0, linkText: j = h.intl.string(h.t.XRdyj4), cardAlignment: O = b.START, className: S } = e,
            { balance: v } = (0, d.A)(),
            [T, I] = r.useState(u.b.DEFAULT),
            [N, y] = r.useState(!1),
            [A, P] = r.useState(!1),
            R = r.useRef(null),
            { shouldOpen: D } = (0, c.Mm)({
                backgroundElementRef: R,
                isCoachmarkEnabled: C,
                onCloseCallback: p.dG4,
                onClickPill: p.dG4
            });
        r.useEffect(() => {
            C && ((0, c.wH)() || D ? (P(!0), y(!1)) : P(!1));
        }, [C, D]);
        let Z = r.useCallback(() => {
                let e = !N;
                e &&
                    null != E &&
                    (0, o.Y)({
                        pageType: E,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
                    }),
                    I(e ? u.b.SELECTED : u.b.DEFAULT),
                    y(e);
            }, [N, E]),
            w = r.useCallback(() => {
                N && Z();
            }, [N, Z]),
            k = (0, a.Z)(null, w);
        return (0, i.jsxs)('div', {
            id: _(x),
            className: l()(f.container, S, {
                [f.hidden]: A,
                [f.visible]: !A
            }),
            children: [
                (0, i.jsx)(g.A4, {
                    ref: R,
                    balance: v,
                    balanceWidgetMode: D ? u.b.DEFAULT : T,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: Z,
                    showNotificationBadge: t
                }),
                N &&
                    (0, i.jsx)('div', {
                        className: l()(f.cardContainer, O, {
                            [f.hidden]: A,
                            [f.visible]: !A
                        }),
                        ref: k,
                        children: (0, i.jsx)(m.L, {
                            analyticsPage: E,
                            ctaText: n,
                            ctaOnClick: () => {
                                Z(), s();
                            },
                            linkText: j
                        })
                    })
            ]
        });
    };
x.CardAlignment = b;
