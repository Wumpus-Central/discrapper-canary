n.d(t, { Z: () => T }), n(47120), n(266796);
var i = n(200651),
    s = n(192379),
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
    N = n(9156),
    p = n(594174),
    v = n(74538),
    j = n(671105),
    S = n(552958),
    f = n(213931),
    b = n(940165),
    C = n(820408),
    O = n(921944),
    E = n(871465),
    Z = n(388032),
    _ = n(345450);
function T(e) {
    let { guildId: t, onClose: n, isRedesign: l = !1 } = e,
        a = (0, c.e7)([x.Z], () => x.Z.getGuild(t)),
        T = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        { playSound: L, isPlaying: W, soundpackPlaying: y } = (0, S.Z)(),
        M = (0, j.OR)(t),
        I = v.ZP.canUseCustomNotificationSounds(T),
        P = I ? M : E.YC.CLASSIC,
        A = s.useRef(0),
        R = s.useRef(-1),
        [w, G] = s.useState(!1),
        D = (0, E.LB)(),
        U = s.useCallback(() => {
            clearTimeout(R.current),
                (A.current += 1),
                A.current > 10 && (G(!0), h.K.set(E.CZ, !0)),
                (R.current = setTimeout(() => {
                    A.current = 0;
                }, 1000));
        }, []),
        [k, X] = o().partition(D, (e) => !e.requirePremium || (e.requirePremium && I)),
        V = k.map((e) => {
            var t;
            return {
                name: e.label,
                value: e.value,
                desc: e.description,
                radioBarClassName:
                    ((t = e.value),
                    r()(_.option, {
                        [_.optionRedesign]: l,
                        [_.optionPlaying]: t === y && W
                    }))
            };
        }),
        [B, J] = (0, m.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        Y = B === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    s.useEffect(
        () => () => {
            J(O.L.AUTO_DISMISS);
        },
        [J]
    );
    let z = v.ZP.canUseCustomNotificationSounds(T),
        F = (0, c.e7)([N.ZP], () => N.ZP.isMuted(t), [t]);
    return null == T
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsxs)('div', {
                      className: _.header,
                      children: [
                          (0, i.jsx)(g.X6q, {
                              variant: 'heading-md/semibold',
                              children: Z.NW.string(Z.t.mrqSOj)
                          }),
                          (0, i.jsx)(g.P3F, {
                              onClick: U,
                              className: _.nitroWheelContainer,
                              children: (0, i.jsx)(g.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: _.nitroWheel
                              })
                          }),
                          Y &&
                              (0, i.jsx)(g.IGR, {
                                  className: _.newBadge,
                                  text: Z.NW.string(Z.t.y2b7CA)
                              })
                      ]
                  }),
                  (0, i.jsx)(g.Text, {
                      className: _.subheader,
                      variant: 'text-sm/normal',
                      children: Z.NW.format(Z.t.LuYDy8, {
                          guildName: (e, t) =>
                              (0, i.jsx)(
                                  g.Text,
                                  {
                                      tag: 'span',
                                      variant: 'text-sm/medium',
                                      children: null == a ? void 0 : a.name
                                  },
                                  t
                              )
                      })
                  }),
                  F &&
                      (0, i.jsxs)('div', {
                          className: _.warningContainer,
                          children: [
                              (0, i.jsx)(g.P4T, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: d.Z.STATUS_WARNING
                              }),
                              (0, i.jsx)(g.Text, {
                                  className: _.warningLabel,
                                  variant: 'text-sm/medium',
                                  children: Z.NW.string(Z.t['a9G/ER'])
                              })
                          ]
                      }),
                  (0, i.jsx)(g.xJW, {
                      className: _.optionsContainer,
                      title: Z.NW.string(Z.t.xxvoAg),
                      children: (0, i.jsxs)('div', {
                          className: r()({ [_.options]: !z }),
                          children: [
                              (0, i.jsx)(g.FXm, {
                                  className: r()({ [_.options]: z }),
                                  value: null != P ? P : E.YC.CLASSIC,
                                  onChange: (e) => {
                                      L(e.value), I && (0, f.t)(t, P, e.value, 'notificationSettings');
                                  },
                                  options: V,
                                  radioItemClassName: _.option
                              }),
                              X.map((e, t) =>
                                  (0, i.jsx)(
                                      b.Z,
                                      {
                                          className: _.playableOption,
                                          label: e.label,
                                          description: e.description,
                                          soundpack: e.value,
                                          location: 'notificationSettings'
                                      },
                                      'sound_option_'.concat(t)
                                  )
                              )
                          ]
                      })
                  }),
                  !z && (0, i.jsx)(C.Z, { onClose: n })
              ]
          });
}
