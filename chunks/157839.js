n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(531260),
    d = n(287809),
    u = n(637073),
    _ = n(398523),
    m = n(612669),
    A = n(180022),
    g = n(513570),
    E = n(975662),
    h = n(322631),
    p = n(17307),
    C = n(609195);
let x = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: s, headerClassname: r } = e,
            a = (0, i.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                color: "text-strong",
                className: null != r ? r : C.R_,
                children: s,
            });
        return null == t
            ? a
            : n
              ? (0, i.jsxs)("div", {
                    className: C.bV,
                    children: [a, null != t && (0, i.jsx)("div", { className: C.W0, children: t })],
                })
              : (0, i.jsx)("div", { className: C.kL, children: (0, i.jsx)("div", { className: C.pr, children: a }) });
    },
    T = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: r = !1,
                leftAlignHeaders: T = !1,
                showAllPerksButton: I,
                headerClassname: S,
            } = e,
            f = s.useRef(null),
            N = n === h.cJ.WHATS_NEW,
            b = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
            R = (0, g.E)();
        s.useEffect(() => {
            N && R();
        }, [R, N]);
        let v = (0, p.G4)(N),
            O = (0, E.A)(),
            j = (0, p.LQ)(),
            { fractionalState: P } = (0, c.A)(),
            y = (0, u.d)(),
            L = _.A.useExperiment({ location: "PremiumPerks" }).enabled,
            D = (0, m.O9)(),
            M = (0, p.vx)({
                perksCards: O,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: j,
                fractionalState: P,
                isInReverseTrial: y,
                recurring3PPromotionExperiment: L,
                showPremiumGroup: D,
                isPremiumGroupMember: b?.isPremiumGroupMember(),
            }),
            G = M.some((e) => null != e.pillText);
        return (0, i.jsxs)("div", {
            ref: f,
            className: a()(C.uW, { [C.qO]: !T, [C.Uv]: T }, t),
            children: [
                (0, i.jsx)(x, { showAllPerksButton: I, leftAlignHeaders: T, title: v.title, headerClassname: S }),
                (0, i.jsx)(o.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: a()(C.VA, {
                        [C.VA]: null == I || T,
                        [C.Xx]: null != I && !T,
                        [C.Ij]: N || T,
                        [C.Ob]: G,
                        [C.dO]: T,
                        [C.br]: !T,
                    }),
                    children: v.subtitle,
                }),
                !T && null != I && (0, i.jsx)("div", { className: C.xk, children: I }),
                (0, i.jsx)("div", {
                    className: C.Ui,
                    children: M.map((e, t) => (0, i.jsx)(A.A, { ...e, forceShadow: r }, `${e.name}_${t}`)),
                }),
            ],
        });
    };
