n.d(t, {
    V9: () => b,
    ek: () => f,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(351773),
    o = n(507808),
    c = n(790542),
    d = n(317257),
    u = n(120786),
    m = n(82856),
    p = n(981631),
    h = n(388032),
    x = n(152935);
let f = {
        START: x.alignLeft,
        END: x.alignRight,
    },
    b = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: i,
                anchorPillType: b,
                analyticsPage: g,
                linkText: v = h.intl.string(h.t.XRdyj4),
                cardAlignment: j = f.START,
                className: _,
            } = e,
            { balance: y } = (0, c.A)(),
            [C, S] = r.useState(d.b.DEFAULT),
            [E, T] = r.useState(!1),
            [O, N] = r.useState(!1),
            P = r.useRef(null),
            I = r.useCallback(() => {
                let e = !E;
                e &&
                    null != g &&
                    (0, o.Y)({
                        pageType: g,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    S(e ? d.b.SELECTED : d.b.DEFAULT),
                    T(e);
            }, [E, g]),
            w = r.useCallback(() => {
                E && I();
            }, [E, I]),
            R = (0, s.Z)(null, w),
            k = r.useMemo(
                () =>
                    (0, a.jsx)(u.L, {
                        analyticsPage: g,
                        ctaText: n,
                        ctaOnClick: () => {
                            I(), i();
                        },
                        linkText: v,
                    }),
                [g, n, v, I, i],
            );
        return (0, a.jsxs)("div", {
            className: l()(x.container, _, {
                [x.hidden]: O,
                [x.visible]: !O,
            }),
            children: [
                (0, a.jsx)(m.y, {
                    pillRef: P,
                    anchorPillType: b,
                    balance: y,
                    balanceWidgetMode: C,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: I,
                    showNotificationBadge: t,
                }),
                E &&
                    (0, a.jsx)("div", {
                        className: l()(x.cardContainer, j, {
                            [x.hidden]: O,
                            [x.visible]: !O,
                        }),
                        ref: R,
                        children: k,
                    }),
            ],
        });
    };
b.CardAlignment = f;
