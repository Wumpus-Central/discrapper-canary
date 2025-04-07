n.r(t),
    n.d(t, {
        baseRules: () => O,
        customRules: () => x
    }),
    n(35282),
    n(388685);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(477660),
    c = n.n(s),
    l = n(481060),
    u = n(37234),
    d = n(230711),
    p = n(454585),
    g = n(703656),
    m = n(626135),
    f = n(981631),
    _ = n(596401);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let h = c().defaultRules.link,
    y = { section: f.jXE.SETTINGS_CHANGELOG },
    v = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: a = {} } = e,
            s = (0, l.xSt)(),
            c = parseInt(t, 10),
            u = isNaN(c) ? 1 : c;
        return o.createElement('h'.concat(s + u - 1), { className: i()(...(null == r ? [] : r.split(' ').map((e) => a[e]))) }, n);
    },
    O = null != p.Z ? p.Z.defaultRules : null,
    x = {
        link: {
            parse(e, t, n) {
                var r, o;
                let a,
                    i = e[2],
                    s = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
                    c = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
                    p = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
                return (
                    (a =
                        s || c
                            ? (e) => {
                                  m.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, { location: y }), s ? d.Z.open(f.oAB.PREMIUM) : c && d.Z.open(f.oAB.HYPESQUAD_ONLINE), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, l.Mr3)(_.Xd), e.preventDefault();
                              }
                            : p
                              ? (e) => {
                                    (0, g.uL)(i), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, b({}, m.default.getCampaignParams(i))), (0, u.Ou)(), (0, l.Mr3)(_.Xd), e.preventDefault();
                                }
                              : () => {
                                    n && 'function' == typeof n.onLinkClick && n.onLinkClick(i),
                                        n.changeLog.track(
                                            f.rMx.CHANGE_LOG_CTA_CLICKED,
                                            b(
                                                {
                                                    target: i,
                                                    cta_type: 'inline_link'
                                                },
                                                m.default.getCampaignParams(i)
                                            )
                                        );
                                }),
                    (r = b({}, h.parse(e, t, n))),
                    (o = o = { callToAction: a }),
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
                    l.eee,
                    {
                        href: c().sanitizeUrl(e.target),
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
                let a = n(595173)('./'.concat(e.target));
                return (0, r.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: a
                    },
                    o.key
                );
            }
        },
        blockQuote: { react: null == O ? void 0 : O.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
