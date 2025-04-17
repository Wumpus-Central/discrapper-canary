n.d(t, {
    V9: () => N,
    ek: () => _
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(351773),
    o = n(507808),
    c = n(23547),
    d = n(790542),
    u = n(317257),
    m = n(120786),
    g = n(970815),
    p = n(82856),
    h = n(981631),
    f = n(388032),
    b = n(313008);
let _ = {
        START: b.alignLeft,
        END: b.alignRight
    },
    N = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, analyticsPage: N, isCoachmarkEnabled: x = !0, linkText: E = f.NW.string(f.t.XRdyj4), cardAlignment: j = _.START, className: C } = e,
            { balance: O } = (0, d.A)(),
            [S, v] = i.useState(u.b.DEFAULT),
            [T, I] = i.useState(!1),
            [y, A] = i.useState(!1),
            P = i.useRef(null),
            { shouldOpen: R } = (0, p.lJ)({ backgroundElementRef: P }),
            { shouldOpen: D } = (0, c.Mm)({
                backgroundElementRef: P,
                isCoachmarkEnabled: x,
                onCloseCallback: h.dG4,
                onClickPill: h.dG4
            }),
            Z = D || R;
        i.useEffect(() => {
            if (!x) return;
            let e = (0, c.wH)();
            (0, p.Pe)() || e || Z ? (A(!0), I(!1)) : A(!1);
        }, [x, Z]);
        let w = i.useCallback(() => {
                let e = !T;
                e &&
                    null != N &&
                    (0, o.Y)({
                        pageType: N,
                        sectionType: h.jXE.ORBS_BALANCE_MENU,
                        ctaObject: h.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
                    }),
                    v(e ? u.b.SELECTED : u.b.DEFAULT),
                    I(e);
            }, [T, N]),
            k = i.useCallback(() => {
                T && w();
            }, [T, w]),
            W = (0, l.Z)(null, k);
        return (0, r.jsxs)('div', {
            className: a()(b.container, C, {
                [b.hidden]: y,
                [b.visible]: !y
            }),
            children: [
                (0, r.jsx)(g.A4, {
                    ref: P,
                    balance: O,
                    balanceWidgetMode: Z ? u.b.DEFAULT : S,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: w,
                    showNotificationBadge: t
                }),
                T &&
                    (0, r.jsx)('div', {
                        className: a()(b.cardContainer, j, {
                            [b.hidden]: y,
                            [b.visible]: !y
                        }),
                        ref: W,
                        children: (0, r.jsx)(m.L, {
                            analyticsPage: N,
                            ctaText: n,
                            ctaOnClick: () => {
                                w(), s();
                            },
                            linkText: E
                        })
                    })
            ]
        });
    };
N.CardAlignment = _;
