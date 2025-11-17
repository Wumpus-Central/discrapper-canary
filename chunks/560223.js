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
    _ = n(119850),
    p = n(22189),
    h = n(391110),
    m = n(75077),
    g = n(51636),
    E = n(484327);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: a } = e,
            o = (0, r.jsx)(s.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: null != a ? a : E.heading,
                children: i,
            });
        return null == t
            ? o
            : n
              ? (0, r.jsxs)("div", {
                    className: E.sectionHeader,
                    children: [
                        o,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: E.showAllPerksButton,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: E.container,
                    children: (0, r.jsx)("div", {
                        className: E.sectionHeaderSeeAll,
                        children: o,
                    }),
                });
    },
    T = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: a = !1,
                leftAlignHeaders: b = !1,
                showAllPerksButton: O,
                headerClassname: T,
            } = e,
            S = i.useRef(null),
            A = n === h.gM.WHATS_NEW,
            C = (0, _.x)();
        i.useEffect(() => {
            A && C();
        }, [C, A]);
        let N = (0, m.re)(A),
            R = (0, p.Z)(),
            P = (0, m.mN)(),
            { fractionalState: D } = (0, l.Z)(),
            w = (0, d.W)(),
            x = (0, u.bg)({ location: "PremiumPerks" }),
            L = c.JH.useExperiment({ location: "PremiumPerks" }).enabled,
            M = f.Z.useExperiment({ location: "PremiumPerks" }).enabled,
            k = (0, m.ZM)({
                perksCards: R,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: P,
                fractionalState: D,
                isInReverseTrial: w,
                showProfileWidgets: x,
                showDisplayNameStyles: L,
                recurring3PPromotionExperiment: M,
            }),
            j = k.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: S,
            className: o()(
                E.section,
                {
                    [E.centerAlignSection]: !b,
                    [E.leftAlignSection]: b,
                },
                t,
            ),
            children: [
                (0, r.jsx)(I, {
                    showAllPerksButton: O,
                    leftAlignHeaders: b,
                    title: N.title,
                    headerClassname: T,
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: o()(E.subtitle, {
                        [E.subtitle]: null == O || b,
                        [E.subtitleWithButton]: null != O && !b,
                        [E.fullWidth]: A || b,
                        [E.moreSubtitleMargin]: j,
                        [E.leftAlignSubtitle]: b,
                        [E.centerAlignSubtitle]: !b,
                    }),
                    children: N.subtitle,
                }),
                !b &&
                    null != O &&
                    (0, r.jsx)("div", {
                        className: E.showAllPerksButtonCenter,
                        children: O,
                    }),
                (0, r.jsx)("div", {
                    className: E.cardContainer,
                    children: k.map((e, t) =>
                        (0, r.jsx)(g.Z, v(y({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
