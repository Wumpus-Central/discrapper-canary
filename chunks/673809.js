let s;
a.r(t), a.d(t, { default: () => eo });
var l = a(627968),
    r = a(64700),
    i = a(503698),
    n = a.n(i),
    o = a(230109),
    c = a(247775),
    d = a(23339);
function _(e, t) {
    for (var a = arguments.length, s = Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++) s[l - 2] = arguments[l];
    let r = s.reduce((e, t) => e + (0, d.$G)(t), ""),
        i = e[`${t}${r}`];
    return null == i ? "" : i;
}
class N extends r.PureComponent {
    static defaultProps = { tag: "a", data: {} };
    handleClick = (e) => {
        let { eventName: t, data: a, href: s, onClick: l, trackOutboundLink: r, track: i } = this.props;
        if (
            (a.googleAnalytics &&
                r &&
                (null != s
                    ? r(s)
                    : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")),
            l && l(e),
            !t)
        )
            return !1;
        i(t, a);
    };
    render() {
        let { tag: e, children: t, eventName: a, data: s, track: r, trackOutboundLink: i, ...n } = this.props;
        return null == e ? null : (0, l.jsx)(e, { ...n, onClick: this.handleClick, children: t });
    }
}
var A = a(313649),
    u = a(393285),
    p = a(968271);
class h extends r.Component {
    handleOnClick = () => {
        let { to: e, avoidRouter: t, onClick: a, history: s } = this.props;
        if (null != a) a();
        else if (t) {
            let t = "string" == typeof e ? (0, A.yJ)(e, null, void 0, s.location) : e,
                a = s.createHref(t);
            window.location = a;
        }
    };
    render() {
        let { to: e, from: t, isNavLink: a, children: s, tabIndex: r = 0, role: i, className: n } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let o = "string" == typeof e ? e : e.pathname,
            c = "string" == typeof e ? "" : e.hash,
            d = "string" == typeof e ? "" : e.search;
        return a
            ? (0, l.jsx)(u.k2, {
                  className: n,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: { pathname: o, hash: c, search: d, state: { previousLinkLocation: t } },
                  role: i,
                  children: s,
              })
            : (0, l.jsx)(u.N_, {
                  className: n,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: { pathname: o, hash: c, search: d, state: { previousLinkLocation: t } },
                  role: i,
                  children: s,
              });
    }
}
let I = (0, p.y)(h);
var k = a(818348),
    m = a(396574),
    g = a(855522),
    T = a(109236);
let O = "Footer Navigation",
    C = { BLURPLE: "Blurple", PRIMARY: "Primary" },
    x = (e) => {
        let { colorVariant: t, animate: a } = e;
        return (0, l.jsx)("svg", {
            className: _(T, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, l.jsx)("path", {
                className: _(T, "footerBackground", a ? "Play" : "Paused"),
                fill: "#1a1c1e",
                fillOpacity: "0.3",
                d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
        });
    };
class f extends r.PureComponent {
    static Variants = C;
    static defaultProps = { variant: C.PRIMARY, showWave: !0 };
    state = { animateBackground: !1, isMobile: null, token: null, isAppCompatible: !0 };
    ref = r.createRef();
    constructor(e) {
        super(e),
            null != e.locale && g.A.setLocale(e.locale),
            (s = (t) => (0, l.jsx)(N, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...t }));
    }
    componentDidMount() {
        this.setState({ token: (0, c.getToken)(), isAppCompatible: m.VP });
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
                className: _(T, "button", n),
                href: t,
                children: r,
            });
        if (!c)
            return (0, l.jsx)(s, {
                eventName: "Download App",
                data: { Platform: i, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                className: _(T, "button", n),
                href: k.Tk.DOWNLOAD,
                children: g.A.Messages.NAVIGATION_DOWNLOAD,
            });
        let d = null != o ? k.Sb.REGISTER_WITH_REDIRECT(o) : k.Sb.REGISTER,
            N = g.A.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = k.Sb.ME), (N = g.A.Messages.COMMON_OPEN_DISCORD)),
            (0, l.jsx)(s, {
                eventName: O,
                className: _(T, "button", this.props.variant),
                data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                href: d,
                children: N,
            })
        );
    }
    render() {
        let { variant: e, style: t, className: r, avoidRouter: i, showWave: c } = this.props,
            { animateBackground: d, token: N } = this.state,
            A = [
                {
                    title: g.A.Messages.NAVIGATION_PRODUCT,
                    routes: [
                        { link: k.Tk.DOWNLOAD, title: g.A.Messages.NAVIGATION_DOWNLOAD, tracking: "download" },
                        { link: k.Tk.BRANDING, title: g.A.Messages.NAVIGATION_BRANDING, tracking: "branding" },
                        { link: k.Tk.NITRO, title: g.A.Messages.NAVIGATION_NITRO, tracking: "nitro", external: !0 },
                    ],
                },
                {
                    title: g.A.Messages.NAVIGATION_DEVELOPERS,
                    routes: [
                        {
                            link: k.Tk.RICH_PRESENCE,
                            title: g.A.Messages.NAVIGATION_RICH_PRESENCE,
                            tracking: "rich_presence",
                        },
                        {
                            link: k.Tk.VERIFICATION,
                            title: g.A.Messages.NAVIGATION_VERIFICATION,
                            tracking: "verification",
                            external: !0,
                        },
                        {
                            link: k.qF.DEV_PORTAL_APPLICATIONS,
                            title: g.A.Messages.NAVIGATION_APPLICATIONS,
                            tracking: "developers",
                            external: !0,
                        },
                        {
                            link: k.qF.DEV_PORTAL_DOCUMENTATION,
                            title: g.A.Messages.NAVIGATION_DOCUMENTATION,
                            tracking: "documentation",
                            external: !0,
                        },
                    ],
                },
                {
                    title: g.A.Messages.NAVIGATION_RESOURCES,
                    routes: [
                        {
                            link: k.qF.HELP_AND_SUPPORT,
                            title: g.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                            tracking: "helpandsupport",
                            external: !0,
                        },
                        {
                            link: k.Tk.GUIDELINES,
                            title: g.A.Messages.NAVIGATION_GUIDELINES,
                            tracking: "guidelines",
                            external: !0,
                        },
                        {
                            link: k.qF.FEEDBACK,
                            title: g.A.Messages.NAVIGATION_FEEDBACK,
                            tracking: "feedback",
                            external: !0,
                        },
                        { link: k.Tk.TERMS, title: g.A.Messages.NAVIGATION_TERMS, tracking: "terms", external: !0 },
                        {
                            link: k.Tk.PRIVACY,
                            title: g.A.Messages.NAVIGATION_PRIVACY,
                            tracking: "privacy",
                            external: !0,
                        },
                        { link: k.Tk.SECURITY, title: g.A.Messages.NAVIGATION_SECURITY, tracking: "security" },
                        { link: k.qF.STATUS, title: g.A.Messages.NAVIGATION_STATUS, tracking: "status", external: !0 },
                        {
                            link: k.Tk.SAFETY_LANDING,
                            title: g.A.Messages.NAVIGATION_SAFETY_CENTER,
                            tracking: "safetycenter",
                            external: !0,
                        },
                    ],
                },
                {
                    title: g.A.Messages.NAVIGATION_COMPANY,
                    routes: [
                        { link: k.Tk.COMPANY, title: g.A.Messages.NAVIGATION_ABOUT, tracking: "about" },
                        { link: k.Tk.BLOG, title: g.A.Messages.NAVIGATION_BLOG, tracking: "blog", external: !0 },
                        { link: k.Tk.JOBS, title: g.A.Messages.NAVIGATION_JOBS, tracking: "join", external: !0 },
                    ],
                },
                {
                    title: g.A.Messages.NAVIGATION_MORE,
                    routes: [
                        {
                            link: k.Tk.PARTNERS,
                            title: g.A.Messages.NAVIGATION_PARTNERS,
                            tracking: "partners",
                            external: !0,
                        },
                        {
                            link: k.Tk.HYPESQUAD,
                            title: g.A.Messages.NAVIGATION_HYPESQUAD,
                            tracking: "hypesquad",
                            external: !0,
                        },
                        {
                            link: k.qF.PRESS_INQUIRIES,
                            title: g.A.Messages.NAVIGATION_PRESS_INQUIRIES,
                            tracking: "pressinquiries",
                            external: !0,
                        },
                        { link: k.Tk.OPEN_SOURCE, title: g.A.Messages.NAVIGATION_OPEN_SOURCE, tracking: "open_source" },
                    ],
                },
            ].map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, l.jsx)(
                              s,
                              {
                                  className: T.route,
                                  eventName: O,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title,
                              },
                              e.link || t,
                          )
                        : (0, l.jsx)(
                              I,
                              {
                                  avoidRouter: i,
                                  to: e.link,
                                  from: "footer_navigation",
                                  className: T.route,
                                  children: (0, l.jsx)(s, {
                                      tag: "span",
                                      eventName: O,
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
                        className: T.navigationSection,
                        children: [(0, l.jsx)("h3", { className: T.navigationHeader, children: e.title }), t],
                    },
                    e.title,
                );
            });
        return (0, l.jsx)(o.L, {
            innerRef: this.ref,
            onChange: this.handleVisibility,
            children: (0, l.jsxs)("footer", {
                ref: this.ref,
                className: n()(_(T, "footer", e), r),
                style: t,
                children: [
                    c ? (0, l.jsx)(x, { colorVariant: e, animate: d }) : null,
                    (0, l.jsxs)("div", {
                        className: T.footerContent,
                        children: [
                            (0, l.jsxs)("div", {
                                className: T.navigation,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: T.logoWrap,
                                        children: (0, l.jsx)(s, {
                                            className: T.logo,
                                            href: k.Tk.INDEX,
                                            eventName: O,
                                            data: { linkClicked: "logo" },
                                            children: (0, l.jsx)("img", {
                                                alt: g.A.Messages.NAVIGATION_HOME,
                                                src: a(611411),
                                            }),
                                        }),
                                    }),
                                    A,
                                ],
                            }),
                            (0, l.jsx)("div", { className: T.separator }),
                            (0, l.jsxs)("div", {
                                className: T.joinDiscord,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: T.stats,
                                        children: [
                                            (0, l.jsx)("h2", {
                                                className: T.readyToJoin,
                                                children: g.A.Messages.FOOTER_READY_TO_TRY_DISCORD,
                                            }),
                                            (0, l.jsx)("h3", {
                                                className: T.joinOtherPlayers,
                                                children: g.A.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                                                    num: k.sh,
                                                }),
                                            }),
                                        ],
                                    }),
                                    this.renderAppButton(N),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
a(321073);
var v = a(323125),
    E = a(946015),
    L = a(1947);
class R extends r.PureComponent {
    render() {
        return (0, l.jsxs)(E.s, {
            wrap: E.s.Wrap.NO_WRAP,
            children: [
                (0, l.jsx)(E.s.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, l.jsxs)("svg", {
                        className: L.wI,
                        viewBox: "0 0 33 36",
                        children: [
                            (0, l.jsx)("ellipse", { cx: "19.6", cy: "17.1", rx: "1.9", ry: "2" }),
                            (0, l.jsx)("ellipse", { cx: "12.8", cy: "17.1", rx: "1.9", ry: "2" }),
                            (0, l.jsx)("path", {
                                d: "M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z",
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(E.s.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, l.jsx)("svg", {
                        className: L.NW,
                        viewBox: "0 0 98 36",
                        children: (0, l.jsx)("path", {
                            d: "M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z",
                        }),
                    }),
                }),
            ],
        });
    }
}
let S = {
    ASSET_SOCIAL_TWITTER: a(412126),
    ASSET_SOCIAL_FACEBOOK: a(681713),
    ASSET_SOCIAL_INSTAGRAM: a(368531),
    ICON_TRANSLATE: a(835691),
    ICON_ARROW_DOWN: a(616327),
    ASSET_LOGO_DISCORD_SVG: a(511749),
};
var b = a(773977);
class M extends r.PureComponent {
    state = { languages: g.A.getLanguages().filter((e) => e.enabled), current: g.A.getLocaleInfo(), isOpen: !1 };
    componentDidMount() {
        this.callChangeLocale(g.A.getLocale());
    }
    setLocale = (e) => {
        null != g.A && (g.A.setLocale(e), this.callChangeLocale(e));
    };
    callChangeLocale = (e) => {
        let { onChange: t } = this.props;
        null != t && t(e);
    };
    open = () => {
        this.setState({ isOpen: !0 });
    };
    close = () => {
        this.setState({ isOpen: !1 });
    };
    toggle = () => {
        let { isOpen: e } = this.state;
        this.setState({ isOpen: !e });
    };
    render() {
        let { isOpen: e, languages: t, current: s } = this.state,
            { className: r } = this.props,
            i = null;
        return (
            null != t &&
                (i = t
                    .sort((e, t) => (e.code < t.code ? -1 : +(e.code > t.code)))
                    .map((e) => {
                        let t = (function (e) {
                                try {
                                    return a(579832)(`./${e}.png`);
                                } catch (e) {
                                    return null;
                                }
                            })(e.code),
                            r = () => this.setLocale(e.code);
                        return null == t
                            ? null
                            : (0, l.jsxs)(
                                  "li",
                                  {
                                      className: _(b, "locale", null != s && e.code === s.code ? "Current" : null),
                                      onClick: r,
                                      children: [
                                          (0, l.jsx)("img", { className: b.localeImage, src: t, alt: e.name }),
                                          e.name,
                                      ],
                                  },
                                  e.code,
                              );
                    })),
            (0, l.jsxs)("div", {
                className: n()(b.localePicker, r),
                onMouseEnter: this.open,
                onMouseLeave: this.close,
                onClick: this.toggle,
                children: [
                    (0, l.jsxs)(E.s, {
                        align: E.s.Align.CENTER,
                        className: _(b, "opener", e ? "Open" : null),
                        children: [
                            (0, l.jsx)("span", { className: b.line }),
                            (0, l.jsx)("img", { className: b.localeIcon, src: S.ICON_TRANSLATE, alt: "Choose Locale" }),
                            (0, l.jsx)("img", { className: b.arrowIcon, src: S.ICON_ARROW_DOWN, alt: "Open Locale" }),
                        ],
                    }),
                    (0, l.jsx)("ul", { className: _(b, "localeList", e ? "Open" : "Closed"), children: i }),
                ],
            })
        );
    }
}
var j = a(877227),
    P = a(393163);
let V = k.sE.MAIN_NAVIGATION_MENU;
function G(e) {
    let { isOpen: t, dropdownLinks: a, TrackClick: s, avoidRouter: r, id: i, "aria-label": n } = e,
        o = (0, j.dI)({ history: (0, p.W6)() }),
        c = a.map((e, t) =>
            e.divider
                ? (0, l.jsx)("hr", { className: P.divider }, `divider-${t}`)
                : e.external
                  ? (0, l.jsx)(
                        "li",
                        {
                            className: P.moreListItemInactive,
                            children: (0, l.jsx)(s, {
                                className: P.moreListLink,
                                eventName: V,
                                data: { linkClicked: e.linkClicked },
                                href: e.route,
                                rel: "me",
                                children: (0, l.jsx)("span", { className: P.moreListLinkCopy, children: e.title }),
                            }),
                        },
                        e.route,
                    )
                  : (0, l.jsx)(
                        "li",
                        {
                            className: _(P, "moreListItem", o(e.route) ? "Active" : "Inactive"),
                            children: (0, l.jsx)(I, {
                                avoidRouter: r,
                                className: P.moreListLink,
                                to: e.route,
                                from: k.sE.MAIN_NAVIGATION_MENU,
                                role: "menuitem",
                                children: (0, l.jsx)(s, {
                                    tag: "span",
                                    className: P.moreListLinkCopy,
                                    eventName: V,
                                    data: { linkClicked: e.linkClicked },
                                    children: e.title,
                                }),
                            }),
                        },
                        e.route,
                    ),
        );
    return (0, l.jsx)("ul", {
        id: i,
        className: _(P, "moreList", t ? "Open" : "Closed"),
        "aria-label": n,
        children: c,
    });
}
var D = a(552524);
let y = k.sE.MAIN_NAVIGATION_MENU;
function B(e) {
    let { TrackClick: t, title: a, links: s, onClose: i, onOpen: n, isOpen: o = !1, isMobile: c, avoidRouter: d } = e,
        _ = (0, j.dI)({ history: (0, p.W6)() }),
        N = r.useId(),
        A = () => i(),
        u = () => n(a),
        h = () => (o ? i() : n(a)),
        m =
            c && o
                ? (0, l.jsx)("ul", {
                      className: D.Er,
                      id: N,
                      children: s.map((e) =>
                          e.external
                              ? (0, l.jsx)(
                                    "li",
                                    {
                                        className: D.ni,
                                        children: (0, l.jsx)(t, {
                                            eventName: y,
                                            className: D.qz,
                                            data: { linkClicked: `mobile-${e.linkClicked}` },
                                            rel: "me",
                                            href: e.route,
                                            children: e.title,
                                        }),
                                    },
                                    e.route,
                                )
                              : (0, l.jsx)(
                                    "li",
                                    {
                                        className: _(e.route) ? D.wL : D.ni,
                                        children: (0, l.jsx)(I, {
                                            avoidRouter: d,
                                            to: e.route,
                                            from: k.sE.MAIN_NAVIGATION_MENU,
                                            children: (0, l.jsx)(t, {
                                                className: D.qz,
                                                tag: "span",
                                                eventName: y,
                                                data: { linkClicked: `mobile-${e.linkClicked}` },
                                                children: e.title,
                                            }),
                                        }),
                                    },
                                    e.route,
                                ),
                      ),
                  })
                : null;
    return c
        ? (0, l.jsxs)(
              "li",
              {
                  className: D.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: h,
                  onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h());
                  },
                  children: [
                      (0, l.jsxs)(
                          "span",
                          {
                              className: D.DC,
                              "aria-label": `Open ${a} Nav`,
                              "aria-expanded": o,
                              "aria-controls": N,
                              "aria-haspopup": "true",
                              role: "menuitem",
                              tabIndex: 0,
                              children: [
                                  a,
                                  (0, l.jsx)("img", { src: S.ICON_ARROW_DOWN, className: D.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      m,
                  ],
              },
              `dropdown_${a}`,
          )
        : (0, l.jsxs)(
              "li",
              {
                  role: "none",
                  tabIndex: -1,
                  onFocus: u,
                  onBlur: A,
                  onMouseEnter: u,
                  onMouseLeave: A,
                  className: D.pX,
                  children: [
                      (0, l.jsxs)(
                          "span",
                          {
                              className: D.Bc,
                              role: "menuitem",
                              tabIndex: 0,
                              "aria-haspopup": "true",
                              "aria-expanded": o,
                              "aria-controls": N,
                              children: [
                                  a,
                                  (0, l.jsx)("img", { src: S.ICON_ARROW_DOWN, className: D.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      (0, l.jsx)(G, {
                          id: N,
                          avoidRouter: d,
                          TrackClick: t,
                          isOpen: o,
                          dropdownLinks: s,
                          "aria-label": a,
                      }),
                  ],
              },
              `dropdown_${a}`,
          );
}
let w = k.sE.MAIN_NAVIGATION_MENU;
class U extends r.PureComponent {
    static defaultProps = { isMobile: !1, isVisible: !0 };
    state = { sectionShown: null };
    closeSubNav = () => {
        let { sectionShown: e } = this.state;
        null !== e && this.setState({ sectionShown: null });
    };
    openSubNav = (e) => {
        let { sectionShown: t } = this.state;
        t !== e && this.setState({ sectionShown: e });
    };
    render() {
        let e,
            t = (0, j.dI)(this.context.router),
            { isMobile: a, isVisible: s, styles: r, TrackClick: i, avoidRouter: n } = this.props,
            { sectionShown: o } = this.state;
        return ((e = null != g.A ? g.A.getLocale().toLowerCase() : ""),
        [
            { route: k.Tk.DOWNLOAD, linkClicked: "download", title: g.A.Messages.NAVIGATION_DOWNLOAD },
            { route: k.Tk.NITRO, linkClicked: "nitro", title: g.A.Messages.NAVIGATION_NITRO, external: !0 },
            { route: k.Tk.JOBS, linkClicked: "jobs", title: g.A.Messages.NAVIGATION_JOBS, external: !0 },
            {
                title: g.A.Messages.NAVIGATION_DEVELOPERS,
                links: [
                    {
                        route: k.Tk.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: g.A.Messages.NAVIGATION_RICH_PRESENCE,
                    },
                    {
                        route: k.Tk.VERIFICATION,
                        linkClicked: "verification",
                        title: g.A.Messages.NAVIGATION_VERIFICATION,
                        external: !0,
                    },
                    {
                        route: k.qF.DEV_PORTAL,
                        linkClicked: "developers",
                        title: g.A.Messages.NAVIGATION_DEVELOPER_PORTAL,
                        external: !0,
                    },
                    {
                        route: k.qF.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: g.A.Messages.NAVIGATION_DOCUMENTATION,
                        external: !0,
                    },
                ],
            },
            {
                title: g.A.Messages.NAVIGATION_COMMUNITY,
                links: [
                    { route: k.Tk.OPEN_SOURCE, linkClicked: "open_source", title: g.A.Messages.NAVIGATION_OPEN_SOURCE },
                    {
                        route: k.Tk.PARTNERS,
                        linkClicked: "partners",
                        title: g.A.Messages.NAVIGATION_PARTNERS,
                        external: !0,
                    },
                    {
                        route: k.Tk.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: g.A.Messages.NAVIGATION_HYPESQUAD,
                        external: !0,
                    },
                    {
                        route: k.Tk.GUIDELINES,
                        linkClicked: "guidelines",
                        title: g.A.Messages.NAVIGATION_GUIDELINES,
                        external: !0,
                    },
                ],
            },
            {
                title: g.A.Messages.NAVIGATION_SUPPORT,
                links: [
                    {
                        route: `//support.discord.com/hc/${e}`,
                        linkClicked: "helpandsupport",
                        title: g.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                        external: !0,
                    },
                    { route: k.qF.STATUS, linkClicked: "status", title: g.A.Messages.NAVIGATION_STATUS, external: !0 },
                    {
                        route: k.Tk.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: g.A.Messages.NAVIGATION_SAFETY_CENTER,
                        external: !0,
                    },
                ],
            },
        ]).map((e) =>
            null != e.links
                ? (0, l.jsx)(
                      B,
                      {
                          title: e.title,
                          links: e.links,
                          isOpen: o === e.title,
                          isMobile: a,
                          avoidRouter: n,
                          TrackClick: i,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav,
                      },
                      e.title,
                  )
                : e.external && null != e.route
                  ? (0, l.jsx)(
                        "li",
                        {
                            className: r.listItemInactive,
                            role: "none",
                            children: (0, l.jsx)(i, {
                                className: r.mainNavLink,
                                eventName: w,
                                data: e.linkClicked ? { linkClicked: e.linkClicked } : {},
                                href: e.route,
                                rel: "me",
                                children: e.title,
                            }),
                        },
                        `external_link_${e.route}`,
                    )
                  : null != e.route
                    ? (0, l.jsx)(
                          "li",
                          {
                              className: t(e.route) ? r.listItemActive : r.listItemInactive,
                              role: "none",
                              children: (0, l.jsx)(I, {
                                  avoidRouter: n,
                                  to: e.route,
                                  from: k.sE.MAIN_NAVIGATION_MENU,
                                  tabIndex: s ? 0 : -1,
                                  role: "menuitem",
                                  children: (0, l.jsx)(i, {
                                      tag: "span",
                                      className: r.mainNavLink,
                                      eventName: w,
                                      data: { linkClicked: e.linkClicked },
                                      children: e.title,
                                  }),
                              }),
                          },
                          `link_${e.route}`,
                      )
                    : [],
        );
    }
}
var H = a(775684);
let W = k.sE.MAIN_NAVIGATION_MENU;
class F extends r.PureComponent {
    state = { isAppCompatible: !0 };
    componentDidMount() {
        this.setState({ isAppCompatible: m.VP });
    }
    getAppButton = () => {
        let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
            { isAppCompatible: s } = this.state,
            r = (0, v.T2)(a),
            i = g.A.Messages.NAVIGATION_LOGIN;
        return (
            null != e && ((r = k.Sb.ME), (i = g.A.Messages.NAVIGATION_OPEN)),
            s
                ? (0, l.jsx)(
                      "li",
                      {
                          className: H.listItemInactive,
                          children: (0, l.jsx)(t, {
                              eventName: W,
                              className: H.appButton,
                              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                              href: r,
                              children: i,
                          }),
                      },
                      "app-button",
                  )
                : null
        );
    };
    renderSocialMediaNav = () => {
        var e;
        let t,
            { TrackClick: a } = this.props,
            s = [
                {
                    route: ((e = k.Pq.TWITTER), (t = g.A.getLocale().toLowerCase()) in e ? e[t] : e.default),
                    linkClicked: "twitter",
                    alt: "Discord's Twitter",
                    img: S.ASSET_SOCIAL_TWITTER,
                },
                {
                    route: k.w7.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: S.ASSET_SOCIAL_FACEBOOK,
                },
                {
                    route: k.w7.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: S.ASSET_SOCIAL_INSTAGRAM,
                },
            ].map((e) =>
                (0, l.jsx)(
                    "li",
                    {
                        className: n()(H.listItemInactive, H.listItemSocialMedia),
                        children: (0, l.jsx)(a, {
                            eventName: W,
                            className: H.rightNavLink,
                            data: { linkClicked: e.linkClicked },
                            href: e.route,
                            rel: "me",
                            target: "_blank",
                            children: (0, l.jsx)("img", { src: e.img, alt: e.alt }),
                        }),
                    },
                    e.route,
                ),
            ),
            r = this.getAppButton();
        return null != r && s.push(r), s;
    };
    render() {
        let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            onChangeLocale: s,
            TrackClick: r,
            avoidRouter: i,
        } = this.props;
        return (0, l.jsxs)("header", {
            className: n()(H.header, e),
            children: [
                (0, l.jsxs)("nav", {
                    className: H.headerInner,
                    children: [
                        (0, l.jsxs)("div", {
                            className: H.headerLogo,
                            children: [
                                (0, l.jsx)(r, {
                                    tag: "div",
                                    eventName: W,
                                    data: { linkClicked: "logo" },
                                    children: (0, l.jsx)(I, {
                                        avoidRouter: i,
                                        to: k.Tk.INDEX,
                                        from: k.sE.MAIN_NAVIGATION_MENU,
                                        children: (0, l.jsx)(R, {}),
                                    }),
                                }),
                                null != t
                                    ? (0, l.jsx)("a", { className: H.skipToContent, href: `#${t}`, children: a })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("ul", {
                            className: H.headerNav,
                            children: (0, l.jsx)(U, { avoidRouter: i, TrackClick: r, styles: H }),
                        }),
                        (0, l.jsxs)("ul", {
                            className: H.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, l.jsx)(M, { onChange: s })],
                        }),
                    ],
                }),
                null != t && (0, l.jsx)("div", { id: t, tabIndex: -1 }),
            ],
        });
    }
}
var Y = a(359459),
    q = a(900610);
let Z = k.sE.MAIN_NAVIGATION_MENU;
function $(e) {
    let {
            className: t,
            TrackClick: a,
            onChangeLocale: s,
            avoidRouter: i,
            openNavAriaLabel: o,
            hideNavAriaLabel: c,
        } = e,
        d = r.useId(),
        [_, N] = r.useState(!1),
        A = r.useCallback(() => N(!_), [_]),
        u = r.useCallback(
            (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), _ && A());
            },
            [_, A],
        );
    return (
        r.useEffect(() => (window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u)), [u]),
        (0, l.jsx)("header", {
            className: n()(q.header, t),
            children: (0, l.jsxs)("nav", {
                className: q.headerInner,
                children: [
                    (0, l.jsx)(a, {
                        tag: "div",
                        eventName: Z,
                        className: q.headerLogo,
                        data: { linkClicked: "logo" },
                        children: (0, l.jsx)(I, {
                            avoidRouter: i,
                            className: q.logoWrapper,
                            to: k.Tk.INDEX,
                            from: k.sE.MAIN_NAVIGATION_MENU,
                            children: (0, l.jsx)("img", {
                                className: q.logo,
                                src: S.ASSET_LOGO_DISCORD_SVG,
                                alt: "Discord",
                                itemProp: "logo",
                            }),
                        }),
                    }),
                    (0, l.jsx)(a, {
                        tag: "div",
                        className: q.hamburgerButton,
                        eventName: Z,
                        data: { linkClicked: "mobile-menu" },
                        children: (0, l.jsx)(Y._, {
                            open: _,
                            "aria-haspopup": "true",
                            "aria-label": _ ? c : o,
                            "aria-expanded": _,
                            "aria-controls": d,
                            onClick: A,
                        }),
                    }),
                    (0, l.jsxs)("ul", {
                        className: _ ? q.headerNavOpen : q.headerNav,
                        children: [
                            (0, l.jsx)(U, { avoidRouter: i, TrackClick: a, styles: q, isMobile: !0, isVisible: _ }),
                            (0, l.jsx)(M, { onChange: s }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var J = a(360292);
let K = null;
class Q extends r.PureComponent {
    constructor(e) {
        super(e),
            null != e.locale && g.A.setLocale(e.locale),
            (K = (t) => (0, l.jsx)(N, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...t }));
    }
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: s,
            mobileClassName: i,
            avoidRouter: o,
            authRedirectTo: c,
            openNavAriaLabel: d,
            hideNavAriaLabel: _,
            skipToContentLabel: N,
        } = this.props;
        return null == K
            ? null
            : (0, l.jsxs)(r.Fragment, {
                  children: [
                      (0, l.jsx)(F, {
                          className: n()(J.q, t),
                          TrackClick: K,
                          token: e,
                          avoidRouter: o,
                          authRedirectTo: c,
                          onChangeLocale: a,
                          mainContentId: s,
                          skipToContentLabel: N,
                      }),
                      (0, l.jsx)($, {
                          className: n()(J.O, i),
                          token: e,
                          avoidRouter: o,
                          TrackClick: K,
                          onChangeLocale: a,
                          openNavAriaLabel: d,
                          hideNavAriaLabel: _,
                      }),
                  ],
              });
    }
}
class z extends r.Component {
    scrollRef = r.createRef();
    scrollTo = (e) => {
        null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
    };
    getScrollTop = () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop);
    componentDidUpdate(e) {
        let {
            props: { location: t, shouldScrollToTop: a },
            scrollRef: { current: s },
        } = this;
        null != s && t !== e.location && (null != a ? a(this.props) && (s.scrollTop = 0) : (s.scrollTop = 0));
    }
    render() {
        let { className: e, render: t } = this.props;
        return (0, l.jsx)("div", { ref: this.scrollRef, className: e, children: t(this.scrollTo, this.getScrollTop) });
    }
}
let X = (0, p.y)(z);
var ee = a(17928),
    et = a(817281),
    ea = a(773669),
    es = a(954571),
    el = a(652215),
    er = a(985018),
    ei = a(212515);
class en extends r.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return (
            t.pathname.startsWith(el.BVt.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(el.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
        );
    }
    handleHeaderLocaleChange = (e) => {
        e !== this.props.locale && et.Ay.overrideLocale(e);
    };
    render() {
        let { location: e, className: t, render: a, locale: s } = this.props;
        return (0, l.jsx)(X, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, i) =>
                (0, l.jsxs)(r.Fragment, {
                    children: [
                        (0, l.jsx)(Q, {
                            avoidRouter: !0,
                            locale: s,
                            authRedirectTo: e.pathname,
                            track: es.default.track,
                            className: ei.Kn,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: ei.Kn,
                            openNavAriaLabel: er.intl.string(er.t.Fs9k3K),
                            hideNavAriaLabel: er.intl.string(er.t.AbfyHI),
                            skipToContentLabel: er.intl.string(er.t["18gavA"]),
                        }),
                        a(t, i),
                        (0, l.jsx)(f, {
                            locale: s,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: es.default.track,
                            className: ei.wn,
                        }),
                    ],
                }),
        });
    }
}
let eo = ee.Ay.connectStores([ea.default], () => ({ locale: ea.default.locale }))(en);
