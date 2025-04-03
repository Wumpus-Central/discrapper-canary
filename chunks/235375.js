r.r(t),
    r.d(t, {
        baseRules: () => O,
        customRules: () => k
    }),
    r(301563),
    r(47120);
var n = r(200651),
    o = r(192379),
    i = r(120356),
    a = r.n(i),
    s = r(477660),
    l = r.n(s),
    c = r(481060),
    d = r(37234),
    u = r(230711),
    p = r(454585),
    m = r(703656),
    b = r(626135),
    _ = r(981631),
    g = r(596401);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let f = l().defaultRules.link,
    y = { section: _.jXE.SETTINGS_CHANGELOG },
    x = (e) => {
        let { level: t, children: r, className: n = null, styleSheet: i = {} } = e,
            s = (0, c.xSt)(),
            l = parseInt(t, 10),
            d = isNaN(l) ? 1 : l;
        return o.createElement('h'.concat(s + d - 1), { className: a()(...(null == n ? [] : n.split(' ').map((e) => i[e]))) }, r);
    },
    O = null != p.Z ? p.Z.defaultRules : null,
    k = {
        link: {
            parse(e, t, r) {
                var n, o;
                let i,
                    a = e[2],
                    s = a.startsWith('https://discordapp.com/nitro') || a.startsWith('https://discord.com/nitro'),
                    l = a.startsWith('https://discordapp.com/hypesquad') || a.startsWith('https://discord.com/hypesquad'),
                    p = a.startsWith('/shop/fullscreen?source=1') || a.startsWith('/activities');
                return (
                    (i =
                        s || l
                            ? (e) => {
                                  b.default.track(_.rMx.PREMIUM_PROMOTION_OPENED, { location: y }), s ? u.Z.open(_.oAB.PREMIUM) : l && u.Z.open(_.oAB.HYPESQUAD_ONLINE), r.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, c.Mr3)(g.Xd), e.preventDefault();
                              }
                            : p
                              ? (e) => {
                                    (0, m.uL)(a), r.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, h({}, b.default.getCampaignParams(a))), (0, d.Ou)(), (0, c.Mr3)(g.Xd), e.preventDefault();
                                }
                              : () => {
                                    r && 'function' == typeof r.onLinkClick && r.onLinkClick(a),
                                        r.changeLog.track(
                                            _.rMx.CHANGE_LOG_CTA_CLICKED,
                                            h(
                                                {
                                                    target: a,
                                                    cta_type: 'inline_link'
                                                },
                                                b.default.getCampaignParams(a)
                                            )
                                        );
                                }),
                    (n = h({}, f.parse(e, t, r))),
                    (o = o = { callToAction: i }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    n
                );
            },
            react: (e, t, r) =>
                (0, n.jsx)(
                    c.eee,
                    {
                        href: l().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: '_blank',
                        className: e.callToAction ? 'cta' : void 0,
                        children: t(e.content, r)
                    },
                    r.key
                )
        },
        lheading: (e) => ({
            react: (t, r, o) =>
                (0, n.jsx)(
                    x,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: r(t.content, o)
                    },
                    o.key
                )
        }),
        heading: {
            react: (e, t, r) =>
                (0, n.jsx)(
                    x,
                    {
                        level: e.level,
                        children: t(e.content, r)
                    },
                    r.key
                )
        },
        image: {
            react(e, t, o) {
                let i = r(595173)('./'.concat(e.target));
                return (0, n.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: i
                    },
                    o.key
                );
            }
        },
        blockQuote: { react: null == O ? void 0 : O.blockQuote.react },
        paragraph: { react: (e, t, r) => (0, n.jsx)('p', { children: t(e.content, r) }, r.key) }
    };
