(n.r(t),
    n.d(t, {
        baseRules: () => j,
        customRules: () => P
    }),
    n(35282),
    n(388685));
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    a = n(159635),
    s = n.n(a),
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
let O = s().defaultRules.link,
    y = { section: f.jXE.SETTINGS_CHANGELOG },
    v = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: l = {} } = e,
            a = (0, c.xSt)(),
            s = parseInt(t, 10),
            u = isNaN(s) ? 1 : s;
        return o.createElement('h'.concat(a + u - 1), { className: i()(...(null == r ? [] : r.split(' ').map((e) => l[e]))) }, n);
    },
    j = null != p.Z ? p.Z.defaultRules : null,
    P = {
        link: {
            parse(e, t, n) {
                var r, o;
                let l,
                    i = e[2],
                    a = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
                    s = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
                    p = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
                return (
                    (l =
                        a || s
                            ? (e) => {
                                  (g.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, { location: y }), a ? d.Z.open(f.oAB.PREMIUM) : s && d.Z.open(f.oAB.HYPESQUAD_ONLINE), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, c.Mr3)(b.Xd), e.preventDefault());
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
                    (o = o = { callToAction: l }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    r
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    c.eee,
                    {
                        href: s().sanitizeUrl(e.target),
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
            react: (t, n, o) =>
                (0, r.jsx)(
                    v,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, o)
                    },
                    o.key
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
            react(e, t, o) {
                let l = n(595173)('./'.concat(e.target));
                return (0, r.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: l
                    },
                    o.key
                );
            }
        },
        blockQuote: { react: null == j ? void 0 : j.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
