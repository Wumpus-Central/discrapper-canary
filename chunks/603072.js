t.r(n), t.d(n, { default: () => I }), t(388685);
var a = t(54381),
    r = t(473749),
    l = t(120356),
    i = t.n(l),
    c = t(442837),
    o = t(704215),
    d = t(692547),
    s = t(481060),
    u = t(252618),
    b = t(266454),
    p = t(984370),
    h = t(216306),
    f = t(104155),
    m = t(22082),
    g = t(433355),
    x = t(430824),
    C = t(31445),
    j = t(59350),
    v = t(290511),
    O = t(176505),
    y = t(921944),
    N = t(388032),
    _ = t(453223),
    w = t(978966);
function Z(e) {
    let { guild: n } = e,
        t = (0, C.Z)(n);
    r.useEffect(() => {
        (0, b.Q3)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: y.L.DISMISS });
    });
    let l = t
            ? N.intl.formatToPlainString(N.t.uqZgYe, { guildName: n.name })
            : N.intl.formatToPlainString(N.t.velJea, { guildName: n.name }),
        i = t ? N.intl.string(N.t.h9mGOP) : N.intl.string(N.t.et6wav);
    return (
        (0, u.Tt)({ location: l }),
        (0, a.jsxs)(p.Z, {
            className: _.header,
            innerClassname: _.innerHeader,
            hideSearch: !0,
            channelId: O.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [
                (0, a.jsx)(p.Z.Icon, {
                    icon: s.H$4,
                    "aria-hidden": !0,
                }),
                (0, a.jsx)(p.Z.Title, { children: i }),
            ],
        })
    );
}
function I(e) {
    let { guildId: n, selectedSection: t } = e,
        l = (0, c.e7)([x.Z], () => x.Z.getGuild(n)),
        o = (0, C.Z)(l),
        [u, b] = r.useState(null != t ? t : v.l7.CUSTOMIZE);
    r.useEffect(() => {
        null != t && b(t);
    }, [t]);
    let p = (0, c.e7)([g.ZP], () => g.ZP.getCurrentSidebarChannelId(O.oC.CHANNEL_BROWSER)),
        y = null != p && u === v.l7.BROWSE,
        I = (0, c.e7)([m.Z], () => m.Z.getNewChannelIds(n).size > 0),
        P = (0, h.fU)(n);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(w.chat, { [w.threadSidebarOpen]: y }),
                      children: [
                          (0, a.jsx)(Z, { guild: l }),
                          (0, a.jsxs)("div", {
                              className: i()(w.content, _.container),
                              children: [
                                  o &&
                                      (0, a.jsxs)(s.njP, {
                                          className: _.tabBar,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: u,
                                          onItemSelect: (e) => b(e),
                                          children: [
                                              (0, a.jsx)(
                                                  s.njP.Item,
                                                  {
                                                      className: _.tabBarItem,
                                                      id: v.l7.CUSTOMIZE,
                                                      children: N.intl.string(N.t.H2cICW),
                                                  },
                                                  v.l7.CUSTOMIZE,
                                              ),
                                              (0, a.jsxs)(
                                                  s.njP.Item,
                                                  {
                                                      className: _.tabBarItem,
                                                      id: v.l7.BROWSE,
                                                      "aria-label": N.intl.string(N.t.et6wav),
                                                      children: [
                                                          N.intl.string(N.t.et6wav),
                                                          (0, a.jsx)(s.IGR, {
                                                              text: I ? N.intl.string(N.t.psHMa6) : P,
                                                              color: I
                                                                  ? d.Z.unsafe_rawColors.BRAND_260.css
                                                                  : d.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: i()({ [_.newBadge]: I }),
                                                          }),
                                                      ],
                                                  },
                                                  v.l7.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (u) {
                                          case v.l7.CUSTOMIZE:
                                              return (0, a.jsx)(j.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => b(v.l7.BROWSE),
                                              });
                                          case v.l7.BROWSE:
                                          default:
                                              return (0, a.jsx)(f.Z, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  y && (0, a.jsx)(f.I, { channelId: p }),
              ],
          });
}
