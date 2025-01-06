a.d(t, {
    o: function () {
        return m;
    }
}),
    a(47120);
var n,
    s = a(200651),
    i = a(192379),
    r = a(948789),
    l = a(66037),
    o = a(248108),
    c = a(231338),
    d = a(330711);
function u(e, t, a) {
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
let N = c.j_.MAIN_NAVIGATION_MENU,
    h = (e) => [
        {
            route: c.am.DOWNLOAD,
            linkClicked: 'download',
            title: d.Z.Messages.NAVIGATION_DOWNLOAD
        },
        {
            route: c.am.NITRO,
            linkClicked: 'nitro',
            title: d.Z.Messages.NAVIGATION_NITRO,
            external: !0
        },
        {
            route: c.am.JOBS,
            linkClicked: 'jobs',
            title: d.Z.Messages.NAVIGATION_JOBS,
            external: !0
        },
        {
            title: d.Z.Messages.NAVIGATION_DEVELOPERS,
            links: [
                {
                    route: c.am.RICH_PRESENCE,
                    linkClicked: 'rich_presence',
                    title: d.Z.Messages.NAVIGATION_RICH_PRESENCE
                },
                {
                    route: c.am.VERIFICATION,
                    linkClicked: 'verification',
                    title: d.Z.Messages.NAVIGATION_VERIFICATION,
                    external: !0
                },
                {
                    route: c.yX.DEV_PORTAL,
                    linkClicked: 'developers',
                    title: d.Z.Messages.NAVIGATION_DEVELOPER_PORTAL,
                    external: !0
                },
                {
                    route: c.yX.DEV_PORTAL_DOCUMENTATION,
                    linkClicked: 'documentation',
                    title: d.Z.Messages.NAVIGATION_DOCUMENTATION,
                    external: !0
                }
            ]
        },
        {
            title: d.Z.Messages.NAVIGATION_COMMUNITY,
            links: [
                {
                    route: c.am.OPEN_SOURCE,
                    linkClicked: 'open_source',
                    title: d.Z.Messages.NAVIGATION_OPEN_SOURCE
                },
                {
                    route: c.am.PARTNERS,
                    linkClicked: 'partners',
                    title: d.Z.Messages.NAVIGATION_PARTNERS,
                    external: !0
                },
                {
                    route: c.am.HYPESQUAD,
                    linkClicked: 'hypesquad',
                    title: d.Z.Messages.NAVIGATION_HYPESQUAD,
                    external: !0
                },
                {
                    route: c.am.GUIDELINES,
                    linkClicked: 'guidelines',
                    title: d.Z.Messages.NAVIGATION_GUIDELINES,
                    external: !0
                }
            ]
        },
        {
            title: d.Z.Messages.NAVIGATION_SUPPORT,
            links: [
                {
                    route: '//support.discord.com/hc/'.concat(e),
                    linkClicked: 'helpandsupport',
                    title: d.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                    external: !0
                },
                {
                    route: c.yX.STATUS,
                    linkClicked: 'status',
                    title: d.Z.Messages.NAVIGATION_STATUS,
                    external: !0
                },
                {
                    route: c.am.SAFETY_LANDING,
                    linkClicked: 'safetycenter',
                    title: d.Z.Messages.NAVIGATION_SAFETY_CENTER,
                    external: !0
                }
            ]
        }
    ];
class m extends (n = i.PureComponent) {
    render() {
        let e = (0, r.fQ)(this.context.router),
            { isMobile: t, isVisible: a, styles: n, TrackClick: i, avoidRouter: u } = this.props,
            { sectionShown: m } = this.state;
        return h(null != d.Z ? d.Z.getLocale().toLowerCase() : '').map((r) => {
            if (null != r.links)
                return (0, s.jsx)(
                    o.Z,
                    {
                        title: r.title,
                        links: r.links,
                        isOpen: m === r.title,
                        isMobile: t,
                        avoidRouter: u,
                        TrackClick: i,
                        onClose: this.closeSubNav,
                        onOpen: this.openSubNav
                    },
                    r.title
                );
            if (r.external && null != r.route)
                return (0, s.jsx)(
                    'li',
                    {
                        className: n.listItemInactive,
                        role: 'none',
                        children: (0, s.jsx)(i, {
                            className: n.mainNavLink,
                            eventName: N,
                            data: r.linkClicked ? { linkClicked: r.linkClicked } : {},
                            href: r.route,
                            rel: 'me',
                            children: r.title
                        })
                    },
                    'external_link_'.concat(r.route)
                );
            if (null != r.route)
                return (0, s.jsx)(
                    'li',
                    {
                        className: e(r.route) ? n.listItemActive : n.listItemInactive,
                        role: 'none',
                        children: (0, s.jsx)(l.Z, {
                            avoidRouter: u,
                            to: r.route,
                            from: c.j_.MAIN_NAVIGATION_MENU,
                            tabIndex: a ? 0 : -1,
                            role: 'menuitem',
                            children: (0, s.jsx)(i, {
                                tag: 'span',
                                className: n.mainNavLink,
                                eventName: N,
                                data: { linkClicked: r.linkClicked },
                                children: r.title
                            })
                        })
                    },
                    'link_'.concat(r.route)
                );
            return [];
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'state', { sectionShown: null }),
            u(this, 'closeSubNav', () => {
                let { sectionShown: e } = this.state;
                null !== e && this.setState({ sectionShown: null });
            }),
            u(this, 'openSubNav', (e) => {
                let { sectionShown: t } = this.state;
                t !== e && this.setState({ sectionShown: e });
            });
    }
}
u(m, 'defaultProps', {
    isMobile: !1,
    isVisible: !0
});
