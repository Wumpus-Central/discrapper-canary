n.d(t, {
    V9: () => x,
    ek: () => _
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(351773),
    o = n(507808),
    c = n(23547),
    d = n(790542),
    u = n(317257),
    m = n(120786),
    p = n(970815),
    g = n(82856),
    h = n(981631),
    f = n(388032),
    b = n(313008);
let _ = {
        START: b.alignLeft,
        END: b.alignRight
    },
    x = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, analyticsPage: x, isCoachmarkEnabled: E = !0, linkText: j = f.intl.string(f.t.XRdyj4), cardAlignment: C = _.START, className: O } = e,
            { balance: S } = (0, d.A)(),
            [v, T] = r.useState(u.b.DEFAULT),
            [N, I] = r.useState(!1),
            [y, A] = r.useState(!1),
            P = r.useRef(null),
            { shouldOpen: R } = (0, g.lJ)({ backgroundElementRef: P }),
            { shouldOpen: D } = (0, c.Mm)({
                backgroundElementRef: P,
                isCoachmarkEnabled: E,
                onCloseCallback: h.dG4,
                onClickPill: h.dG4
            }),
            Z = D || R;
        r.useEffect(() => {
            if (!E) return;
            let e = (0, c.wH)();
            (0, g.Pe)() || e || Z ? (A(!0), I(!1)) : A(!1);
        }, [E, Z]);
        let w = r.useCallback(() => {
                let e = !N;
                e &&
                    null != x &&
                    (0, o.Y)({
                        pageType: x,
                        sectionType: h.jXE.ORBS_BALANCE_MENU,
                        ctaObject: h.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
                    }),
                    T(e ? u.b.SELECTED : u.b.DEFAULT),
                    I(e);
            }, [N, x]),
            k = r.useCallback(() => {
                N && w();
            }, [N, w]),
            L = (0, a.Z)(null, k);
        return (0, i.jsxs)('div', {
            className: l()(b.container, O, {
                [b.hidden]: y,
                [b.visible]: !y
            }),
            children: [
                (0, i.jsx)(p.A4, {
                    ref: P,
                    balance: S,
                    balanceWidgetMode: Z ? u.b.DEFAULT : v,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: w,
                    showNotificationBadge: t
                }),
                N &&
                    (0, i.jsx)('div', {
                        className: l()(b.cardContainer, C, {
                            [b.hidden]: y,
                            [b.visible]: !y
                        }),
                        ref: L,
                        children: (0, i.jsx)(m.L, {
                            analyticsPage: x,
                            ctaText: n,
                            ctaOnClick: () => {
                                w(), s();
                            },
                            linkText: j
                        })
                    })
            ]
        });
    };
x.CardAlignment = _;
