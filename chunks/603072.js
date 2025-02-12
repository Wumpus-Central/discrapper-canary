t.r(n), t.d(n, { default: () => R }), t(47120);
var l = t(200651),
    i = t(192379),
    a = t(120356),
    r = t.n(a),
    o = t(442837),
    s = t(704215),
    d = t(692547),
    c = t(481060),
    u = t(111028),
    m = t(252618),
    h = t(605236),
    x = t(473403),
    _ = t(984370),
    p = t(216306),
    f = t(104155),
    g = t(22082),
    C = t(703656),
    v = t(433355),
    I = t(592125),
    j = t(430824),
    N = t(944486),
    Z = t(31445),
    b = t(59350),
    E = t(290511),
    w = t(176505),
    S = t(921944),
    y = t(388032),
    T = t(499346),
    B = t(3114);
function A(e) {
    let { guild: n, previousChannel: t } = e,
        a = (0, Z.Z)(n);
    i.useEffect(() => {
        (0, h.EW)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: S.L.DISMISS });
    });
    let r = a ? y.intl.formatToPlainString(y.t.uqZgYW, { guildName: n.name }) : y.intl.formatToPlainString(y.t.velJeX, { guildName: n.name }),
        o = a ? y.intl.string(y.t.h9mGOD) : y.intl.string(y.t.et6wam);
    return (
        (0, m.Tt)({ location: r }),
        (0, l.jsxs)(_.Z, {
            className: T.header,
            innerClassname: T.innerHeader,
            hideSearch: !0,
            channelId: w.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
                null != t
                    ? (0, l.jsx)(c.zxk, {
                          className: T.returnButton,
                          size: c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.OUTLINED,
                          color: c.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, C.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(c.Text, {
                              className: T.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: y.intl.format(y.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                i.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(x._, {
                                                            className: T.returnIcon,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(u.Z, {
                                                            children: (0, l.jsx)(c.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: t.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                t.id
                                            )
                              })
                          })
                      })
                    : [],
            children: [
                (0, l.jsx)(_.Z.Icon, {
                    icon: c.H$4,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(_.Z.Title, { children: o })
            ]
        })
    );
}
function R(e) {
    let { guildId: n, selectedSection: t } = e,
        a = (0, o.e7)([j.Z], () => j.Z.getGuild(n)),
        s = (0, Z.Z)(a),
        [u, m] = i.useState(null != t ? t : E.l7.CUSTOMIZE);
    i.useEffect(() => {
        null != t && m(t);
    }, [t]);
    let h = (0, o.e7)([N.Z], () => N.Z.getLastSelectedChannelId(n)),
        x = (0, o.e7)([v.ZP], () => v.ZP.getCurrentSidebarChannelId(w.oC.CHANNEL_BROWSER)),
        _ = null != x && u === E.l7.BROWSE,
        C = (0, o.e7)([I.Z], () => I.Z.getChannel(h)),
        S = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
        R = (0, p.fU)(n);
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: r()(B.chat, { [B.threadSidebarOpen]: _ }),
                      children: [
                          (0, l.jsx)(A, {
                              guild: a,
                              previousChannel: C
                          }),
                          (0, l.jsxs)('div', {
                              className: r()(B.content, T.container),
                              children: [
                                  s &&
                                      (0, l.jsxs)(c.njP, {
                                          className: T.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: u,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  c.njP.Item,
                                                  {
                                                      className: T.tabBarItem,
                                                      id: E.l7.CUSTOMIZE,
                                                      children: y.intl.string(y.t.H2cICQ)
                                                  },
                                                  E.l7.CUSTOMIZE
                                              ),
                                              (0, l.jsxs)(
                                                  c.njP.Item,
                                                  {
                                                      className: T.tabBarItem,
                                                      id: E.l7.BROWSE,
                                                      'aria-label': y.intl.string(y.t.et6wam),
                                                      children: [
                                                          y.intl.string(y.t.et6wam),
                                                          (0, l.jsx)(c.IGR, {
                                                              text: S ? y.intl.string(y.t.psHMa2) : R,
                                                              color: S ? d.Z.unsafe_rawColors.BRAND_260.css : d.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: r()({ [T.newBadge]: S })
                                                          })
                                                      ]
                                                  },
                                                  E.l7.BROWSE
                                              )
                                          ]
                                      }),
                                  (() => {
                                      switch (u) {
                                          case E.l7.CUSTOMIZE:
                                              return (0, l.jsx)(b.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => m(E.l7.BROWSE)
                                              });
                                          case E.l7.BROWSE:
                                          default:
                                              return (0, l.jsx)(f.Z, { guildId: n });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  _ && (0, l.jsx)(f.I, { channelId: x })
              ]
          });
}
