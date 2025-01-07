t.r(n),
    t.d(n, {
        default: function () {
            return L;
        }
    }),
    t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(111028),
    h = t(252618),
    m = t(605236),
    f = t(473403),
    p = t(984370),
    x = t(216306),
    C = t(104155),
    g = t(22082),
    _ = t(703656),
    b = t(433355),
    I = t(592125),
    N = t(430824),
    v = t(944486),
    Z = t(31445),
    j = t(59350),
    B = t(290511),
    E = t(176505),
    S = t(921944),
    T = t(388032),
    w = t(824104),
    A = t(247627);
function y(e) {
    let { guild: n, previousChannel: t } = e,
        i = (0, Z.Z)(n);
    a.useEffect(() => {
        (0, m.EW)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: S.L.DISMISS });
    });
    let r = i ? T.intl.formatToPlainString(T.t.uqZgYW, { guildName: n.name }) : T.intl.formatToPlainString(T.t.velJeX, { guildName: n.name }),
        o = i ? T.intl.string(T.t.h9mGOD) : T.intl.string(T.t.et6wam);
    return (
        (0, h.Tt)({ location: r }),
        (0, l.jsxs)(p.Z, {
            className: w.header,
            innerClassname: w.innerHeader,
            hideSearch: !0,
            channelId: E.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
                null != t
                    ? (0, l.jsx)(d.Button, {
                          className: w.returnButton,
                          size: d.Button.Sizes.SMALL,
                          look: d.Button.Looks.OUTLINED,
                          color: d.Button.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, _.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(d.Text, {
                              className: w.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: T.intl.format(T.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                a.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(f._, {
                                                            className: w.returnIcon,
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
                (0, l.jsx)(p.Z.Icon, {
                    icon: d.ChannelListMagnifyingGlassIcon,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(p.Z.Title, { children: o })
            ]
        })
    );
}
function L(e) {
    let { guildId: n, selectedSection: t } = e,
        i = (0, o.e7)([N.Z], () => N.Z.getGuild(n)),
        s = (0, Z.Z)(i),
        [u, h] = a.useState(null != t ? t : B.l7.CUSTOMIZE);
    a.useEffect(() => {
        null != t && h(t);
    }, [t]);
    let m = (0, o.e7)([v.Z], () => v.Z.getLastSelectedChannelId(n)),
        f = (0, o.e7)([b.ZP], () => b.ZP.getCurrentSidebarChannelId(E.oC.CHANNEL_BROWSER)),
        p = null != f && u === B.l7.BROWSE,
        _ = (0, o.e7)([I.Z], () => I.Z.getChannel(m)),
        S = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
        L = (0, x.fU)(n);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: r()(A.chat, { [A.threadSidebarOpen]: p }),
                      children: [
                          (0, l.jsx)(y, {
                              guild: i,
                              previousChannel: _
                          }),
                          (0, l.jsxs)('div', {
                              className: r()(A.content, w.container),
                              children: [
                                  s &&
                                      (0, l.jsxs)(d.TabBar, {
                                          className: w.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: u,
                                          onItemSelect: (e) => h(e),
                                          children: [
                                              (0, l.jsx)(
                                                  d.TabBar.Item,
                                                  {
                                                      className: w.tabBarItem,
                                                      id: B.l7.CUSTOMIZE,
                                                      children: T.intl.string(T.t.H2cICQ)
                                                  },
                                                  B.l7.CUSTOMIZE
                                              ),
                                              (0, l.jsxs)(
                                                  d.TabBar.Item,
                                                  {
                                                      className: w.tabBarItem,
                                                      id: B.l7.BROWSE,
                                                      'aria-label': T.intl.string(T.t.et6wam),
                                                      children: [
                                                          T.intl.string(T.t.et6wam),
                                                          (0, l.jsx)(d.TextBadge, {
                                                              text: S ? T.intl.string(T.t.psHMa2) : L,
                                                              color: S ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: r()({ [w.newBadge]: S })
                                                          })
                                                      ]
                                                  },
                                                  B.l7.BROWSE
                                              )
                                          ]
                                      }),
                                  (() => {
                                      switch (u) {
                                          case B.l7.CUSTOMIZE:
                                              return (0, l.jsx)(j.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => h(B.l7.BROWSE)
                                              });
                                          case B.l7.BROWSE:
                                          default:
                                              return (0, l.jsx)(C.Z, { guildId: n });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  p && (0, l.jsx)(C.I, { channelId: f })
              ]
          });
}
