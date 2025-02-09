s.d(t, { o: () => h }), s(47120);
var a,
    n = s(200651),
    i = s(192379),
    r = s(948789),
    o = s(66037),
    l = s(248108),
    c = s(231338),
    d = s(330711);
function u(e, t, s) {
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
let p = c.j_.MAIN_NAVIGATION_MENU,
    _ = (e) => [
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
class h extends (a = i.PureComponent) {
    render() {
        let e = (0, r.fQ)(this.context.router),
            { isMobile: t, isVisible: s, styles: a, TrackClick: i, avoidRouter: u } = this.props,
            { sectionShown: h } = this.state;
        return _(null != d.Z ? d.Z.getLocale().toLowerCase() : '').map((r) =>
            null != r.links
                ? (0, n.jsx)(
                      l.Z,
                      {
                          title: r.title,
                          links: r.links,
                          isOpen: h === r.title,
                          isMobile: t,
                          avoidRouter: u,
                          TrackClick: i,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav
                      },
                      r.title
                  )
                : r.external && null != r.route
                  ? (0, n.jsx)(
                        'li',
                        {
                            className: a.listItemInactive,
                            role: 'none',
                            children: (0, n.jsx)(i, {
                                className: a.mainNavLink,
                                eventName: p,
                                data: r.linkClicked ? { linkClicked: r.linkClicked } : {},
                                href: r.route,
                                rel: 'me',
                                children: r.title
                            })
                        },
                        'external_link_'.concat(r.route)
                    )
                  : null != r.route
                    ? (0, n.jsx)(
                          'li',
                          {
                              className: e(r.route) ? a.listItemActive : a.listItemInactive,
                              role: 'none',
                              children: (0, n.jsx)(o.Z, {
                                  avoidRouter: u,
                                  to: r.route,
                                  from: c.j_.MAIN_NAVIGATION_MENU,
                                  tabIndex: s ? 0 : -1,
                                  role: 'menuitem',
                                  children: (0, n.jsx)(i, {
                                      tag: 'span',
                                      className: a.mainNavLink,
                                      eventName: p,
                                      data: { linkClicked: r.linkClicked },
                                      children: r.title
                                  })
                              })
                          },
                          'link_'.concat(r.route)
                      )
                    : []
        );
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
u(h, 'defaultProps', {
    isMobile: !1,
    isVisible: !0
});
