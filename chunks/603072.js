n.r(t), n.d(t, { default: () => I }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(481060),
    u = n(252618),
    p = n(266454),
    h = n(984370),
    f = n(216306),
    m = n(104155),
    g = n(22082),
    _ = n(433355),
    x = n(430824),
    C = n(31445),
    b = n(59350),
    j = n(290511),
    v = n(176505),
    O = n(921944),
    y = n(388032),
    N = n(126512),
    w = n(97009);
function Z(e) {
    let { guild: t } = e,
        n = (0, C.Z)(t);
    l.useEffect(() => {
        (0, p.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: O.L.DISMISS });
    });
    let i = n
            ? y.intl.formatToPlainString(y.t.uqZgYe, { guildName: t.name })
            : y.intl.formatToPlainString(y.t.velJea, { guildName: t.name }),
        a = n ? y.intl.string(y.t.h9mGOP) : y.intl.string(y.t.et6wav);
    return (
        (0, u.Tt)({ location: i }),
        (0, r.jsxs)(h.Z, {
            className: N.header,
            innerClassname: N.innerHeader,
            hideSearch: !0,
            channelId: v.oC.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            children: [
                (0, r.jsx)(h.Z.Icon, {
                    icon: d.H$4,
                    "aria-hidden": !0,
                }),
                (0, r.jsx)(h.Z.Title, { children: a }),
            ],
        })
    );
}
function I(e) {
    let { guildId: t, selectedSection: n } = e,
        i = (0, o.e7)([x.Z], () => x.Z.getGuild(t)),
        s = (0, C.Z)(i),
        [u, p] = l.useState(null != n ? n : j.l7.CUSTOMIZE);
    l.useEffect(() => {
        null != n && p(n);
    }, [n]);
    let h = (0, o.e7)([_.ZP], () => _.ZP.getCurrentSidebarChannelId(v.oC.CHANNEL_BROWSER)),
        O = null != h && u === j.l7.BROWSE,
        I = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(t).size > 0),
        P = (0, f.fU)(t);
    return null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(w.chat, { [w.threadSidebarOpen]: O }),
                      children: [
                          (0, r.jsx)(Z, { guild: i }),
                          (0, r.jsxs)("div", {
                              className: a()(w.content, N.container),
                              children: [
                                  s &&
                                      (0, r.jsxs)(d.njP, {
                                          className: N.tabBar,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: u,
                                          onItemSelect: (e) => p(e),
                                          children: [
                                              (0, r.jsx)(
                                                  d.njP.Item,
                                                  {
                                                      className: N.tabBarItem,
                                                      id: j.l7.CUSTOMIZE,
                                                      children: y.intl.string(y.t.H2cICW),
                                                  },
                                                  j.l7.CUSTOMIZE,
                                              ),
                                              (0, r.jsxs)(
                                                  d.njP.Item,
                                                  {
                                                      className: N.tabBarItem,
                                                      id: j.l7.BROWSE,
                                                      "aria-label": y.intl.string(y.t.et6wav),
                                                      children: [
                                                          y.intl.string(y.t.et6wav),
                                                          (0, r.jsx)(d.IGR, {
                                                              text: I ? y.intl.string(y.t.psHMa6) : P,
                                                              color: I
                                                                  ? c.Z.unsafe_rawColors.BRAND_260.css
                                                                  : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: a()({ [N.newBadge]: I }),
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
                                              return (0, r.jsx)(b.Z, {
                                                  guildId: t,
                                                  onBrowseChannels: () => p(j.l7.BROWSE),
                                              });
                                          case j.l7.BROWSE:
                                          default:
                                              return (0, r.jsx)(m.Z, { guildId: t });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  O && (0, r.jsx)(m.I, { channelId: h }),
              ],
          });
}
