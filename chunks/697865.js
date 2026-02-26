n.d(t, { A: () => L });
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    s = n(158954),
    o = n(311907),
    a = n(421380),
    u = n(397927),
    d = n(730134),
    c = n(775602),
    p = n(509536),
    m = n(721923),
    A = n(29086),
    _ = n(854627),
    f = n(696451),
    g = n(317525),
    x = n(71393),
    v = n(287809),
    h = n(562153),
    b = n(837921),
    j = n(953382),
    E = n(652215),
    I = n(136708),
    w = n(985018),
    S = n(671063),
    C = n(445826);
let N = b.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;
function L(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        l = (0, o.bG)([g.A], () => g.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        d = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        b = d?.id,
        L = (0, o.bG)([f.Ay], () => (null != b ? f.Ay.getMember(t, b) : void 0), [b, t]),
        y = L?.premiumSince != null,
        k = (0, j.q)("GuildPowerupsBoostInfoContainerMember"),
        T = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: P,
            avatarSrc: G,
            eventHandlers: R,
        } = (0, _.A)({ userId: d?.id, guildId: t, size: u._3J.SIZE_40, animateOnHover: !T });
    return null == n || null == L || null == d
        ? null
        : (0, r.jsxs)(u.hLv, {
              className: S.kL,
              children: [
                  (0, r.jsx)("img", { alt: "", className: S.Sl, src: C }),
                  (0, r.jsxs)("div", {
                      className: S.FS,
                      children: [
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/semibold",
                              children: w.intl.string(y ? I.default.KSWK1U : I.default.XXXX5l),
                          }),
                          (0, r.jsx)(s.EYj, {
                              variant: "text-sm/medium",
                              children: w.intl.format(y ? I.default["7fWTg4"] : I.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, p.K)({
                                          guildId: t,
                                          location: {
                                              section: E.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: E.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != l &&
                      !y &&
                      (0, r.jsx)(A.V, {
                          avatar: (0, r.jsx)(N, {
                              ...R,
                              user: d,
                              src: G,
                              avatarDecoration: P,
                              size: u._3J.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, r.jsx)(u.gyj, {
                              variant: "text-md/semibold",
                              name: h.Ay.getName(t, null, d),
                              colorString: l.colorString,
                              colorStrings: l.colorStrings,
                          }),
                          className: i()(S.Qs, S.cX),
                          message: w.intl.string(w.t["6OSasb"]),
                          decorations: (0, r.jsx)(u._Jp, {
                              color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: S.$J,
                          }),
                      }),
                  (0, r.jsx)(m.A, {
                      guild: n,
                      className: S.Qs,
                      analyticsLocation: {
                          page: E.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: E.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
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
