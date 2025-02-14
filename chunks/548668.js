let n;
a.d(t, { $: () => f });
var s,
    l = a(200651),
    i = a(192379),
    r = a(557533),
    o = a.n(r),
    c = a(622535),
    d = a(213919),
    u = a(982905),
    _ = a(794010),
    N = a(66037),
    h = a(231338),
    m = a(436620),
    p = a(330711),
    I = a(334078);
function k(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = a),
        e
    );
}
let A = 'Footer Navigation',
    g = {
        BLURPLE: 'Blurple',
        PRIMARY: 'Primary'
    },
    O = () => [
        {
            title: p.Z.Messages.NAVIGATION_PRODUCT,
            routes: [
                {
                    link: h.am.DOWNLOAD,
                    title: p.Z.Messages.NAVIGATION_DOWNLOAD,
                    tracking: 'download'
                },
                {
                    link: h.am.BRANDING,
                    title: p.Z.Messages.NAVIGATION_BRANDING,
                    tracking: 'branding'
                },
                {
                    link: h.am.NITRO,
                    title: p.Z.Messages.NAVIGATION_NITRO,
                    tracking: 'nitro',
                    external: !0
                }
            ]
        },
        {
            title: p.Z.Messages.NAVIGATION_DEVELOPERS,
            routes: [
                {
                    link: h.am.RICH_PRESENCE,
                    title: p.Z.Messages.NAVIGATION_RICH_PRESENCE,
                    tracking: 'rich_presence'
                },
                {
                    link: h.am.VERIFICATION,
                    title: p.Z.Messages.NAVIGATION_VERIFICATION,
                    tracking: 'verification',
                    external: !0
                },
                {
                    link: h.yX.DEV_PORTAL_APPLICATIONS,
                    title: p.Z.Messages.NAVIGATION_APPLICATIONS,
                    tracking: 'developers',
                    external: !0
                },
                {
                    link: h.yX.DEV_PORTAL_DOCUMENTATION,
                    title: p.Z.Messages.NAVIGATION_DOCUMENTATION,
                    tracking: 'documentation',
                    external: !0
                }
            ]
        },
        {
            title: p.Z.Messages.NAVIGATION_RESOURCES,
            routes: [
                {
                    link: h.yX.HELP_AND_SUPPORT,
                    title: p.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                    tracking: 'helpandsupport',
                    external: !0
                },
                {
                    link: h.am.GUIDELINES,
                    title: p.Z.Messages.NAVIGATION_GUIDELINES,
                    tracking: 'guidelines',
                    external: !0
                },
                {
                    link: h.yX.FEEDBACK,
                    title: p.Z.Messages.NAVIGATION_FEEDBACK,
                    tracking: 'feedback',
                    external: !0
                },
                {
                    link: h.am.TERMS,
                    title: p.Z.Messages.NAVIGATION_TERMS,
                    tracking: 'terms',
                    external: !0
                },
                {
                    link: h.am.PRIVACY,
                    title: p.Z.Messages.NAVIGATION_PRIVACY,
                    tracking: 'privacy',
                    external: !0
                },
                {
                    link: h.am.SECURITY,
                    title: p.Z.Messages.NAVIGATION_SECURITY,
                    tracking: 'security'
                },
                {
                    link: h.yX.STATUS,
                    title: p.Z.Messages.NAVIGATION_STATUS,
                    tracking: 'status',
                    external: !0
                },
                {
                    link: h.am.SAFETY_LANDING,
                    title: p.Z.Messages.NAVIGATION_SAFETY_CENTER,
                    tracking: 'safetycenter',
                    external: !0
                }
            ]
        },
        {
            title: p.Z.Messages.NAVIGATION_COMPANY,
            routes: [
                {
                    link: h.am.COMPANY,
                    title: p.Z.Messages.NAVIGATION_ABOUT,
                    tracking: 'about'
                },
                {
                    link: h.am.BLOG,
                    title: p.Z.Messages.NAVIGATION_BLOG,
                    tracking: 'blog',
                    external: !0
                },
                {
                    link: h.am.JOBS,
                    title: p.Z.Messages.NAVIGATION_JOBS,
                    tracking: 'join',
                    external: !0
                }
            ]
        },
        {
            title: p.Z.Messages.NAVIGATION_MORE,
            routes: [
                {
                    link: h.am.PARTNERS,
                    title: p.Z.Messages.NAVIGATION_PARTNERS,
                    tracking: 'partners',
                    external: !0
                },
                {
                    link: h.am.HYPESQUAD,
                    title: p.Z.Messages.NAVIGATION_HYPESQUAD,
                    tracking: 'hypesquad',
                    external: !0
                },
                {
                    link: h.yX.PRESS_INQUIRIES,
                    title: p.Z.Messages.NAVIGATION_PRESS_INQUIRIES,
                    tracking: 'pressinquiries',
                    external: !0
                },
                {
                    link: h.am.OPEN_SOURCE,
                    title: p.Z.Messages.NAVIGATION_OPEN_SOURCE,
                    tracking: 'open_source'
                }
            ]
        }
    ],
    b = (e) => {
        let { colorVariant: t, animate: a } = e;
        return (0, l.jsx)('svg', {
            className: (0, u.l)(I, 'footerBackground', t),
            preserveAspectRatio: 'none',
            width: '1920',
            height: '100%',
            viewBox: '0 0 1920 330',
            version: '1.1',
            children: (0, l.jsx)('path', {
                className: (0, u.l)(I, 'footerBackground', a ? 'Play' : 'Paused'),
                fill: '#1a1c1e',
                fillOpacity: '0.3',
                d: 'M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
            })
        });
    };
