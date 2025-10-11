n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(975298),
    c = n(594928),
    u = n(172416),
    d = n(695349),
    f = n(119850),
    _ = n(22189),
    p = n(391110),
    h = n(75077),
    m = n(51636),
    g = n(484327);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: a } = e,
            o = (0, r.jsx)(s.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: null != a ? a : g.heading,
                children: i,
            });
        return null == t
            ? o
            : n
              ? (0, r.jsxs)("div", {
                    className: g.sectionHeader,
                    children: [
                        o,
                        null != t &&
                            (0, r.jsx)("div", {
                                className: g.showAllPerksButton,
                                children: t,
                            }),
                    ],
                })
              : (0, r.jsx)("div", {
                    className: g.container,
                    children: (0, r.jsx)("div", {
                        className: g.sectionHeaderSeeAll,
                        children: o,
                    }),
                });
    },
    I = (e) => {
        let {
                className: t,
                variant: n,
                noBackground: a = !1,
                leftAlignHeaders: E = !1,
                showAllPerksButton: y,
                headerClassname: I,
            } = e,
            T = i.useRef(null),
            S = n === p.gM.WHATS_NEW,
            A = (0, f.x)();
        i.useEffect(() => {
            S && A();
        }, [A, S]);
        let C = (0, h.re)(S),
            N = (0, _.Z)(),
            R = (0, h.mN)(),
            { fractionalState: P } = (0, l.Z)(),
            w = (0, d.W)(),
            D = (0, u.bg)({ location: "PremiumPerks" }),
            L = c.wL.useConfig({ location: "PremiumPerks" }).enabled,
            x = (0, h.ZM)({
                perksCards: N,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: R,
                fractionalState: P,
                isInReverseTrial: w,
                showProfileWidgets: D,
                showDisplayNameStyles: L,
            }),
            M = x.some((e) => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: T,
            className: o()(
                g.section,
                {
                    [g.centerAlignSection]: !E,
                    [g.leftAlignSection]: E,
                },
                t,
            ),
            children: [
                (0, r.jsx)(v, {
                    showAllPerksButton: y,
                    leftAlignHeaders: E,
                    title: C.title,
                    headerClassname: I,
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: o()(g.subtitle, {
                        [g.subtitle]: null == y || E,
                        [g.subtitleWithButton]: null != y && !E,
                        [g.fullWidth]: S || E,
                        [g.moreSubtitleMargin]: M,
                        [g.leftAlignSubtitle]: E,
                        [g.centerAlignSubtitle]: !E,
                    }),
                    children: C.subtitle,
                }),
                !E &&
                    null != y &&
                    (0, r.jsx)("div", {
                        className: g.showAllPerksButtonCenter,
                        children: y,
                    }),
                (0, r.jsx)("div", {
                    className: g.cardContainer,
                    children: x.map((e, t) =>
                        (0, r.jsx)(m.Z, O(b({}, e), { forceShadow: a }), "".concat(e.name, "_").concat(t)),
                    ),
                }),
            ],
        });
    };
