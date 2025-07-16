(t.r(n), t.d(n, { default: () => A }), t(388685));
var l = t(255367),
    r = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(755721),
    u = t(481060),
    m = t(111028),
    h = t(252618),
    p = t(266454),
    f = t(473403),
    g = t(984370),
    x = t(216306),
    _ = t(104155),
    C = t(22082),
    j = t(703656),
    b = t(433355),
    v = t(592125),
    y = t(430824),
    O = t(944486),
    Z = t(31445),
    N = t(59350),
    I = t(290511),
    w = t(176505),
    P = t(921944),
    E = t(388032),
    S = t(56044),
    T = t(100658);
function B(e) {
    let { guild: n, previousChannel: t } = e,
        i = (0, Z.Z)(n);
    r.useEffect(() => {
        (0, p.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: P.L.DISMISS });
    });
    let a = i ? E.intl.formatToPlainString(E.t.uqZgYW, { guildName: n.name }) : E.intl.formatToPlainString(E.t.velJeX, { guildName: n.name }),
        o = i ? E.intl.string(E.t.h9mGOD) : E.intl.string(E.t.et6wam);
    return (
        (0, h.Tt)({ location: a }),
        (0, l.jsxs)(g.Z, {
            className: S.header,
            innerClassname: S.innerHeader,
            hideSearch: !0,
            channelId: w.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
                null != t
                    ? (0, l.jsx)(d.zx, {
                          className: S.returnButton,
                          size: d.zx.Sizes.SMALL,
                          look: d.zx.Looks.OUTLINED,
                          color: d.zx.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, j.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(u.Text, {
                              className: S.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: E.intl.format(E.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                r.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(f._W, {
                                                            className: S.returnIcon,
                                                            containerClassName: S.returnIconContainer,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(m.Z, {
                                                            children: (0, l.jsx)(u.Text, {
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
                (0, l.jsx)(g.Z.Icon, {
                    icon: u.H$4,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(g.Z.Title, { children: o })
            ]
        })
    );
}
function A(e) {
    let { guildId: n, selectedSection: t } = e,
        i = (0, o.e7)([y.Z], () => y.Z.getGuild(n)),
        s = (0, Z.Z)(i),
        [d, m] = r.useState(null != t ? t : I.l7.CUSTOMIZE);
    r.useEffect(() => {
        null != t && m(t);
    }, [t]);
    let h = (0, o.e7)([O.Z], () => O.Z.getLastSelectedChannelId(n)),
        p = (0, o.e7)([b.ZP], () => b.ZP.getCurrentSidebarChannelId(w.oC.CHANNEL_BROWSER)),
        f = null != p && d === I.l7.BROWSE,
        g = (0, o.e7)([v.Z], () => v.Z.getChannel(h)),
        j = (0, o.e7)([C.Z], () => C.Z.getNewChannelIds(n).size > 0),
        P = (0, x.fU)(n);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: a()(T.chat, { [T.threadSidebarOpen]: f }),
                      children: [
                          (0, l.jsx)(B, {
                              guild: i,
                              previousChannel: g
                          }),
                          (0, l.jsxs)('div', {
                              className: a()(T.content, S.container),
                              children: [
                                  s &&
                                      (0, l.jsxs)(u.njP, {
                                          className: S.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: d,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  u.njP.Item,
                                                  {
                                                      className: S.tabBarItem,
                                                      id: I.l7.CUSTOMIZE,
                                                      children: E.intl.string(E.t.H2cICQ)
                                                  },
                                                  I.l7.CUSTOMIZE
                                              ),
                                              (0, l.jsxs)(
                                                  u.njP.Item,
                                                  {
                                                      className: S.tabBarItem,
                                                      id: I.l7.BROWSE,
                                                      'aria-label': E.intl.string(E.t.et6wam),
                                                      children: [
                                                          E.intl.string(E.t.et6wam),
                                                          (0, l.jsx)(u.IGR, {
                                                              text: j ? E.intl.string(E.t.psHMa2) : P,
                                                              color: j ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: a()({ [S.newBadge]: j })
                                                          })
                                                      ]
                                                  },
                                                  I.l7.BROWSE
                                              )
                                          ]
                                      }),
                                  (() => {
                                      switch (d) {
                                          case I.l7.CUSTOMIZE:
                                              return (0, l.jsx)(N.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => m(I.l7.BROWSE)
                                              });
                                          case I.l7.BROWSE:
                                          default:
                                              return (0, l.jsx)(_.Z, { guildId: n });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  f && (0, l.jsx)(_.I, { channelId: p })
              ]
          });
}
