(n.r(t), n.d(t, { default: () => w }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(481060),
    u = n(252618),
    m = n(266454),
    h = n(984370),
    p = n(216306),
    f = n(104155),
    g = n(22082),
    x = n(433355),
    _ = n(430824),
    C = n(31445),
    j = n(59350),
    b = n(290511),
    v = n(176505),
    y = n(921944),
    O = n(388032),
    Z = n(56044),
    N = n(100658);
function I(e) {
    let { guild: t } = e,
        n = (0, C.Z)(t);
    r.useEffect(() => {
        (0, m.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: y.L.DISMISS });
    });
    let i = n ? O.intl.formatToPlainString(O.t.uqZgYW, { guildName: t.name }) : O.intl.formatToPlainString(O.t.velJeX, { guildName: t.name }),
        a = n ? O.intl.string(O.t.h9mGOD) : O.intl.string(O.t.et6wam);
    return (
        (0, u.Tt)({ location: i }),
        (0, l.jsxs)(h.Z, {
            className: Z.header,
            innerClassname: Z.innerHeader,
            hideSearch: !0,
            channelId: v.oC.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            children: [
                (0, l.jsx)(h.Z.Icon, {
                    icon: d.H$4,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(h.Z.Title, { children: a })
            ]
        })
    );
}
function w(e) {
    let { guildId: t, selectedSection: n } = e,
        i = (0, o.e7)([_.Z], () => _.Z.getGuild(t)),
        s = (0, C.Z)(i),
        [u, m] = r.useState(null != n ? n : b.l7.CUSTOMIZE);
    r.useEffect(() => {
        null != n && m(n);
    }, [n]);
    let h = (0, o.e7)([x.ZP], () => x.ZP.getCurrentSidebarChannelId(v.oC.CHANNEL_BROWSER)),
        y = null != h && u === b.l7.BROWSE,
        w = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(t).size > 0),
        P = (0, p.fU)(t);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: a()(N.chat, { [N.threadSidebarOpen]: y }),
                      children: [
                          (0, l.jsx)(I, { guild: i }),
                          (0, l.jsxs)('div', {
                              className: a()(N.content, Z.container),
                              children: [
                                  s &&
                                      (0, l.jsxs)(d.njP, {
                                          className: Z.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: u,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  d.njP.Item,
                                                  {
                                                      className: Z.tabBarItem,
                                                      id: b.l7.CUSTOMIZE,
                                                      children: O.intl.string(O.t.H2cICQ)
                                                  },
                                                  b.l7.CUSTOMIZE
                                              ),
                                              (0, l.jsxs)(
                                                  d.njP.Item,
                                                  {
                                                      className: Z.tabBarItem,
                                                      id: b.l7.BROWSE,
                                                      'aria-label': O.intl.string(O.t.et6wam),
                                                      children: [
                                                          O.intl.string(O.t.et6wam),
                                                          (0, l.jsx)(d.IGR, {
                                                              text: w ? O.intl.string(O.t.psHMa2) : P,
                                                              color: w ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: a()({ [Z.newBadge]: w })
                                                          })
                                                      ]
                                                  },
                                                  b.l7.BROWSE
                                              )
                                          ]
                                      }),
                                  (() => {
                                      switch (u) {
                                          case b.l7.CUSTOMIZE:
                                              return (0, l.jsx)(j.Z, {
                                                  guildId: t,
                                                  onBrowseChannels: () => m(b.l7.BROWSE)
                                              });
                                          case b.l7.BROWSE:
                                          default:
                                              return (0, l.jsx)(f.Z, { guildId: t });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  y && (0, l.jsx)(f.I, { channelId: h })
              ]
          });
}
