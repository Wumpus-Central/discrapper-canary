n.d(t, {
    V9: () => _,
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
    g = n(82856),
    p = n(981631),
    h = n(388032),
    f = n(313008);
let b = {
        START: f.alignLeft,
        END: f.alignRight
    },
    _ = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, anchorPillType: _, analyticsPage: x, isCoachmarkEnabled: E = !0, linkText: j = h.intl.string(h.t.XRdyj4), cardAlignment: C = b.START, className: O } = e,
            { balance: S } = (0, d.A)(),
            [v, T] = r.useState(u.b.DEFAULT),
            [N, I] = r.useState(!1),
            [y, A] = r.useState(!1),
            P = r.useRef(null),
            { shouldOpen: R } = (0, c.Mm)({
                backgroundElementRef: P,
                isCoachmarkEnabled: E,
                onCloseCallback: p.dG4,
                onClickPill: p.dG4
            });
        r.useEffect(() => {
            E && ((0, c.wH)() || R ? (A(!0), I(!1)) : A(!1));
        }, [E, R]);
        let D = r.useCallback(() => {
                let e = !N;
                e &&
                    null != x &&
                    (0, o.Y)({
                        pageType: x,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
                    }),
                    T(e ? u.b.SELECTED : u.b.DEFAULT),
                    I(e);
            }, [N, x]),
            Z = r.useCallback(() => {
                N && D();
            }, [N, D]),
            w = (0, a.Z)(null, Z);
        return (0, i.jsxs)('div', {
            className: l()(f.container, O, {
                [f.hidden]: y,
                [f.visible]: !y
            }),
            children: [
                (0, i.jsx)(g.y, {
                    pillRef: P,
                    anchorPillType: _,
                    balance: S,
                    balanceWidgetMode: R ? u.b.DEFAULT : v,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: D,
                    showNotificationBadge: t
                }),
                N &&
                    (0, i.jsx)('div', {
                        className: l()(f.cardContainer, C, {
                            [f.hidden]: y,
                            [f.visible]: !y
                        }),
                        ref: w,
                        children: (0, i.jsx)(m.L, {
                            analyticsPage: x,
                            ctaText: n,
                            ctaOnClick: () => {
                                D(), s();
                            },
                            linkText: j
                        })
                    })
            ]
        });
    };
_.CardAlignment = b;
