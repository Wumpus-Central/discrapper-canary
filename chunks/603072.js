t.r(n), t.d(n, { default: () => Z }), t(388685);
var r = t(54381),
    l = t(473749),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(252618),
    p = t(266454),
    h = t(984370),
    m = t(216306),
    f = t(104155),
    g = t(22082),
    _ = t(433355),
    x = t(430824),
    b = t(31445),
    C = t(59350),
    j = t(290511),
    O = t(176505),
    v = t(921944),
    y = t(388032),
    N = t(126512),
    I = t(97009);
function w(e) {
    let { guild: n } = e,
        t = (0, b.Z)(n);
    l.useEffect(() => {
        (0, p.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: v.L.DISMISS });
    });
    let i = t
            ? y.intl.formatToPlainString(y.t.uqZgYe, { guildName: n.name })
            : y.intl.formatToPlainString(y.t.velJea, { guildName: n.name }),
        a = t ? y.intl.string(y.t.h9mGOP) : y.intl.string(y.t.et6wav);
    return (
        (0, u.Tt)({ location: i }),
        (0, r.jsxs)(h.Z, {
            className: N.header,
            innerClassname: N.innerHeader,
            hideSearch: !0,
            channelId: O.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
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
function Z(e) {
    let { guildId: n, selectedSection: t } = e,
        i = (0, o.e7)([x.Z], () => x.Z.getGuild(n)),
        s = (0, b.Z)(i),
        [u, p] = l.useState(null != t ? t : j.l7.CUSTOMIZE);
    l.useEffect(() => {
        null != t && p(t);
    }, [t]);
    let h = (0, o.e7)([_.ZP], () => _.ZP.getCurrentSidebarChannelId(O.oC.CHANNEL_BROWSER)),
        v = null != h && u === j.l7.BROWSE,
        Z = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
        P = (0, m.fU)(n);
    return null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(I.chat, { [I.threadSidebarOpen]: v }),
                      children: [
                          (0, r.jsx)(w, { guild: i }),
                          (0, r.jsxs)("div", {
                              className: a()(I.content, N.container),
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
                                                              text: Z ? y.intl.string(y.t.psHMa6) : P,
                                                              color: Z
                                                                  ? c.Z.unsafe_rawColors.BRAND_260.css
                                                                  : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: a()({ [N.newBadge]: Z }),
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
                                              return (0, r.jsx)(C.Z, {
                                                  guildId: n,
                                                  onBrowseChannels: () => p(j.l7.BROWSE),
                                              });
                                          case j.l7.BROWSE:
                                          default:
                                              return (0, r.jsx)(f.Z, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  v && (0, r.jsx)(f.I, { channelId: h }),
              ],
          });
}
