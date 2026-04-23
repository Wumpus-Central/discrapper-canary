let s;
a.d(t, { w: () => g });
var l = a(627968),
    r = a(64700),
    i = a(503698),
    n = a.n(i),
    o = a(230109),
    c = a(247775),
    d = a(489569),
    _ = a(409291),
    N = a(137540),
    A = a(818348),
    u = a(396574),
    p = a(855522),
    h = a(109236);
let I = "Footer Navigation",
    k = { BLURPLE: "Blurple", PRIMARY: "Primary" },
    m = (e) => {
        let { colorVariant: t, animate: a } = e;
        return (0, l.jsx)("svg", {
            className: (0, d.t)(h, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, l.jsx)("path", {
                className: (0, d.t)(h, "footerBackground", a ? "Play" : "Paused"),
                fill: "#1a1c1e",
                fillOpacity: "0.3",
                d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
        });
    };
class g extends r.PureComponent {
    static Variants = k;
    static defaultProps = { variant: k.PRIMARY, showWave: !0 };
    state = { animateBackground: !1, isMobile: null, token: null, isAppCompatible: !0 };
    ref = r.createRef();
    constructor(e) {
        super(e),
            null != e.locale && p.A.setLocale(e.locale),
            (s = (t) => (0, l.jsx)(_.A, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...t }));
    }
    componentDidMount() {
        this.setState({ token: (0, c.getToken)(), isAppCompatible: u.VP });
    }
    handleVisibility = (e) => {
        this.setState({ animateBackground: e });
    };
    renderAppButton(e) {
        if ("STATIC_RENDERER" === this.props.platform) return null;
        let {
                downloadLink: t,
                isMobile: a,
                mobileDownloadText: r,
                platform: i,
                variant: n,
                authRedirectTo: o,
            } = this.props,
            { isAppCompatible: c } = this.state;
        if (a)
            return (0, l.jsx)(s, {
                eventName: "Download App",
                data: { Platform: i, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                target: "_blank",
                className: (0, d.t)(h, "button", n),
                href: t,
                children: r,
            });
        if (!c)
            return (0, l.jsx)(s, {
                eventName: "Download App",
                data: { Platform: i, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                className: (0, d.t)(h, "button", n),
                href: A.Tk.DOWNLOAD,
                children: p.A.Messages.NAVIGATION_DOWNLOAD,
            });
        let _ = null != o ? A.Sb.REGISTER_WITH_REDIRECT(o) : A.Sb.REGISTER,
            N = p.A.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((_ = A.Sb.ME), (N = p.A.Messages.COMMON_OPEN_DISCORD)),
            (0, l.jsx)(s, {
                eventName: I,
                className: (0, d.t)(h, "button", this.props.variant),
                data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                href: _,
                children: N,
            })
        );
    }
    render() {
        let { variant: e, style: t, className: r, avoidRouter: i, showWave: c } = this.props,
            { animateBackground: _, token: u } = this.state,
            k = [
                {
                    title: p.A.Messages.NAVIGATION_PRODUCT,
                    routes: [
                        { link: A.Tk.DOWNLOAD, title: p.A.Messages.NAVIGATION_DOWNLOAD, tracking: "download" },
                        { link: A.Tk.BRANDING, title: p.A.Messages.NAVIGATION_BRANDING, tracking: "branding" },
                        { link: A.Tk.NITRO, title: p.A.Messages.NAVIGATION_NITRO, tracking: "nitro", external: !0 },
                    ],
                },
                {
                    title: p.A.Messages.NAVIGATION_DEVELOPERS,
                    routes: [
                        {
                            link: A.Tk.RICH_PRESENCE,
                            title: p.A.Messages.NAVIGATION_RICH_PRESENCE,
                            tracking: "rich_presence",
                        },
                        {
                            link: A.Tk.VERIFICATION,
                            title: p.A.Messages.NAVIGATION_VERIFICATION,
                            tracking: "verification",
                            external: !0,
                        },
                        {
                            link: A.qF.DEV_PORTAL_APPLICATIONS,
                            title: p.A.Messages.NAVIGATION_APPLICATIONS,
                            tracking: "developers",
                            external: !0,
                        },
                        {
                            link: A.qF.DEV_PORTAL_DOCUMENTATION,
                            title: p.A.Messages.NAVIGATION_DOCUMENTATION,
                            tracking: "documentation",
                            external: !0,
                        },
                    ],
                },
                {
                    title: p.A.Messages.NAVIGATION_RESOURCES,
                    routes: [
                        {
                            link: A.qF.HELP_AND_SUPPORT,
                            title: p.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                            tracking: "helpandsupport",
                            external: !0,
                        },
                        {
                            link: A.Tk.GUIDELINES,
                            title: p.A.Messages.NAVIGATION_GUIDELINES,
                            tracking: "guidelines",
                            external: !0,
                        },
                        {
                            link: A.qF.FEEDBACK,
                            title: p.A.Messages.NAVIGATION_FEEDBACK,
                            tracking: "feedback",
                            external: !0,
                        },
                        { link: A.Tk.TERMS, title: p.A.Messages.NAVIGATION_TERMS, tracking: "terms", external: !0 },
                        {
                            link: A.Tk.PRIVACY,
                            title: p.A.Messages.NAVIGATION_PRIVACY,
                            tracking: "privacy",
                            external: !0,
                        },
                        { link: A.Tk.SECURITY, title: p.A.Messages.NAVIGATION_SECURITY, tracking: "security" },
                        { link: A.qF.STATUS, title: p.A.Messages.NAVIGATION_STATUS, tracking: "status", external: !0 },
                        {
                            link: A.Tk.SAFETY_LANDING,
                            title: p.A.Messages.NAVIGATION_SAFETY_CENTER,
                            tracking: "safetycenter",
                            external: !0,
                        },
                    ],
                },
                {
                    title: p.A.Messages.NAVIGATION_COMPANY,
                    routes: [
                        { link: A.Tk.COMPANY, title: p.A.Messages.NAVIGATION_ABOUT, tracking: "about" },
                        { link: A.Tk.BLOG, title: p.A.Messages.NAVIGATION_BLOG, tracking: "blog", external: !0 },
                        { link: A.Tk.JOBS, title: p.A.Messages.NAVIGATION_JOBS, tracking: "join", external: !0 },
                    ],
                },
                {
                    title: p.A.Messages.NAVIGATION_MORE,
                    routes: [
                        {
                            link: A.Tk.PARTNERS,
                            title: p.A.Messages.NAVIGATION_PARTNERS,
                            tracking: "partners",
                            external: !0,
                        },
                        {
                            link: A.Tk.HYPESQUAD,
                            title: p.A.Messages.NAVIGATION_HYPESQUAD,
                            tracking: "hypesquad",
                            external: !0,
                        },
                        {
                            link: A.qF.PRESS_INQUIRIES,
                            title: p.A.Messages.NAVIGATION_PRESS_INQUIRIES,
                            tracking: "pressinquiries",
                            external: !0,
                        },
                        { link: A.Tk.OPEN_SOURCE, title: p.A.Messages.NAVIGATION_OPEN_SOURCE, tracking: "open_source" },
                    ],
                },
            ].map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, l.jsx)(
                              s,
                              {
                                  className: h.route,
                                  eventName: I,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title,
                              },
                              e.link || t,
                          )
                        : (0, l.jsx)(
                              N.A,
                              {
                                  avoidRouter: i,
                                  to: e.link,
                                  from: "footer_navigation",
                                  className: h.route,
                                  children: (0, l.jsx)(s, {
                                      tag: "span",
                                      eventName: I,
                                      data: { linkClicked: e.tracking },
                                      children: e.title,
                                  }),
                              },
                              e.link,
                          ),
                );
                return (0, l.jsxs)(
                    "div",
                    {
                        className: h.navigationSection,
                        children: [(0, l.jsx)("h3", { className: h.navigationHeader, children: e.title }), t],
                    },
                    e.title,
                );
            });
        return (0, l.jsx)(o.L, {
            innerRef: this.ref,
            onChange: this.handleVisibility,
            children: (0, l.jsxs)("footer", {
                ref: this.ref,
                className: n()((0, d.t)(h, "footer", e), r),
                style: t,
                children: [
                    c ? (0, l.jsx)(m, { colorVariant: e, animate: _ }) : null,
                    (0, l.jsxs)("div", {
                        className: h.footerContent,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.navigation,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: h.logoWrap,
                                        children: (0, l.jsx)(s, {
                                            className: h.logo,
                                            href: A.Tk.INDEX,
                                            eventName: I,
                                            data: { linkClicked: "logo" },
                                            children: (0, l.jsx)("img", {
                                                alt: p.A.Messages.NAVIGATION_HOME,
                                                src: a(611411),
                                            }),
                                        }),
                                    }),
                                    k,
                                ],
                            }),
                            (0, l.jsx)("div", { className: h.separator }),
                            (0, l.jsxs)("div", {
                                className: h.joinDiscord,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: h.stats,
                                        children: [
                                            (0, l.jsx)("h2", {
                                                className: h.readyToJoin,
                                                children: p.A.Messages.FOOTER_READY_TO_TRY_DISCORD,
                                            }),
                                            (0, l.jsx)("h3", {
                                                className: h.joinOtherPlayers,
                                                children: p.A.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                                                    num: A.sh,
                                                }),
                                            }),
                                        ],
                                    }),
                                    this.renderAppButton(u),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
