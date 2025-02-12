s.d(t, { a: () => A }), s(47120), s(653041);
var a = s(200651),
    n = s(192379),
    i = s(557533),
    r = s.n(i),
    o = s(771950),
    l = s(860911),
    c = s(66037),
    d = s(787907),
    u = s(643103),
    p = s(34211),
    _ = s(231338),
    h = s(436620),
    N = s(431138),
    m = s(330711),
    g = s(270943);
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
let k = _.j_.MAIN_NAVIGATION_MENU,
    f = () => [
        {
            route: (0, o.L)(_.RK.TWITTER),
            linkClicked: 'twitter',
            alt: "Discord's Twitter",
            img: N.r.ASSET_SOCIAL_TWITTER
        },
        {
            route: _.fK.FACEBOOK_URL,
            linkClicked: 'facebook',
            alt: "Discord's Facebook",
            img: N.r.ASSET_SOCIAL_FACEBOOK
        },
        {
            route: _.fK.INSTAGRAM_URL,
            linkClicked: 'instagram',
            alt: "Discord's Instagram",
            img: N.r.ASSET_SOCIAL_INSTAGRAM
        }
    ];
class A extends n.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: h.KO });
    }
    render() {
        let { className: e, mainContentId: t, skipToContentLabel: s, onChangeLocale: n, TrackClick: i, avoidRouter: o } = this.props;
        return (0, a.jsxs)('header', {
            className: r()(g.header, e),
            children: [
                (0, a.jsxs)('nav', {
                    className: g.headerInner,
                    children: [
                        (0, a.jsxs)('div', {
                            className: g.headerLogo,
                            children: [
                                (0, a.jsx)(i, {
                                    tag: 'div',
                                    eventName: k,
                                    data: { linkClicked: 'logo' },
                                    children: (0, a.jsx)(c.Z, {
                                        avoidRouter: o,
                                        to: _.am.INDEX,
                                        from: _.j_.MAIN_NAVIGATION_MENU,
                                        children: (0, a.jsx)(d.O, {})
                                    })
                                }),
                                null != t
                                    ? (0, a.jsx)('a', {
                                          className: g.skipToContent,
                                          href: '#'.concat(t),
                                          children: s
                                      })
                                    : null
                            ]
                        }),
                        (0, a.jsx)('ul', {
                            className: g.headerNav,
                            children: (0, a.jsx)(p.o, {
                                avoidRouter: o,
                                TrackClick: i,
                                styles: g
                            })
                        }),
                        (0, a.jsxs)('ul', {
                            className: g.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, a.jsx)(u.p, { onChange: n })]
                        })
                    ]
                }),
                null != t &&
                    (0, a.jsx)('div', {
                        id: t,
                        tabIndex: -1
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { isAppCompatible: !0 }),
            I(this, 'getAppButton', () => {
                let { token: e, TrackClick: t, authRedirectTo: s } = this.props,
                    { isAppCompatible: n } = this.state,
                    i = (0, l.Ui)(s),
                    r = m.Z.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((i = _.$w.ME), (r = m.Z.Messages.NAVIGATION_OPEN)),
                    n
                        ? (0, a.jsx)(
                              'li',
                              {
                                  className: g.listItemInactive,
                                  children: (0, a.jsx)(t, {
                                      eventName: k,
                                      className: g.appButton,
                                      data: {
                                          linkClicked: e ? 'open' : 'login',
                                          googleAnalytics: !0
                                      },
                                      href: i,
                                      children: r
                                  })
                              },
                              'app-button'
                          )
                        : null
                );
            }),
            I(this, 'renderSocialMediaNav', () => {
                let { TrackClick: e } = this.props,
                    t = f().map((t) =>
                        (0, a.jsx)(
                            'li',
                            {
                                className: r()(g.listItemInactive, g.listItemSocialMedia),
                                children: (0, a.jsx)(e, {
                                    eventName: k,
                                    className: g.rightNavLink,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    target: '_blank',
                                    children: (0, a.jsx)('img', {
                                        src: t.img,
                                        alt: t.alt
                                    })
                                })
                            },
                            t.route
                        )
                    ),
                    s = this.getAppButton();
                return null != s && t.push(s), t;
            });
    }
}
