t.r(n), t.d(n, { default: () => B }), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(111028),
    m = t(252618),
    h = t(605236),
    p = t(473403),
    f = t(984370),
    g = t(216306),
    x = t(104155),
    _ = t(22082),
    C = t(703656),
    j = t(433355),
    b = t(592125),
    v = t(430824),
    y = t(944486),
    O = t(31445),
    I = t(59350),
    N = t(290511),
    Z = t(176505),
    w = t(921944),
    P = t(388032),
    E = t(56044),
    S = t(100658);
function T(e) {
    let { guild: n, previousChannel: t } = e,
        i = (0, O.Z)(n);
    r.useEffect(() => {
        (0, h.EW)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: w.L.DISMISS });
    });
    let a = i ? P.intl.formatToPlainString(P.t.uqZgYW, { guildName: n.name }) : P.intl.formatToPlainString(P.t.velJeX, { guildName: n.name }),
        o = i ? P.intl.string(P.t.h9mGOD) : P.intl.string(P.t.et6wam);
    return (
        (0, m.Tt)({ location: a }),
        (0, l.jsxs)(f.Z, {
            className: E.header,
            innerClassname: E.innerHeader,
            hideSearch: !0,
            channelId: Z.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
                null != t
                    ? (0, l.jsx)(d.zxk, {
                          className: E.returnButton,
                          size: d.zxk.Sizes.SMALL,
                          look: d.zxk.Looks.OUTLINED,
                          color: d.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, C.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(d.Text, {
                              className: E.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: P.intl.format(P.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                r.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(p._W, {
                                                            className: E.returnIcon,
                                                            containerClassName: E.returnIconContainer,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(u.Z, {
                                                            children: (0, l.jsx)(d.Text, {
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
                (0, l.jsx)(f.Z.Icon, {
                    icon: d.H$4,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(f.Z.Title, { children: o })
            ]
        })
    );
}
function B(e) {
    let { guildId: n, selectedSection: t } = e,
        i = (0, o.e7)([v.Z], () => v.Z.getGuild(n)),
        s = (0, O.Z)(i),
        [u, m] = r.useState(null != t ? t : N.l7.CUSTOMIZE);
    r.useEffect(() => {
        null != t && m(t);
    }, [t]);
    let h = (0, o.e7)([y.Z], () => y.Z.getLastSelectedChannelId(n)),
        p = (0, o.e7)([j.ZP], () => j.ZP.getCurrentSidebarChannelId(Z.oC.CHANNEL_BROWSER)),
        f = null != p && u === N.l7.BROWSE,
        C = (0, o.e7)([b.Z], () => b.Z.getChannel(h)),
        w = (0, o.e7)([_.Z], () => _.Z.getNewChannelIds(n).size > 0),
        B = (0, g.fU)(n);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: a()(S.chat, { [S.threadSidebarOpen]: f }),
                      children: [
                          (0, l.jsx)(T, {
                              guild: i,
                              previousChannel: C
                          }),
                          (0, l.jsxs)('div', {
                              className: a()(S.content, E.container),
                              children: [
                                  s &&
                                      (0, l.jsxs)(d.njP, {
                                          className: E.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: u,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  d.njP.Item,
                                                  {
                                                      className: E.tabBarItem,
                                                      id: N.l7.CUSTOMIZE,
                                                      children: P.intl.string(P.t.H2cICQ)
                                                  },
                                                  N.l7.CUSTOMIZE
                                              ),
                                              (0, l.jsxs)(
                                                  d.njP.Item,
                                                  {
                                                      className: E.tabBarItem,
                                                      id: N.l7.BROWSE,
                                                      'aria-label': P.intl.string(P.t.et6wam),
                                                      children: [
                                                          P.intl.string(P.t.et6wam),
                                                          (0, l.jsx)(d.IGR, {
                                                              text: w ? P.intl.string(P.t.psHMa2) : B,
                                                              color: w ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: a()({ [E.newBadge]: w })
                                                          })
                                                      ]
                                                  },
                                                  N.l7.BROWSE
                                              )
                                          ]
                                      }),
                                  (() => {
                                      switch (u) {
                                          case N.l7.CUSTOMIZE:
                                              return (0, l.jsx)(I.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => m(N.l7.BROWSE)
                                              });
                                          case N.l7.BROWSE:
                                          default:
                                              return (0, l.jsx)(x.Z, { guildId: n });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  f && (0, l.jsx)(x.I, { channelId: p })
              ]
          });
}
