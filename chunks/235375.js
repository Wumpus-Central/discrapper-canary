n.r(t),
    n.d(t, {
        baseRules: () => C,
        customRules: () => N,
    }),
    n(35282),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(159635),
    l = n.n(s),
    c = n(481060),
    u = n(37234),
    d = n(454585),
    f = n(703656),
    p = n(313789),
    _ = n(518596),
    m = n(626135),
    h = n(981631),
    g = n(596401);
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
let v = l().defaultRules.link,
    S = { section: h.jXE.SETTINGS_CHANGELOG };
function I() {
    m.default.track(h.rMx.PREMIUM_PROMOTION_OPENED, { location: S });
}
function T(e, t) {
    return null == t ? [] : t.split(" ").map((t) => e[t]);
}
let A = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: a = {} } = e,
            s = (0, c.xSt)(),
            l = parseInt(t, 10),
            u = s + (isNaN(l) ? 1 : l) - 1;
        return i.createElement("h".concat(u), { className: o()(...T(a, r)) }, n);
    },
    C = null != d.Z ? d.Z.defaultRules : null,
    N = {
        link: {
            parse(e, t, n) {
                let r,
                    i = e[2],
                    a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
                    o = i.startsWith("/activities");
                return (
                    (r = a
                        ? (e) => {
                              I(),
                                  (0, _.openUserSettings)(p.n.NITRO_PANEL, { section: h.oAB.PREMIUM }),
                                  n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, c.Mr3)(g.Xd),
                                  e.preventDefault();
                          }
                        : o
                          ? (e) => {
                                (0, f.uL)(i),
                                    n.changeLog.track(
                                        h.rMx.CHANGE_LOG_CTA_CLICKED,
                                        b({}, m.default.getCampaignParams(i)),
                                    ),
                                    (0, u.Ou)(),
                                    (0, c.Mr3)(g.Xd),
                                    e.preventDefault();
                            }
                          : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(i),
                                    n.changeLog.track(
                                        h.rMx.CHANGE_LOG_CTA_CLICKED,
                                        b(
                                            {
                                                target: i,
                                                cta_type: "inline_link",
                                            },
                                            m.default.getCampaignParams(i),
                                        ),
                                    );
                            }),
                    O(b({}, v.parse(e, t, n)), { callToAction: r })
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    c.Anchor,
                    {
                        href: l().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: "_blank",
                        className: e.callToAction ? "cta" : void 0,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
        lheading: (e) => ({
            react: (t, n, i) =>
                (0, r.jsx)(
                    A,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, i),
                    },
                    i.key,
                ),
        }),
        heading: {
            react: (e, t, n) =>
                (0, r.jsx)(
                    A,
                    {
                        level: e.level,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
        image: {
            react(e, t, i) {
                let a = n(595173)("./".concat(e.target));
                return (0, r.jsx)(
                    "img",
                    {
                        alt: e.alt,
                        src: a,
                    },
                    i.key,
                );
            },
        },
        blockQuote: { react: null == C ? void 0 : C.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)("p", { children: t(e.content, n) }, n.key) },
    };
