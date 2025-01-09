s.d(t, {
    a: function () {
        return A;
    }
}),
    s(47120),
    s(653041);
var a = s(200651),
    n = s(192379),
    r = s(557533),
    i = s.n(r),
    o = s(771950),
    l = s(860911),
    c = s(66037),
    d = s(787907),
    u = s(643103),
    p = s(34211),
    N = s(231338),
    h = s(436620),
    m = s(431138),
    f = s(330711),
    g = s(790730);
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
let _ = N.j_.MAIN_NAVIGATION_MENU,
    k = () => [
        {
            route: (0, o.L)(N.RK.TWITTER),
            linkClicked: 'twitter',
            alt: "Discord's Twitter",
            img: m.r.ASSET_SOCIAL_TWITTER
        },
        {
            route: N.fK.FACEBOOK_URL,
            linkClicked: 'facebook',
            alt: "Discord's Facebook",
            img: m.r.ASSET_SOCIAL_FACEBOOK
        },
        {
            route: N.fK.INSTAGRAM_URL,
            linkClicked: 'instagram',
            alt: "Discord's Instagram",
            img: m.r.ASSET_SOCIAL_INSTAGRAM
        }
    ];
class A extends n.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: h.KO });
    }
    render() {
        let { className: e, mainContentId: t, skipToContentLabel: s, onChangeLocale: n, TrackClick: r, avoidRouter: o } = this.props;
        return (0, a.jsxs)('header', {
            className: i()(g.header, e),
            children: [
                (0, a.jsxs)('nav', {
                    className: g.headerInner,
                    children: [
                        (0, a.jsxs)('div', {
                            className: g.headerLogo,
                            children: [
                                (0, a.jsx)(r, {
                                    tag: 'div',
                                    eventName: _,
                                    data: { linkClicked: 'logo' },
                                    children: (0, a.jsx)(c.Z, {
                                        avoidRouter: o,
                                        to: N.am.INDEX,
                                        from: N.j_.MAIN_NAVIGATION_MENU,
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
                                TrackClick: r,
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
                    r = (0, l.Ui)(s),
                    i = f.Z.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((r = N.$w.ME), (i = f.Z.Messages.NAVIGATION_OPEN)),
                    n
                        ? (0, a.jsx)(
                              'li',
                              {
                                  className: g.listItemInactive,
                                  children: (0, a.jsx)(t, {
                                      eventName: _,
                                      className: g.appButton,
                                      data: {
                                          linkClicked: e ? 'open' : 'login',
                                          googleAnalytics: !0
                                      },
                                      href: r,
                                      children: i
                                  })
                              },
                              'app-button'
                          )
                        : null
                );
            }),
            I(this, 'renderSocialMediaNav', () => {
                let { TrackClick: e } = this.props,
                    t = k().map((t) =>
                        (0, a.jsx)(
                            'li',
                            {
                                className: i()(g.listItemInactive, g.listItemSocialMedia),
                                children: (0, a.jsx)(e, {
                                    eventName: _,
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
