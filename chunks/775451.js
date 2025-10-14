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
                analyticsPage: b,
                linkText: g = h.intl.string(h.t.XRdyj4),
                cardAlignment: v = f.START,
                className: j,
            } = e,
            { balance: _ } = (0, c.A)(),
            [y, C] = r.useState(d.b.DEFAULT),
            [S, E] = r.useState(!1),
            [T, O] = r.useState(!1),
            N = r.useRef(null),
            P = r.useCallback(() => {
                let e = !S;
                e &&
                    null != b &&
                    (0, o.Y)({
                        pageType: b,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    C(e ? d.b.SELECTED : d.b.DEFAULT),
                    E(e);
            }, [S, b]),
            I = r.useCallback(() => {
                S && P();
            }, [S, P]),
            w = (0, s.Z)(null, I),
            R = r.useMemo(
                () =>
                    (0, a.jsx)(u.L, {
                        analyticsPage: b,
                        ctaText: n,
                        ctaOnClick: () => {
                            P(), i();
                        },
                        linkText: g,
                    }),
                [b, n, g, P, i],
            );
        return (0, a.jsxs)("div", {
            className: l()(x.container, j, {
                [x.hidden]: T,
                [x.visible]: !T,
            }),
            children: [
                (0, a.jsx)(m.y, {
                    pillRef: N,
                    balance: _,
                    balanceWidgetMode: y,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: P,
                    showNotificationBadge: t,
                }),
                S &&
                    (0, a.jsx)("div", {
                        className: l()(x.cardContainer, v, {
                            [x.hidden]: T,
                            [x.visible]: !T,
                        }),
                        ref: w,
                        children: R,
                    }),
            ],
        });
    };
b.CardAlignment = f;
