n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(975298),
    c = n(172416),
    u = n(695349),
    d = n(119850),
    f = n(22189),
    _ = n(391110),
    p = n(75077),
    h = n(51636),
    m = n(484327);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: a } = e,
            o = (0, r.jsx)(s.X6q, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: null != a ? a : m.heading,
                children: i,
            });
        return null == t
            ? o
            : n
              ? (0, r.jsxs)("div", {
                    className: m.sectionHeader,
                    children: [
                        o,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: m.showAllPerksButton,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: m.container,
                    children: (0, r.jsx)("div", {
                        className: m.sectionHeaderSeeAll,
                        children: o,
                    }),
                });
    },
    v = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: a = !1,
                leftAlignHeaders: g = !1,
                showAllPerksButton: b,
                headerClassname: v,
            } = e,
            I = i.useRef(null),
            T = n === _.gM.WHATS_NEW,
            S = (0, d.x)();
        i.useEffect(() => {
            T && S();
        }, [S, T]);
        let A = (0, p.re)(T),
            C = (0, f.Z)(),
            N = (0, p.mN)(),
            { fractionalState: R } = (0, l.Z)(),
            P = (0, u.W)(),
            w = (0, c.bg)({ location: "PremiumPerks" }),
            D = (0, p.ZM)({
                perksCards: C,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: N,
                fractionalState: R,
                isInReverseTrial: P,
                showProfileWidgets: w,
            }),
            L = D.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: I,
            className: o()(
                m.section,
                {
                    [m.centerAlignSection]: !g,
                    [m.leftAlignSection]: g,
                },
                t,
            ),
            children: [
                (0, r.jsx)(O, {
                    showAllPerksButton: b,
                    leftAlignHeaders: g,
                    title: A.title,
                    headerClassname: v,
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: o()(m.subtitle, {
                        [m.subtitle]: null == b || g,
                        [m.subtitleWithButton]: null != b && !g,
                        [m.fullWidth]: T || g,
                        [m.moreSubtitleMargin]: L,
                        [m.leftAlignSubtitle]: g,
                        [m.centerAlignSubtitle]: !g,
                    }),
                    children: A.subtitle,
                }),
                !g &&
                    null != b &&
                    (0, r.jsx)("div", {
                        className: m.showAllPerksButtonCenter,
                        children: b,
                    }),
                (0, r.jsx)("div", {
                    className: m.cardContainer,
                    children: D.map((e, t) =>
                        (0, r.jsx)(h.Z, y(E({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
