a.d(t, { o: () => h }), a(47120);
var n,
    s = a(200651),
    r = a(192379),
    l = a(948789),
    i = a(66037),
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
class h extends (n = r.PureComponent) {
    render() {
        let e = (0, l.f)(this.context.router),
            { isMobile: t, isVisible: a, styles: n, TrackClick: r, avoidRouter: u } = this.props,
            { sectionShown: h } = this.state;
        return _(null != d.Z ? d.Z.getLocale().toLowerCase() : '').map((l) =>
            null != l.links
                ? (0, s.jsx)(
                      o.Z,
                      {
                          title: l.title,
                          links: l.links,
                          isOpen: h === l.title,
                          isMobile: t,
                          avoidRouter: u,
                          TrackClick: r,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav
                      },
                      l.title
                  )
                : l.external && null != l.route
                  ? (0, s.jsx)(
                        'li',
                        {
                            className: n.listItemInactive,
                            role: 'none',
                            children: (0, s.jsx)(r, {
                                className: n.mainNavLink,
                                eventName: p,
                                data: l.linkClicked ? { linkClicked: l.linkClicked } : {},
                                href: l.route,
                                rel: 'me',
                                children: l.title
                            })
                        },
                        'external_link_'.concat(l.route)
                    )
                  : null != l.route
                    ? (0, s.jsx)(
                          'li',
                          {
                              className: e(l.route) ? n.listItemActive : n.listItemInactive,
                              role: 'none',
                              children: (0, s.jsx)(i.Z, {
                                  avoidRouter: u,
                                  to: l.route,
                                  from: c.j_.MAIN_NAVIGATION_MENU,
                                  tabIndex: a ? 0 : -1,
                                  role: 'menuitem',
                                  children: (0, s.jsx)(r, {
                                      tag: 'span',
                                      className: n.mainNavLink,
                                      eventName: p,
                                      data: { linkClicked: l.linkClicked },
                                      children: l.title
                                  })
                              })
                          },
                          'link_'.concat(l.route)
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
