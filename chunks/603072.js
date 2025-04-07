n.r(t), n.d(t, { default: () => T }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(481060),
    u = n(111028),
    m = n(252618),
    h = n(605236),
    p = n(473403),
    f = n(984370),
    g = n(216306),
    x = n(104155),
    _ = n(22082),
    C = n(703656),
    b = n(433355),
    j = n(592125),
    N = n(430824),
    v = n(944486),
    y = n(31445),
    O = n(59350),
    I = n(290511),
    Z = n(176505),
    w = n(921944),
    P = n(388032),
    E = n(56044),
    S = n(100658);
function k(e) {
    let { guild: t, previousChannel: n } = e,
        a = (0, y.Z)(t);
    l.useEffect(() => {
        (0, h.EW)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: w.L.DISMISS });
    });
    let i = a ? P.NW.formatToPlainString(P.t.uqZgYW, { guildName: t.name }) : P.NW.formatToPlainString(P.t.velJeX, { guildName: t.name }),
        o = a ? P.NW.string(P.t.h9mGOD) : P.NW.string(P.t.et6wam);
    return (
        (0, m.Tt)({ location: i }),
        (0, r.jsxs)(f.Z, {
            className: E.header,
            innerClassname: E.innerHeader,
            hideSearch: !0,
            channelId: Z.oC.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            toolbar:
                null != n
                    ? (0, r.jsx)(d.zxk, {
                          className: E.returnButton,
                          size: d.zxk.Sizes.SMALL,
                          look: d.zxk.Looks.OUTLINED,
                          color: d.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, C.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(d.Text, {
                              className: E.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: P.NW.format(P.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == n
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(p._W, {
                                                            className: E.returnIcon,
                                                            containerClassName: E.returnIconContainer,
                                                            guild: t,
                                                            channel: n
                                                        }),
                                                        (0, r.jsx)(u.Z, {
                                                            children: (0, r.jsx)(d.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: n.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                n.id
                                            )
                              })
                          })
                      })
                    : [],
            children: [
                (0, r.jsx)(f.Z.Icon, {
                    icon: d.H$4,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(f.Z.Title, { children: o })
            ]
        })
    );
}
function T(e) {
    let { guildId: t, selectedSection: n } = e,
        a = (0, o.e7)([N.Z], () => N.Z.getGuild(t)),
        s = (0, y.Z)(a),
        [u, m] = l.useState(null != n ? n : I.l7.CUSTOMIZE);
    l.useEffect(() => {
        null != n && m(n);
    }, [n]);
    let h = (0, o.e7)([v.Z], () => v.Z.getLastSelectedChannelId(t)),
        p = (0, o.e7)([b.ZP], () => b.ZP.getCurrentSidebarChannelId(Z.oC.CHANNEL_BROWSER)),
        f = null != p && u === I.l7.BROWSE,
        C = (0, o.e7)([j.Z], () => j.Z.getChannel(h)),
        w = (0, o.e7)([_.Z], () => _.Z.getNewChannelIds(t).size > 0),
        T = (0, g.fU)(t);
    return null == a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: i()(S.chat, { [S.threadSidebarOpen]: f }),
                      children: [
                          (0, r.jsx)(k, {
                              guild: a,
                              previousChannel: C
                          }),
                          (0, r.jsxs)('div', {
                              className: i()(S.content, E.container),
                              children: [
                                  s &&
                                      (0, r.jsxs)(d.njP, {
                                          className: E.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: u,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, r.jsx)(
                                                  d.njP.Item,
                                                  {
                                                      className: E.tabBarItem,
                                                      id: I.l7.CUSTOMIZE,
                                                      children: P.NW.string(P.t.H2cICQ)
                                                  },
                                                  I.l7.CUSTOMIZE
                                              ),
                                              (0, r.jsxs)(
                                                  d.njP.Item,
                                                  {
                                                      className: E.tabBarItem,
                                                      id: I.l7.BROWSE,
                                                      'aria-label': P.NW.string(P.t.et6wam),
                                                      children: [
                                                          P.NW.string(P.t.et6wam),
                                                          (0, r.jsx)(d.IGR, {
                                                              text: w ? P.NW.string(P.t.psHMa2) : T,
                                                              color: w ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: i()({ [E.newBadge]: w })
                                                          })
                                                      ]
                                                  },
                                                  I.l7.BROWSE
                                              )
                                          ]
                                      }),
                                  (() => {
                                      switch (u) {
                                          case I.l7.CUSTOMIZE:
                                              return (0, r.jsx)(O.Z, {
                                                  guildId: t,
                                                  onBrowseChannels: () => m(I.l7.BROWSE)
                                              });
                                          case I.l7.BROWSE:
                                          default:
                                              return (0, r.jsx)(x.Z, { guildId: t });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  f && (0, r.jsx)(x.I, { channelId: p })
              ]
          });
}
