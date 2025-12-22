n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(975298),
    c = n(594928),
    u = n(172416),
    d = n(695349),
    f = n(340625),
    p = n(260720),
    _ = n(119850),
    m = n(22189),
    h = n(391110),
    g = n(75077),
    E = n(51636),
    b = n(877782);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: a } = e,
            o = (0, r.jsx)(s.Heading, {
                variant: "heading-xxl/extrabold",
                color: "text-strong",
                className: null != a ? a : b.heading,
                children: i,
            });
        return null == t
            ? o
            : n
              ? (0, r.jsxs)("div", {
                    className: b.sectionHeader,
                    children: [
                        o,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: b.showAllPerksButton,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: b.container,
                    children: (0, r.jsx)("div", {
                        className: b.sectionHeaderSeeAll,
                        children: o,
                    }),
                });
    },
    T = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: a = !1,
                leftAlignHeaders: y = !1,
                showAllPerksButton: v,
                headerClassname: T,
            } = e,
            C = i.useRef(null),
            A = n === h.gM.WHATS_NEW,
            N = (0, _.x)();
        i.useEffect(() => {
            A && N();
        }, [N, A]);
        let P = (0, g.re)(A),
            R = (0, m.Z)(),
            w = (0, g.mN)(),
            { fractionalState: D } = (0, l.Z)(),
            x = (0, d.W)(),
            L = (0, u.bg)({ location: "PremiumPerks" }),
            j = c.JH.useExperiment({ location: "PremiumPerks" }).enabled,
            M = f.Z.useExperiment({ location: "PremiumPerks" }).enabled,
            k = (0, p.QL)(),
            U = (0, g.ZM)({
                perksCards: R,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: w,
                fractionalState: D,
                isInReverseTrial: x,
                showProfileWidgets: L,
                showDisplayNameStyles: j,
                recurring3PPromotionExperiment: M,
                showPremiumGroup: k,
            }),
            G = U.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: C,
            className: o()(
                b.section,
                {
                    [b.centerAlignSection]: !y,
                    [b.leftAlignSection]: y,
                },
                t,
            ),
            children: [
                (0, r.jsx)(I, {
                    showAllPerksButton: v,
                    leftAlignHeaders: y,
                    title: P.title,
                    headerClassname: T,
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: o()(b.subtitle, {
                        [b.subtitle]: null == v || y,
                        [b.subtitleWithButton]: null != v && !y,
                        [b.fullWidth]: A || y,
                        [b.moreSubtitleMargin]: G,
                        [b.leftAlignSubtitle]: y,
                        [b.centerAlignSubtitle]: !y,
                    }),
                    children: P.subtitle,
                }),
                !y &&
                    null != v &&
                    (0, r.jsx)("div", {
                        className: b.showAllPerksButtonCenter,
                        children: v,
                    }),
                (0, r.jsx)("div", {
                    className: b.cardContainer,
                    children: U.map((e, t) =>
                        (0, r.jsx)(E.Z, S(O({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
