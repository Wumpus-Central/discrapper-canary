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
    g = n(481060),
    m = n(243778),
    x = n(430824),
    p = n(9156),
    v = n(594174),
    j = n(74538),
    N = n(671105),
    S = n(552958),
    f = n(213931),
    b = n(940165),
    O = n(820408),
    E = n(921944),
    C = n(871465),
    Z = n(388032),
    _ = n(226339);
function y(e) {
    let { guildId: t, onClose: n, isRedesign: l = !1 } = e,
        a = (0, c.e7)([x.Z], () => x.Z.getGuild(t)),
        y = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
        { playSound: L, isPlaying: T, soundpackPlaying: P } = (0, S.Z)(),
        M = (0, N.OR)(t),
        w = j.ZP.canUseCustomNotificationSounds(y),
        I = w ? M : C.YC.CLASSIC,
        A = s.useRef(0),
        G = s.useRef(-1),
        [R, U] = s.useState(!1),
        D = (0, C.LB)(),
        k = s.useCallback(() => {
            clearTimeout(G.current),
                (A.current += 1),
                A.current > 10 && (U(!0), h.K.set(C.CZ, !0)),
                (G.current = setTimeout(() => {
                    A.current = 0;
                }, 1000));
        }, []),
        [W, V] = o().partition(D, (e) => !e.requirePremium || (e.requirePremium && w)),
        X = W.map((e) => {
            var t;
            return {
                name: e.label,
                value: e.value,
                desc: e.description,
                radioBarClassName:
                    ((t = e.value),
                    r()(_.option, {
                        [_.optionRedesign]: l,
                        [_.optionPlaying]: t === P && T,
                    })),
            };
        }),
        [J, Y] = (0, m.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        B = J === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    s.useEffect(
        () => () => {
            Y(E.L.AUTO_DISMISS);
        },
        [Y],
    );
    let F = j.ZP.canUseCustomNotificationSounds(y),
        z = (0, c.e7)([p.ZP], () => p.ZP.isMuted(t), [t]);
    return null == y
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsxs)("div", {
                      className: _.header,
                      children: [
                          (0, i.jsx)(g.X6q, {
                              variant: "heading-md/semibold",
                              children: Z.intl.string(Z.t.mrqSOj),
                          }),
                          (0, i.jsx)(g.P3F, {
                              onClick: k,
                              className: _.nitroWheelContainer,
                              children: (0, i.jsx)(g.SrA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: _.nitroWheel,
                              }),
                          }),
                          B &&
                              (0, i.jsx)(g.IGR, {
                                  className: _.newBadge,
                                  text: Z.intl.string(Z.t.y2b7CA),
                              }),
                      ],
                  }),
                  (0, i.jsx)(g.Text, {
                      className: _.subheader,
                      variant: "text-sm/normal",
                      children: Z.intl.format(Z.t.LuYDy8, {
                          guildName: (e, t) =>
                              (0, i.jsx)(
                                  g.Text,
                                  {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      children: null == a ? void 0 : a.name,
                                  },
                                  t,
                              ),
                      }),
                  }),
                  z &&
                      (0, i.jsxs)("div", {
                          className: _.warningContainer,
                          children: [
                              (0, i.jsx)(g.Mgn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: d.Z.STATUS_WARNING,
                              }),
                              (0, i.jsx)(g.Text, {
                                  className: _.warningLabel,
                                  variant: "text-sm/medium",
                                  children: Z.intl.string(Z.t["a9G/ER"]),
                              }),
                          ],
                      }),
                  (0, i.jsx)(g.xJW, {
                      className: _.optionsContainer,
                      title: Z.intl.string(Z.t.xxvoAg),
                      children: (0, i.jsxs)("div", {
                          className: r()({ [_.options]: !F }),
                          children: [
                              (0, i.jsx)(g.FXm, {
                                  className: r()({ [_.options]: F }),
                                  value: null != I ? I : C.YC.CLASSIC,
                                  onChange: (e) => {
                                      L(e.value), w && (0, f.t)(t, I, e.value, "notificationSettings");
                                  },
                                  options: X,
                                  radioItemClassName: _.option,
                              }),
                              V.map((e, t) =>
                                  (0, i.jsx)(
                                      b.Z,
                                      {
                                          className: _.playableOption,
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
                  !F && (0, i.jsx)(O.Z, { onClose: n }),
              ],
          });
}
