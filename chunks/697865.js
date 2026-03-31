n.d(t, { A: () => y });
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(158954),
    o = n(311907),
    a = n(421380),
    u = n(397927),
    d = n(730134),
    c = n(775602),
    p = n(509536),
    _ = n(721923),
    m = n(29086),
    f = n(854627),
    A = n(696451),
    g = n(317525),
    x = n(71393),
    v = n(287809),
    h = n(562153),
    E = n(837921),
    I = n(953382),
    b = n(652215),
    j = n(333354),
    S = n(985018),
    C = n(509754);
let w = E.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;
function y(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        i = (0, o.bG)([g.A], () => g.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        d = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        E = d?.id,
        y = (0, o.bG)([A.Ay], () => (null != E ? A.Ay.getMember(t, E) : void 0), [E, t]),
        L = y?.premiumSince != null,
        k = (0, I.q)("GuildPowerupsBoostInfoContainerMember"),
        N = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: R,
            avatarSrc: T,
            eventHandlers: P,
        } = (0, f.A)({ userId: d?.id, guildId: t, size: u._3J.SIZE_40, animateOnHover: !N });
    return null == n || null == y || null == d
        ? null
        : (0, r.jsxs)("div", {
              className: C.ft,
              children: [
                  (0, r.jsxs)("div", {
                      className: C.FS,
                      children: [
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/semibold",
                              children: S.intl.string(L ? j.default.KSWK1U : j.default.XXXX5l),
                          }),
                          (0, r.jsx)(s.EYj, {
                              variant: "text-sm/medium",
                              children: S.intl.format(L ? j.default["7fWTg4"] : j.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, p.K4)({
                                          guildId: t,
                                          location: {
                                              section: b.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: b.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !L &&
                      (0, r.jsx)(m.V, {
                          avatar: (0, r.jsx)(w, {
                              ...P,
                              user: d,
                              src: T,
                              avatarDecoration: R,
                              size: u._3J.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, r.jsx)(u.gyj, {
                              variant: "text-md/semibold",
                              name: h.Ay.getName(t, null, d),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: l()(C.Qs, C.cX),
                          message: S.intl.string(S.t["6OSasb"]),
                          decorations: (0, r.jsx)(u._Jp, {
                              color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: C.$J,
                          }),
                      }),
                  (0, r.jsx)(_.A, {
                      guild: n,
                      className: C.Qs,
                      analyticsLocation: {
                          page: b.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: b.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: a.XD.BRAND,
                      size: a.lO.MEDIUM,
                      fullWidth: !0,
                      useExpressiveButton: k,
                      icon: (0, r.jsx)(u._Jp, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
