n.d(t, {
    V9: () => N,
    ek: () => b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(351773),
    o = n(23547),
    c = n(790542),
    d = n(317257),
    u = n(120786),
    m = n(970815),
    g = n(82856),
    p = n(981631),
    h = n(388032),
    f = n(313008);
let b = {
        START: f.alignLeft,
        END: f.alignRight
    },
    N = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, isCoachmarkEnabled: N = !0, linkText: x = h.NW.string(h.t.XRdyj4), cardAlignment: _ = b.START, className: E } = e,
            { balance: j } = (0, c.A)(),
            [O, C] = i.useState(d.b.DEFAULT),
            [S, v] = i.useState(!1),
            [T, I] = i.useState(!1),
            y = i.useRef(null),
            { shouldOpen: A } = (0, g.lJ)({ backgroundElementRef: y }),
            { shouldOpen: P } = (0, o.Mm)({
                backgroundElementRef: y,
                isCoachmarkEnabled: N,
                onCloseCallback: p.dG4,
                onClickPill: p.dG4
            }),
            R = P || A;
        i.useEffect(() => {
            if (!N) return;
            let e = (0, o.wH)();
            (0, g.Pe)() || e || R ? (I(!0), v(!1)) : I(!1);
        }, [N, R]);
        let D = i.useCallback(() => {
                let e = !S;
                C(e ? d.b.SELECTED : d.b.DEFAULT), v(e);
            }, [S]),
            Z = i.useCallback(() => {
                S && D();
            }, [S, D]),
            w = (0, l.Z)(null, Z);
        return (0, r.jsxs)('div', {
            className: a()(f.container, E, {
                [f.hidden]: T,
                [f.visible]: !T
            }),
            children: [
                (0, r.jsx)(m.A4, {
                    ref: y,
                    balance: j,
                    balanceWidgetMode: R ? d.b.DEFAULT : O,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: D,
                    showNotificationBadge: t
                }),
                S &&
                    (0, r.jsx)('div', {
                        className: a()(f.cardContainer, _, {
                            [f.hidden]: T,
                            [f.visible]: !T
                        }),
                        ref: w,
                        children: (0, r.jsx)(u.L, {
                            ctaText: n,
                            ctaOnClick: () => {
                                D(), s();
                            },
                            linkText: x
                        })
                    })
            ]
        });
    };
N.CardAlignment = b;
