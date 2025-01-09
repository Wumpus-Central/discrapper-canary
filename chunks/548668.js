let a;
s.d(t, {
    $: function () {
        return O;
    }
});
var n,
    r = s(200651),
    i = s(192379),
    o = s(557533),
    l = s.n(o),
    c = s(622535),
    d = s(213919),
    u = s(982905),
    p = s(794010),
    N = s(66037),
    h = s(231338),
    m = s(436620),
    f = s(330711),
    g = s(994017);
function I(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let _ = 'Footer Navigation',
    k = {
        BLURPLE: 'Blurple',
        PRIMARY: 'Primary'
    },
    A = () => [
        {
            title: f.Z.Messages.NAVIGATION_PRODUCT,
            routes: [
                {
                    link: h.am.DOWNLOAD,
                    title: f.Z.Messages.NAVIGATION_DOWNLOAD,
                    tracking: 'download'
                },
                {
                    link: h.am.BRANDING,
                    title: f.Z.Messages.NAVIGATION_BRANDING,
                    tracking: 'branding'
                },
                {
                    link: h.am.NITRO,
                    title: f.Z.Messages.NAVIGATION_NITRO,
                    tracking: 'nitro',
                    external: !0
                }
            ]
        },
        {
            title: f.Z.Messages.NAVIGATION_DEVELOPERS,
            routes: [
                {
                    link: h.am.RICH_PRESENCE,
                    title: f.Z.Messages.NAVIGATION_RICH_PRESENCE,
                    tracking: 'rich_presence'
                },
                {
                    link: h.am.VERIFICATION,
                    title: f.Z.Messages.NAVIGATION_VERIFICATION,
                    tracking: 'verification',
                    external: !0
                },
                {
                    link: h.yX.DEV_PORTAL_APPLICATIONS,
                    title: f.Z.Messages.NAVIGATION_APPLICATIONS,
                    tracking: 'developers',
                    external: !0
                },
                {
                    link: h.yX.DEV_PORTAL_DOCUMENTATION,
                    title: f.Z.Messages.NAVIGATION_DOCUMENTATION,
                    tracking: 'documentation',
                    external: !0
                }
            ]
        },
        {
            title: f.Z.Messages.NAVIGATION_RESOURCES,
            routes: [
                {
                    link: h.yX.HELP_AND_SUPPORT,
                    title: f.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                    tracking: 'helpandsupport',
                    external: !0
                },
                {
                    link: h.am.GUIDELINES,
                    title: f.Z.Messages.NAVIGATION_GUIDELINES,
                    tracking: 'guidelines',
                    external: !0
                },
                {
                    link: h.yX.FEEDBACK,
                    title: f.Z.Messages.NAVIGATION_FEEDBACK,
                    tracking: 'feedback',
                    external: !0
                },
                {
                    link: h.am.TERMS,
                    title: f.Z.Messages.NAVIGATION_TERMS,
                    tracking: 'terms',
                    external: !0
                },
                {
                    link: h.am.PRIVACY,
                    title: f.Z.Messages.NAVIGATION_PRIVACY,
                    tracking: 'privacy',
                    external: !0
                },
                {
                    link: h.am.SECURITY,
                    title: f.Z.Messages.NAVIGATION_SECURITY,
                    tracking: 'security'
                },
                {
                    link: h.yX.STATUS,
                    title: f.Z.Messages.NAVIGATION_STATUS,
                    tracking: 'status',
                    external: !0
                },
                {
                    link: h.am.SAFETY_LANDING,
                    title: f.Z.Messages.NAVIGATION_SAFETY_CENTER,
                    tracking: 'safetycenter',
                    external: !0
                }
            ]
        },
        {
            title: f.Z.Messages.NAVIGATION_COMPANY,
            routes: [
                {
                    link: h.am.COMPANY,
                    title: f.Z.Messages.NAVIGATION_ABOUT,
                    tracking: 'about'
                },
                {
                    link: h.am.BLOG,
                    title: f.Z.Messages.NAVIGATION_BLOG,
                    tracking: 'blog',
                    external: !0
                },
                {
                    link: h.am.JOBS,
                    title: f.Z.Messages.NAVIGATION_JOBS,
                    tracking: 'join',
                    external: !0
                }
            ]
        },
        {
            title: f.Z.Messages.NAVIGATION_MORE,
            routes: [
                {
                    link: h.am.PARTNERS,
                    title: f.Z.Messages.NAVIGATION_PARTNERS,
                    tracking: 'partners',
                    external: !0
                },
                {
                    link: h.am.HYPESQUAD,
                    title: f.Z.Messages.NAVIGATION_HYPESQUAD,
                    tracking: 'hypesquad',
                    external: !0
                },
                {
                    link: h.yX.PRESS_INQUIRIES,
                    title: f.Z.Messages.NAVIGATION_PRESS_INQUIRIES,
                    tracking: 'pressinquiries',
                    external: !0
                },
                {
                    link: h.am.OPEN_SOURCE,
                    title: f.Z.Messages.NAVIGATION_OPEN_SOURCE,
                    tracking: 'open_source'
                }
            ]
        }
    ],
    b = (e) => {
        let { colorVariant: t, animate: s } = e;
        return (0, r.jsx)('svg', {
            className: (0, u.l)(g, 'footerBackground', t),
            preserveAspectRatio: 'none',
            width: '1920',
            height: '100%',
            viewBox: '0 0 1920 330',
            version: '1.1',
            children: (0, r.jsx)('path', {
                className: (0, u.l)(g, 'footerBackground', s ? 'Play' : 'Paused'),
                fill: '#1a1c1e',
                fillOpacity: '0.3',
                d: 'M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
            })
        });
    };
class O extends (n = i.PureComponent) {
    componentDidMount() {
        this.setState({
            token: (0, d.getToken)(),
            isAppCompatible: m.KO
        });
    }
    renderAppButton(e) {
        if ('STATIC_RENDERER' === this.props.platform) return null;
        let { downloadLink: t, isMobile: s, mobileDownloadText: n, platform: i, variant: o, authRedirectTo: l } = this.props,
            { isAppCompatible: c } = this.state;
        if (s)
            return (0, r.jsx)(a, {
                eventName: 'Download App',
                data: {
                    Platform: i,
                    PTB: !1,
                    Released: !0,
                    'Referring Location': 'Footer'
                },
                alt: 'Download Discord',
                target: '_blank',
                className: (0, u.l)(g, 'button', o),
                href: t,
                children: n
            });
        if (!c)
            return (0, r.jsx)(a, {
                eventName: 'Download App',
                data: {
                    Platform: i,
                    PTB: !1,
                    Released: !0,
                    'Referring Location': 'Footer'
                },
                alt: 'Download Discord',
                className: (0, u.l)(g, 'button', o),
                href: h.am.DOWNLOAD,
                children: f.Z.Messages.NAVIGATION_DOWNLOAD
            });
        let d = null != l ? h.$w.REGISTER_WITH_REDIRECT(l) : h.$w.REGISTER,
            p = f.Z.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = h.$w.ME), (p = f.Z.Messages.COMMON_OPEN_DISCORD)),
            (0, r.jsx)(a, {
                eventName: _,
                className: (0, u.l)(g, 'button', this.props.variant),
                data: {
                    linkClicked: e ? 'open' : 'login',
                    googleAnalytics: !0
                },
                href: d,
                children: p
            })
        );
    }
    render() {
        let { variant: e, style: t, className: n, avoidRouter: i, showWave: o } = this.props,
            { animateBackground: d, token: p } = this.state,
            m = A().map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, r.jsx)(
                              a,
                              {
                                  className: g.route,
                                  eventName: _,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title
                              },
                              e.link || t
                          )
                        : (0, r.jsx)(
                              N.Z,
                              {
                                  avoidRouter: i,
                                  to: e.link,
                                  from: 'footer_navigation',
                                  className: g.route,
                                  children: (0, r.jsx)(a, {
                                      tag: 'span',
                                      eventName: _,
                                      data: { linkClicked: e.tracking },
                                      children: e.title
                                  })
                              },
                              e.link
                          )
                );
                return (0, r.jsxs)(
                    'div',
                    {
                        className: g.navigationSection,
                        children: [
                            (0, r.jsx)('h3', {
                                className: g.navigationHeader,
                                children: e.title
                            }),
                            t
                        ]
                    },
                    e.title
                );
            });
        return (0, r.jsx)(c.$, {
            onChange: this.handleVisibility,
            children: (0, r.jsxs)('footer', {
                className: l()((0, u.l)(g, 'footer', e), n),
                style: t,
                children: [
                    o
                        ? (0, r.jsx)(b, {
                              colorVariant: e,
                              animate: d
                          })
                        : null,
                    (0, r.jsxs)('div', {
                        className: g.footerContent,
                        children: [
                            (0, r.jsxs)('div', {
                                className: g.navigation,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: g.logoWrap,
                                        children: (0, r.jsx)(a, {
                                            className: g.logo,
                                            href: h.am.INDEX,
                                            eventName: _,
                                            data: { linkClicked: 'logo' },
                                            children: (0, r.jsx)('img', {
                                                alt: f.Z.Messages.NAVIGATION_HOME,
                                                src: s(131529)
                                            })
                                        })
                                    }),
                                    m
                                ]
                            }),
                            (0, r.jsx)('div', { className: g.separator }),
                            (0, r.jsxs)('div', {
                                className: g.joinDiscord,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: g.stats,
                                        children: [
                                            (0, r.jsx)('h2', {
                                                className: g.readyToJoin,
                                                children: f.Z.Messages.FOOTER_READY_TO_TRY_DISCORD
                                            }),
                                            (0, r.jsx)('h3', {
                                                className: g.joinOtherPlayers,
                                                children: f.Z.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({ num: h.vS })
                                            })
                                        ]
                                    }),
                                    this.renderAppButton(p)
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(e) {
        super(e),
            I(this, 'state', {
                animateBackground: !1,
                isMobile: null,
                token: null,
                isAppCompatible: !0
            }),
            I(this, 'handleVisibility', (e) => {
                this.setState({ animateBackground: e });
            }),
            null != e.locale && f.Z.setLocale(e.locale),
            (a = (t) =>
                (0, r.jsx)(p.Z, {
                    track: e.track,
                    trackOutboundLink: e.trackOutboundLink,
                    ...t
                }));
    }
}
I(O, 'Variants', k),
    I(O, 'defaultProps', {
        variant: k.PRIMARY,
        showWave: !0
    });
