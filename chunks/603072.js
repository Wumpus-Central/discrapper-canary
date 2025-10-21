t.r(n), t.d(n, { default: () => w }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(252618),
    m = t(266454),
    h = t(984370),
    p = t(216306),
    f = t(104155),
    g = t(22082),
    x = t(433355),
    _ = t(430824),
    C = t(31445),
    b = t(59350),
    j = t(290511),
    v = t(176505),
    y = t(921944),
    O = t(388032),
    N = t(126512),
    Z = t(97009);
function I(e) {
    let { guild: n } = e,
        t = (0, C.Z)(n);
    r.useEffect(() => {
        (0, m.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: y.L.DISMISS });
    });
    let i = t
            ? O.intl.formatToPlainString(O.t.uqZgYe, { guildName: n.name })
            : O.intl.formatToPlainString(O.t.velJea, { guildName: n.name }),
        a = t ? O.intl.string(O.t.h9mGOP) : O.intl.string(O.t.et6wav);
    return (
        (0, u.Tt)({ location: i }),
        (0, l.jsxs)(h.Z, {
            className: N.header,
            innerClassname: N.innerHeader,
            hideSearch: !0,
            channelId: v.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [
                (0, l.jsx)(h.Z.Icon, {
                    icon: d.H$4,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(h.Z.Title, { children: a }),
            ],
        })
    );
}
function w(e) {
    let { guildId: n, selectedSection: t } = e,
        i = (0, o.e7)([_.Z], () => _.Z.getGuild(n)),
        s = (0, C.Z)(i),
        [u, m] = r.useState(null != t ? t : j.l7.CUSTOMIZE);
    r.useEffect(() => {
        null != t && m(t);
    }, [t]);
    let h = (0, o.e7)([x.ZP], () => x.ZP.getCurrentSidebarChannelId(v.oC.CHANNEL_BROWSER)),
        y = null != h && u === j.l7.BROWSE,
        w = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
        P = (0, p.fU)(n);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(Z.chat, { [Z.threadSidebarOpen]: y }),
                      children: [
                          (0, l.jsx)(I, { guild: i }),
                          (0, l.jsxs)("div", {
                              className: a()(Z.content, N.container),
                              children: [
                                  s &&
                                      (0, l.jsxs)(d.njP, {
                                          className: N.tabBar,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: u,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  d.njP.Item,
                                                  {
                                                      className: N.tabBarItem,
                                                      id: j.l7.CUSTOMIZE,
                                                      children: O.intl.string(O.t.H2cICW),
                                                  },
                                                  j.l7.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  d.njP.Item,
                                                  {
                                                      className: N.tabBarItem,
                                                      id: j.l7.BROWSE,
                                                      "aria-label": O.intl.string(O.t.et6wav),
                                                      children: [
                                                          O.intl.string(O.t.et6wav),
                                                          (0, l.jsx)(d.IGR, {
                                                              text: w ? O.intl.string(O.t.psHMa6) : P,
                                                              color: w
                                                                  ? c.Z.unsafe_rawColors.BRAND_260.css
                                                                  : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: a()({ [N.newBadge]: w }),
                                                          }),
                                                      ],
                                                  },
                                                  j.l7.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (u) {
                                          case j.l7.CUSTOMIZE:
                                              return (0, l.jsx)(b.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => m(j.l7.BROWSE),
                                              });
                                          case j.l7.BROWSE:
                                          default:
                                              return (0, l.jsx)(f.Z, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  y && (0, l.jsx)(f.I, { channelId: h }),
              ],
          });
}
