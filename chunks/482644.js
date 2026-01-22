n.r(t),
    n.d(t, {
        baseRules: () => C,
        customRules: () => N,
    }),
    n(747238),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(280230),
    l = n.n(o),
    c = n(397927),
    u = n(398590),
    d = n(46054),
    f = n(976860),
    p = n(780964),
    _ = n(840065),
    h = n(954571),
    m = n(652215),
    g = n(559868);

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
let A = l().defaultRules.link,
    v = {
        section: m.JJy.SETTINGS_CHANGELOG,
    };

function S() {
    h.default.track(m.HAw.PREMIUM_PROMOTION_OPENED, {
        location: v,
    });
}

function I(e, t) {
    return null == t ? [] : t.split(" ").map((t) => e[t]);
}
let T = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: a = {} } = e,
            o = (0, c.$Il)(),
            l = parseInt(t, 10),
            u = o + (isNaN(l) ? 1 : l) - 1;
        return i.createElement(
            "h".concat(u),
            {
                className: s()(...I(a, r)),
            },
            n,
        );
    },
    C = null != d.A ? d.A.defaultRules : null,
    N = {
        link: {
            parse(e, t, n) {
                let r,
                    i = e[2],
                    a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
                    s = i.startsWith("/activities");
                return (
                    (r = a
                        ? (e) => {
                              S(),
                                  (0, _.openUserSettings)(p.X.NITRO_PANEL, {
                                      section: m.nc_.PREMIUM,
                                  }),
                                  n.changeLog.track(m.HAw.CHANGE_LOG_CTA_CLICKED, {
                                      cta_type: "nitro",
                                  }),
                                  (0, c.OoC)(g.lb),
                                  e.preventDefault();
                          }
                        : s
                          ? (e) => {
                                (0, f.pX)(i),
                                    n.changeLog.track(
                                        m.HAw.CHANGE_LOG_CTA_CLICKED,
                                        b({}, h.default.getCampaignParams(i)),
                                    ),
                                    (0, u.bz)(),
                                    (0, c.OoC)(g.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(i),
                                    n.changeLog.track(
                                        m.HAw.CHANGE_LOG_CTA_CLICKED,
                                        b(
                                            {
                                                target: i,
                                                cta_type: "inline_link",
                                            },
                                            h.default.getCampaignParams(i),
                                        ),
                                    );
                            }),
                    O(b({}, A.parse(e, t, n)), {
                        callToAction: r,
                    })
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    c.MzZ,
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
                    T,
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
                    T,
                    {
                        level: e.level,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
        image: {
            react(e, t, i) {
                let a = n(274516)("./".concat(e.target));
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
        blockQuote: {
            react: null == C ? void 0 : C.blockQuote.react,
        },
        paragraph: {
            react: (e, t, n) =>
                (0, r.jsx)(
                    "p",
                    {
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
    };
