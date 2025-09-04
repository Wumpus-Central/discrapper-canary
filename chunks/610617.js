n.d(t, { Z: () => y }), n(388685), n(953529);
var i = n(951288),
    s = n(647438),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    d = n(831209),
    c = n(442837),
    u = n(704215),
    h = n(433517),
    g = n(755721),
    m = n(481060),
    x = n(243778),
    v = n(430824),
    p = n(9156),
    j = n(594174),
    N = n(74538),
    S = n(671105),
    f = n(552958),
    b = n(213931),
    O = n(940165),
    E = n(820408),
    C = n(921944),
    Z = n(871465),
    _ = n(388032),
    L = n(226339);
function y(e) {
    let { guildId: t, onClose: n, isRedesign: l = !1 } = e,
        a = (0, c.e7)([v.Z], () => v.Z.getGuild(t)),
        y = (0, c.e7)([j.default], () => j.default.getCurrentUser()),
        { playSound: T, isPlaying: P, soundpackPlaying: M } = (0, f.Z)(),
        w = (0, S.OR)(t),
        I = N.ZP.canUseCustomNotificationSounds(y),
        A = I ? w : Z.YC.CLASSIC,
        G = s.useRef(0),
        R = s.useRef(-1),
        [U, D] = s.useState(!1),
        k = (0, Z.LB)(),
        V = s.useCallback(() => {
            clearTimeout(R.current),
                (G.current += 1),
                G.current > 10 && (D(!0), h.K.set(Z.CZ, !0)),
                (R.current = setTimeout(() => {
                    G.current = 0;
                }, 1000));
        }, []),
        [W, z] = o().partition(k, (e) => !e.requirePremium || (e.requirePremium && I)),
        Y = W.map((e) => {
            var t;
            return {
                name: e.label,
                value: e.value,
                desc: e.description,
                radioBarClassName:
                    ((t = e.value),
                    r()(L.option, {
                        [L.optionRedesign]: l,
                        [L.optionPlaying]: t === M && P,
                    })),
            };
        }),
        [B, F] = (0, x.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        q = B === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    s.useEffect(
        () => () => {
            F(C.L.AUTO_DISMISS);
        },
        [F],
    );
    let H = N.ZP.canUseCustomNotificationSounds(y),
        X = (0, c.e7)([p.ZP], () => p.ZP.isMuted(t), [t]);
    return null == y
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsxs)("div", {
                      className: L.header,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              variant: "heading-md/semibold",
                              children: _.intl.string(_.t.mrqSOj),
                          }),
                          (0, i.jsx)(m.P3F, {
                              onClick: V,
                              className: L.nitroWheelContainer,
                              children: (0, i.jsx)(m.SrA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: L.nitroWheel,
                              }),
                          }),
                          q &&
                              (0, i.jsx)(m.IGR, {
                                  className: L.newBadge,
                                  text: _.intl.string(_.t.y2b7CA),
                              }),
                      ],
                  }),
                  (0, i.jsx)(m.Text, {
                      className: L.subheader,
                      variant: "text-sm/normal",
                      children: _.intl.format(_.t.LuYDy8, {
                          guildName: (e, t) =>
                              (0, i.jsx)(
                                  m.Text,
                                  {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      children: null == a ? void 0 : a.name,
                                  },
                                  t,
                              ),
                      }),
                  }),
                  X &&
                      (0, i.jsxs)("div", {
                          className: L.warningContainer,
                          children: [
                              (0, i.jsx)(m.Mgn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: d.Z.STATUS_WARNING,
                              }),
                              (0, i.jsx)(m.Text, {
                                  className: L.warningLabel,
                                  variant: "text-sm/medium",
                                  children: _.intl.string(_.t["a9G/ER"]),
                              }),
                          ],
                      }),
                  (0, i.jsx)(m.xJW, {
                      className: L.optionsContainer,
                      title: _.intl.string(_.t.xxvoAg),
                      children: (0, i.jsxs)("div", {
                          className: r()({ [L.options]: !H }),
                          children: [
                              (0, i.jsx)(g.Gu, {
                                  className: r()({ [L.options]: H }),
                                  value: null != A ? A : Z.YC.CLASSIC,
                                  onChange: (e) => {
                                      T(e.value), I && (0, b.t)(t, A, e.value, "notificationSettings");
                                  },
                                  options: Y,
                                  radioItemClassName: L.option,
                              }),
                              z.map((e, t) =>
                                  (0, i.jsx)(
                                      O.Z,
                                      {
                                          className: L.playableOption,
                                          label: e.label,
                                          description: e.description,
                                          soundpack: e.value,
                                          location: "notificationSettings",
                                      },
                                      "sound_option_".concat(t),
                                  ),
                              ),
                          ],
                      }),
                  }),
                  !H && (0, i.jsx)(E.Z, { onClose: n }),
              ],
          });
}
