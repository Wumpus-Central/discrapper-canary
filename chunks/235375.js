(n.r(t),
    n.d(t, {
        baseRules: () => j,
        customRules: () => P
    }),
    n(35282),
    n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    s = n(159635),
    a = n.n(s),
    c = n(481060),
    u = n(37234),
    d = n(230711),
    p = n(454585),
    m = n(703656),
    g = n(626135),
    f = n(981631),
    b = n(596401);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let O = a().defaultRules.link,
    y = { section: f.jXE.SETTINGS_CHANGELOG },
    v = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: o = {} } = e,
            s = (0, c.xSt)(),
            a = parseInt(t, 10),
            u = isNaN(a) ? 1 : a;
        return l.createElement('h'.concat(s + u - 1), { className: i()(...(null == r ? [] : r.split(' ').map((e) => o[e]))) }, n);
    },
    j = null != p.Z ? p.Z.defaultRules : null,
    P = {
        link: {
            parse(e, t, n) {
                var r, l;
                let o,
                    i = e[2],
                    s = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
                    a = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
                    p = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
                return (
                    (o =
                        s || a
                            ? (e) => {
                                  (g.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, { location: y }), s ? d.Z.open(f.oAB.PREMIUM) : a && d.Z.open(f.oAB.HYPESQUAD_ONLINE), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, c.Mr3)(b.Xd), e.preventDefault());
                              }
                            : p
                              ? (e) => {
                                    ((0, m.uL)(i), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, h({}, g.default.getCampaignParams(i))), (0, u.Ou)(), (0, c.Mr3)(b.Xd), e.preventDefault());
                                }
                              : () => {
                                    (n && 'function' == typeof n.onLinkClick && n.onLinkClick(i),
                                        n.changeLog.track(
                                            f.rMx.CHANGE_LOG_CTA_CLICKED,
                                            h(
                                                {
                                                    target: i,
                                                    cta_type: 'inline_link'
                                                },
                                                g.default.getCampaignParams(i)
                                            )
                                        ));
                                }),
                    (r = h({}, O.parse(e, t, n))),
                    (l = l = { callToAction: o }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    r
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    c.eee,
                    {
                        href: a().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: '_blank',
                        className: e.callToAction ? 'cta' : void 0,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        lheading: (e) => ({
            react: (t, n, l) =>
                (0, r.jsx)(
                    v,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, l)
                    },
                    l.key
                )
        }),
        heading: {
            react: (e, t, n) =>
                (0, r.jsx)(
                    v,
                    {
                        level: e.level,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        image: {
            react(e, t, l) {
                let o = n(595173)('./'.concat(e.target));
                return (0, r.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: o
                    },
                    l.key
                );
            }
        },
        blockQuote: { react: null == j ? void 0 : j.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