class f extends (s = i.PureComponent) {
    componentDidMount() {
        this.setState({
            token: (0, d.getToken)(),
            isAppCompatible: m.KO
        });
    }
    renderAppButton(e) {
        if ('STATIC_RENDERER' === this.props.platform) return null;
        let { downloadLink: t, isMobile: a, mobileDownloadText: s, platform: i, variant: r, authRedirectTo: o } = this.props,
            { isAppCompatible: c } = this.state;
        if (a)
            return (0, l.jsx)(n, {
                eventName: 'Download App',
                data: {
                    Platform: i,
                    PTB: !1,
                    Released: !0,
                    'Referring Location': 'Footer'
                },
                alt: 'Download Discord',
                target: '_blank',
                className: (0, u.l)(I, 'button', r),
                href: t,
                children: s
            });
        if (!c)
            return (0, l.jsx)(n, {
                eventName: 'Download App',
                data: {
                    Platform: i,
                    PTB: !1,
                    Released: !0,
                    'Referring Location': 'Footer'
                },
                alt: 'Download Discord',
                className: (0, u.l)(I, 'button', r),
                href: h.am.DOWNLOAD,
                children: p.Z.Messages.NAVIGATION_DOWNLOAD
            });
        let d = null != o ? h.$w.REGISTER_WITH_REDIRECT(o) : h.$w.REGISTER,
            _ = p.Z.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = h.$w.ME), (_ = p.Z.Messages.COMMON_OPEN_DISCORD)),
            (0, l.jsx)(n, {
                eventName: A,
                className: (0, u.l)(I, 'button', this.props.variant),
                data: {
                    linkClicked: e ? 'open' : 'login',
                    googleAnalytics: !0
                },
                href: d,
                children: _
            })
        );
    }
    render() {
        let { variant: e, style: t, className: s, avoidRouter: i, showWave: r } = this.props,
            { animateBackground: d, token: _ } = this.state,
            m = O().map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, l.jsx)(
                              n,
                              {
                                  className: I.route,
                                  eventName: A,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title
                              },
                              e.link || t
                          )
                        : (0, l.jsx)(
                              N.Z,
                              {
                                  avoidRouter: i,
                                  to: e.link,
                                  from: 'footer_navigation',
                                  className: I.route,
                                  children: (0, l.jsx)(n, {
                                      tag: 'span',
                                      eventName: A,
                                      data: { linkClicked: e.tracking },
                                      children: e.title
                                  })
                              },
                              e.link
                          )
                );
                return (0, l.jsxs)(
                    'div',
                    {
                        className: I.navigationSection,
                        children: [
                            (0, l.jsx)('h3', {
                                className: I.navigationHeader,
                                children: e.title
                            }),
                            t
                        ]
                    },
                    e.title
                );
            });
        return (0, l.jsx)(c.$, {
            onChange: this.handleVisibility,
            children: (0, l.jsxs)('footer', {
                className: o()((0, u.l)(I, 'footer', e), s),
                style: t,
                children: [
                    r
                        ? (0, l.jsx)(b, {
                              colorVariant: e,
                              animate: d
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        className: I.footerContent,
                        children: [
                            (0, l.jsxs)('div', {
                                className: I.navigation,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: I.logoWrap,
                                        children: (0, l.jsx)(n, {
                                            className: I.logo,
                                            href: h.am.INDEX,
                                            eventName: A,
                                            data: { linkClicked: 'logo' },
                                            children: (0, l.jsx)('img', {
                                                alt: p.Z.Messages.NAVIGATION_HOME,
                                                src: a(131529)
                                            })
                                        })
                                    }),
                                    m
                                ]
                            }),
                            (0, l.jsx)('div', { className: I.separator }),
                            (0, l.jsxs)('div', {
                                className: I.joinDiscord,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: I.stats,
                                        children: [
                                            (0, l.jsx)('h2', {
                                                className: I.readyToJoin,
                                                children: p.Z.Messages.FOOTER_READY_TO_TRY_DISCORD
                                            }),
                                            (0, l.jsx)('h3', {
                                                className: I.joinOtherPlayers,
                                                children: p.Z.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({ num: h.vS })
                                            })
                                        ]
                                    }),
                                    this.renderAppButton(_)
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
            k(this, 'state', {
                animateBackground: !1,
                isMobile: null,
                token: null,
                isAppCompatible: !0
            }),
            k(this, 'handleVisibility', (e) => {
                this.setState({ animateBackground: e });
            }),
            null != e.locale && p.Z.setLocale(e.locale),
            (n = (t) =>
                (0, l.jsx)(_.Z, {
                    track: e.track,
                    trackOutboundLink: e.trackOutboundLink,
                    ...t
                }));
    }
}
k(f, 'Variants', g),
    k(f, 'defaultProps', {
        variant: g.PRIMARY,
        showWave: !0
    });
