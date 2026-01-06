n.r(t), n.d(t, { default: () => I }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    c = n(704215),
    d = n(692547),
    s = n(481060),
    u = n(252618),
    b = n(266454),
    p = n(984370),
    f = n(216306),
    h = n(104155),
    m = n(22082),
    g = n(433355),
    x = n(430824),
    C = n(31445),
    j = n(59350),
    v = n(290511),
    O = n(176505),
    y = n(921944),
    N = n(388032),
    _ = n(453223),
    Z = n(978966);
function w(e) {
    let { guild: t } = e,
        n = (0, C.Z)(t);
    r.useEffect(() => {
        (0, b.Q3)(c.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: y.L.DISMISS });
    });
    let l = n
            ? N.intl.formatToPlainString(N.t.uqZgYe, { guildName: t.name })
            : N.intl.formatToPlainString(N.t.velJea, { guildName: t.name }),
        i = n ? N.intl.string(N.t.h9mGOP) : N.intl.string(N.t.et6wav);
    return (
        (0, u.Tt)({ location: l }),
        (0, a.jsxs)(p.Z, {
            className: _.header,
            innerClassname: _.innerHeader,
            hideSearch: !0,
            channelId: O.oC.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
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
    let { guildId: t, selectedSection: n } = e,
        l = (0, o.e7)([x.Z], () => x.Z.getGuild(t)),
        c = (0, C.Z)(l),
        [u, b] = r.useState(null != n ? n : v.l7.CUSTOMIZE);
    r.useEffect(() => {
        null != n && b(n);
    }, [n]),
        r.useEffect(() => {
            c || u !== v.l7.CUSTOMIZE || b(v.l7.BROWSE);
        }, [c, u]);
    let p = (0, o.e7)([g.ZP], () => g.ZP.getCurrentSidebarChannelId(O.oC.CHANNEL_BROWSER)),
        y = null != p && u === v.l7.BROWSE,
        I = (0, o.e7)([m.Z], () => m.Z.getNewChannelIds(t).size > 0),
        P = (0, f.fU)(t);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(Z.chat, { [Z.threadSidebarOpen]: y }),
                      children: [
                          (0, a.jsx)(w, { guild: l }),
                          (0, a.jsxs)("div", {
                              className: i()(Z.content, _.container),
                              children: [
                                  c &&
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
                                                  guildId: t,
                                                  onBrowseChannels: () => b(v.l7.BROWSE),
                                              });
                                          case v.l7.BROWSE:
                                          default:
                                              return (0, a.jsx)(h.Z, { guildId: t });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  y && (0, a.jsx)(h.I, { channelId: p }),
              ],
          });
}
