e.d(n, { default: () => N }), e(388685);
var i = e(255367),
    r = e(73800),
    s = e(399606),
    a = e(481060),
    o = e(493773),
    d = e(100527),
    l = e(906732),
    c = e(565138),
    u = e(314897),
    h = e(271383),
    x = e(430824),
    _ = e(626135),
    C = e(715903),
    p = e(295474),
    g = e(273504),
    m = e(981631),
    j = e(372897),
    k = e(388032),
    A = e(276575);
function N(t) {
    var n;
    let { onClose: e, transitionState: N, guildId: f } = t,
        v = (0, s.e7)([u.default], () => u.default.getId()),
        E = (0, s.e7)([h.ZP], () => h.ZP.getMember(f, v), [f, v]),
        I = (0, s.e7)([x.Z], () => x.Z.getGuild(f), [f]),
        R = null != (n = null == I ? void 0 : I.name) ? n : "",
        Z = (0, C.no)(E),
        { analyticsLocations: z } = (0, l.ZP)(d.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [M, O] = (0, p.ww)({
            guildId: f,
            analyticsLocations: z,
            openWithoutBackstack: !0,
        }),
        P = Z.has(j.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? k.intl.string(k.t.SpDXIy)
            : k.intl.string(k.t["QRN+Sk"]);
    O || (P = k.intl.string(k.t.FFj5Dg));
    let T = O ? k.intl.string(k.t["/PGQf3"]) : k.intl.string(k.t.WikgZ2);
    return ((0, o.ZP)(() => {
        _.default.track(m.rMx.OPEN_MODAL, {
            type: g.dc,
            guild_id: f,
            other_user_id: v,
        });
    }),
    r.useEffect(() => {
        if (null == I) return void e();
    }, [I, e]),
    null == I)
        ? null
        : (0, i.jsxs)(a.Y0X, {
              transitionState: N,
              size: a.CgR.SMALL,
              parentComponent: "AutomodUserProfileQuarantineAlert",
              children: [
                  (0, i.jsx)(a.xBx, {
                      separator: !1,
                      children: (0, i.jsxs)("div", {
                          className: A.headerContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: A.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          guild: I,
                                          size: c.Z.Sizes.LARGER,
                                      }),
                                      (0, i.jsx)("div", {
                                          className: A.statusContainer,
                                          children: (0, i.jsx)(a.ics, {
                                              size: "md",
                                              color: "currentColor",
                                              className: A.statusIcon,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(a.X6q, {
                                  color: "header-primary",
                                  variant: "heading-md/semibold",
                                  children: k.intl.format(k.t.kcYdTk, { guildName: R }),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(a.hzk, {
                      children: (0, i.jsx)("div", {
                          className: A.descriptionContainer,
                          children: (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: P,
                          }),
                      }),
                  }),
                  (0, i.jsx)(a.mzw, {
                      children: (0, i.jsxs)(a.hE2, {
                          direction: "horizontal-reverse",
                          children: [
                              (0, i.jsx)(a.zxk, {
                                  variant: "primary",
                                  text: T,
                                  onClick: () => {
                                      M(), e();
                                  },
                              }),
                              (0, i.jsx)(a.zxk, {
                                  variant: "secondary",
                                  text: k.intl.string(k.t["ETE/oK"]),
                                  onClick: e,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
