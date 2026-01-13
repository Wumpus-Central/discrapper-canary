n.d(t, { Z: () => C });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(975298),
    u = n(172416),
    d = n(594174),
    f = n(695349),
    p = n(340625),
    _ = n(260720),
    m = n(119850),
    h = n(22189),
    g = n(391110),
    E = n(75077),
    b = n(51636),
    y = n(877782);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: a } = e,
            o = (0, r.jsx)(l.Heading, {
                variant: "heading-xxl/extrabold",
                color: "text-strong",
                className: null != a ? a : y.heading,
                children: i,
            });
        return null == t
            ? o
            : n
              ? (0, r.jsxs)("div", {
                    className: y.sectionHeader,
                    children: [
                        o,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: y.showAllPerksButton,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: y.container,
                    children: (0, r.jsx)("div", {
                        className: y.sectionHeaderSeeAll,
                        children: o,
                    }),
                });
    },
    C = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: a = !1,
                leftAlignHeaders: O = !1,
                showAllPerksButton: S,
                headerClassname: C,
            } = e,
            A = i.useRef(null),
            N = n === g.gM.WHATS_NEW,
            P = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
            R = (0, m.x)();
        i.useEffect(() => {
            N && R();
        }, [R, N]);
        let w = (0, E.re)(N),
            D = (0, h.Z)(),
            x = (0, E.mN)(),
            { fractionalState: L } = (0, c.Z)(),
            j = (0, f.W)(),
            M = (0, u.bg)({ location: "PremiumPerks" }),
            k = p.Z.useExperiment({ location: "PremiumPerks" }).enabled,
            U = (0, _.QL)(),
            G = (0, E.ZM)({
                perksCards: D,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: x,
                fractionalState: L,
                isInReverseTrial: j,
                showProfileWidgets: M,
                recurring3PPromotionExperiment: k,
                showPremiumGroup: U,
                isPremiumGroupMember: null == P ? void 0 : P.isPremiumGroupMember(),
            }),
            Z = G.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: A,
            className: o()(
                y.section,
                {
                    [y.centerAlignSection]: !O,
                    [y.leftAlignSection]: O,
                },
                t,
            ),
            children: [
                (0, r.jsx)(T, {
                    showAllPerksButton: S,
                    leftAlignHeaders: O,
                    title: w.title,
                    headerClassname: C,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: o()(y.subtitle, {
                        [y.subtitle]: null == S || O,
                        [y.subtitleWithButton]: null != S && !O,
                        [y.fullWidth]: N || O,
                        [y.moreSubtitleMargin]: Z,
                        [y.leftAlignSubtitle]: O,
                        [y.centerAlignSubtitle]: !O,
                    }),
                    children: w.subtitle,
                }),
                !O &&
                    null != S &&
                    (0, r.jsx)("div", {
                        className: y.showAllPerksButtonCenter,
                        children: S,
                    }),
                (0, r.jsx)("div", {
                    className: y.cardContainer,
                    children: G.map((e, t) =>
                        (0, r.jsx)(b.Z, I(v({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
