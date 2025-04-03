t.r(n), t.d(n, { default: () => B }), t(47120);
var r = t(200651),
    l = t(192379),
    a = t(120356),
    i = t.n(a),
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
    N = t(430824),
    v = t(944486),
    y = t(31445),
    O = t(59350),
    I = t(290511),
    Z = t(176505),
    w = t(921944),
    P = t(388032),
    E = t(56044),
    S = t(100658);
function T(e) {
    let { guild: n, previousChannel: t } = e,
        a = (0, y.Z)(n);
    l.useEffect(() => {
        (0, h.EW)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: w.L.DISMISS });
    });
    let i = a ? P.NW.formatToPlainString(P.t.uqZgYW, { guildName: n.name }) : P.NW.formatToPlainString(P.t.velJeX, { guildName: n.name }),
        o = a ? P.NW.string(P.t.h9mGOD) : P.NW.string(P.t.et6wam);
    return (
        (0, m.Tt)({ location: i }),
        (0, r.jsxs)(f.Z, {
            className: E.header,
            innerClassname: E.innerHeader,
            hideSearch: !0,
            channelId: Z.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
                null != t
                    ? (0, r.jsx)(d.zxk, {
                          className: E.returnButton,
                          size: d.zxk.Sizes.SMALL,
                          look: d.zxk.Looks.OUTLINED,
                          color: d.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, C.XU)(n.id, t.id);
                          },
                          children: (0, r.jsx)(d.Text, {
                              className: E.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: P.NW.format(P.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(p._W, {
                                                            className: E.returnIcon,
                                                            containerClassName: E.returnIconContainer,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, r.jsx)(u.Z, {
                                                            children: (0, r.jsx)(d.Text, {
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
                (0, r.jsx)(f.Z.Icon, {
                    icon: d.H$4,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(f.Z.Title, { children: o })
            ]
        })
    );
}
function B(e) {
    let { guildId: n, selectedSection: t } = e,
        a = (0, o.e7)([N.Z], () => N.Z.getGuild(n)),
        s = (0, y.Z)(a),
        [u, m] = l.useState(null != t ? t : I.l7.CUSTOMIZE);
    l.useEffect(() => {
        null != t && m(t);
    }, [t]);
    let h = (0, o.e7)([v.Z], () => v.Z.getLastSelectedChannelId(n)),
        p = (0, o.e7)([j.ZP], () => j.ZP.getCurrentSidebarChannelId(Z.oC.CHANNEL_BROWSER)),
        f = null != p && u === I.l7.BROWSE,
        C = (0, o.e7)([b.Z], () => b.Z.getChannel(h)),
        w = (0, o.e7)([_.Z], () => _.Z.getNewChannelIds(n).size > 0),
        B = (0, g.fU)(n);
    return null == a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: i()(S.chat, { [S.threadSidebarOpen]: f }),
                      children: [
                          (0, r.jsx)(T, {
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
                                                              text: w ? P.NW.string(P.t.psHMa2) : B,
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
                                                  guildId: n,
                                                  onBrowseChannels: () => m(I.l7.BROWSE)
                                              });
                                          case I.l7.BROWSE:
                                          default:
                                              return (0, r.jsx)(x.Z, { guildId: n });
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
