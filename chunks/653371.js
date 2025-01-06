a.d(t, {
    a: function () {
        return f;
    }
}),
    a(47120),
    a(653041);
var n = a(200651),
    s = a(192379),
    i = a(557533),
    r = a.n(i),
    l = a(771950),
    o = a(860911),
    c = a(66037),
    d = a(787907),
    u = a(643103),
    N = a(34211),
    h = a(231338),
    m = a(436620),
    p = a(431138),
    I = a(330711),
    _ = a(790730);
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
let A = h.j_.MAIN_NAVIGATION_MENU,
    g = () => [
        {
            route: (0, l.L)(h.RK.TWITTER),
            linkClicked: 'twitter',
            alt: "Discord's Twitter",
            img: p.r.ASSET_SOCIAL_TWITTER
        },
        {
            route: h.fK.FACEBOOK_URL,
            linkClicked: 'facebook',
            alt: "Discord's Facebook",
            img: p.r.ASSET_SOCIAL_FACEBOOK
        },
        {
            route: h.fK.INSTAGRAM_URL,
            linkClicked: 'instagram',
            alt: "Discord's Instagram",
            img: p.r.ASSET_SOCIAL_INSTAGRAM
        }
    ];
class f extends s.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: m.KO });
    }
    render() {
        let { className: e, mainContentId: t, skipToContentLabel: a, onChangeLocale: s, TrackClick: i, avoidRouter: l } = this.props;
        return (0, n.jsxs)('header', {
            className: r()(_.header, e),
            children: [
                (0, n.jsxs)('nav', {
                    className: _.headerInner,
                    children: [
                        (0, n.jsxs)('div', {
                            className: _.headerLogo,
                            children: [
                                (0, n.jsx)(i, {
                                    tag: 'div',
                                    eventName: A,
                                    data: { linkClicked: 'logo' },
                                    children: (0, n.jsx)(c.Z, {
                                        avoidRouter: l,
                                        to: h.am.INDEX,
                                        from: h.j_.MAIN_NAVIGATION_MENU,
                                        children: (0, n.jsx)(d.O, {})
                                    })
                                }),
                                null != t
                                    ? (0, n.jsx)('a', {
                                          className: _.skipToContent,
                                          href: '#'.concat(t),
                                          children: a
                                      })
                                    : null
                            ]
                        }),
                        (0, n.jsx)('ul', {
                            className: _.headerNav,
                            children: (0, n.jsx)(N.o, {
                                avoidRouter: l,
                                TrackClick: i,
                                styles: _
                            })
                        }),
                        (0, n.jsxs)('ul', {
                            className: _.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, n.jsx)(u.p, { onChange: s })]
                        })
                    ]
                }),
                null != t &&
                    (0, n.jsx)('div', {
                        id: t,
                        tabIndex: -1
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', { isAppCompatible: !0 }),
            k(this, 'getAppButton', () => {
                let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
                    { isAppCompatible: s } = this.state,
                    i = (0, o.Ui)(a),
                    r = I.Z.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((i = h.$w.ME), (r = I.Z.Messages.NAVIGATION_OPEN)),
                    s
                        ? (0, n.jsx)(
                              'li',
                              {
                                  className: _.listItemInactive,
                                  children: (0, n.jsx)(t, {
                                      eventName: A,
                                      className: _.appButton,
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
            k(this, 'renderSocialMediaNav', () => {
                let { TrackClick: e } = this.props,
                    t = g().map((t) =>
                        (0, n.jsx)(
                            'li',
                            {
                                className: r()(_.listItemInactive, _.listItemSocialMedia),
                                children: (0, n.jsx)(e, {
                                    eventName: A,
                                    className: _.rightNavLink,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    target: '_blank',
                                    children: (0, n.jsx)('img', {
                                        src: t.img,
                                        alt: t.alt
                                    })
                                })
                            },
                            t.route
                        )
                    ),
                    a = this.getAppButton();
                return null != a && t.push(a), t;
            });
    }
}
