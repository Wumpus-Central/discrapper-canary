n.d(t, {
    V9: () => O,
    ek: () => C
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512969),
    o = n(351773),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(341907),
    g = n(23547),
    p = n(790542),
    h = n(317257),
    f = n(120786),
    b = n(970815),
    x = n(82856),
    N = n(981631),
    _ = n(215023),
    E = n(388032),
    j = n(577956);
let C = {
        START: j.alignLeft,
        END: j.alignRight
    },
    O = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, isCoachmarkEnabled: O = !0, linkText: v = E.NW.string(E.t.XRdyj4), cardAlignment: S = C.START, className: T } = e,
            { balance: I } = (0, p.A)(),
            [y, A] = i.useState(h.b.DEFAULT),
            [P, R] = i.useState(!1),
            [D, Z] = i.useState(!1),
            w = (0, l.TH)(),
            { analyticsLocations: k } = (0, d.ZP)(c.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            W = i.useRef(null),
            { shouldOpen: L } = (0, x.lJ)({ backgroundElementRef: W }),
            { shouldOpen: B } = (0, g.Mm)({
                backgroundElementRef: W,
                isCoachmarkEnabled: O,
                onCloseCallback: N.dG4,
                onClickPill: N.dG4,
                linkOnClick: () => {
                    (0, m.navigateToQuestHome)();
                },
                ctaOnClick: () => {
                    w.pathname !== N.Z5c.COLLECTIBLES_SHOP &&
                        (0, u.mK)({
                            openInLayer: !1,
                            tab: _.AW.ORBS,
                            analyticsLocations: k,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
                        });
                }
            }),
            M = B || L;
        i.useEffect(() => {
            if (!O) return;
            let e = (0, g.wH)();
            (0, x.Pe)() || e || M ? (Z(!0), R(!1)) : Z(!1);
        }, [O, M]);
        let U = i.useCallback(() => {
                let e = !P;
                A(e ? h.b.SELECTED : h.b.DEFAULT), R(e);
            }, [P]),
            V = i.useCallback(() => {
                P && U();
            }, [P, U]),
            G = (0, o.Z)(null, V);
        return (0, r.jsxs)('div', {
            className: a()(j.container, T, {
                [j.hidden]: D,
                [j.visible]: !D
            }),
            children: [
                (0, r.jsx)(b.A4, {
                    ref: W,
                    balance: I,
                    balanceWidgetMode: M ? h.b.DEFAULT : y,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: U,
                    showNotificationBadge: t
                }),
                P &&
                    (0, r.jsx)('div', {
                        className: a()(j.cardContainer, S, {
                            [j.hidden]: D,
                            [j.visible]: !D
                        }),
                        ref: G,
                        children: (0, r.jsx)(f.L, {
                            ctaText: n,
                            ctaOnClick: () => {
                                U(), s();
                            },
                            linkText: v
                        })
                    })
            ]
        });
    };
O.CardAlignment = C;
