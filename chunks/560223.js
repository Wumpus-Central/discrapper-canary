n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(975298),
    u = n(594174),
    d = n(695349),
    f = n(340625),
    p = n(260720),
    _ = n(119850),
    h = n(22189),
    m = n(391110),
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
            o = (0, r.jsx)(l.Heading, {
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
            A = n === m.gM.WHATS_NEW,
            N = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
            P = (0, _.x)();
        i.useEffect(() => {
            A && P();
        }, [P, A]);
        let w = (0, g.re)(A),
            R = (0, h.Z)(),
            D = (0, g.mN)(),
            { fractionalState: x } = (0, c.Z)(),
            L = (0, d.W)(),
            j = f.Z.useExperiment({ location: "PremiumPerks" }).enabled,
            M = (0, p.QL)(),
            k = (0, g.ZM)({
                perksCards: R,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: D,
                fractionalState: x,
                isInReverseTrial: L,
                recurring3PPromotionExperiment: j,
                showPremiumGroup: M,
                isPremiumGroupMember: null == N ? void 0 : N.isPremiumGroupMember(),
            }),
            U = k.some((e) => null != e.pillText);
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
                    title: w.title,
                    headerClassname: T,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: o()(b.subtitle, {
                        [b.subtitle]: null == v || y,
                        [b.subtitleWithButton]: null != v && !y,
                        [b.fullWidth]: A || y,
                        [b.moreSubtitleMargin]: U,
                        [b.leftAlignSubtitle]: y,
                        [b.centerAlignSubtitle]: !y,
                    }),
                    children: w.subtitle,
                }),
                !y &&
                    null != v &&
                    (0, r.jsx)("div", {
                        className: b.showAllPerksButtonCenter,
                        children: v,
                    }),
                (0, r.jsx)("div", {
                    className: b.cardContainer,
                    children: k.map((e, t) =>
                        (0, r.jsx)(E.Z, S(O({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
