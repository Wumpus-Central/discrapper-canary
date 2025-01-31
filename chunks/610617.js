n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(392711),
    o = n.n(r),
    d = n(831209),
    c = n(442837),
    u = n(704215),
    h = n(433517),
    g = n(481060),
    m = n(243778),
    x = n(430824),
    p = n(9156),
    v = n(594174),
    N = n(74538),
    S = n(671105),
    j = n(552958),
    C = n(213931),
    f = n(940165),
    E = n(820408),
    Z = n(921944),
    b = n(871465),
    _ = n(388032),
    T = n(609388);
function L(e) {
    let { guildId: t, onClose: n, isRedesign: l = !1 } = e,
        r = (0, c.e7)([x.Z], () => x.Z.getGuild(t)),
        L = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
        { playSound: O, isPlaying: M, soundpackPlaying: I } = (0, j.Z)(),
        A = (0, S.OR)(t),
        R = N.ZP.canUseCustomNotificationSounds(L),
        P = R ? A : b.YC.CLASSIC,
        G = s.useRef(0),
        U = s.useRef(-1),
        [w, y] = s.useState(!1),
        D = (0, b.LB)(),
        k = s.useCallback(() => {
            clearTimeout(U.current),
                (G.current += 1),
                G.current > 10 && (y(!0), h.K.set(b.CZ, !0)),
                (U.current = setTimeout(() => {
                    G.current = 0;
                }, 1000));
        }, []),
        [X, V] = o().partition(D, (e) => !e.requirePremium || (e.requirePremium && R)),
        W = X.map((e) => {
            var t;
            return {
                name: e.label,
                value: e.value,
                desc: e.description,
                radioBarClassName:
                    ((t = e.value),
                    a()(T.option, {
                        [T.optionRedesign]: l,
                        [T.optionPlaying]: t === I && M
                    }))
            };
        }),
        [B, J] = (0, m.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        Y = B === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    s.useEffect(
        () => () => {
            J(Z.L.AUTO_DISMISS);
        },
        [J]
    );
    let z = N.ZP.canUseCustomNotificationSounds(L),
        F = (0, c.e7)([p.ZP], () => p.ZP.isMuted(t), [t]);
    return null == L
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsxs)('div', {
                      className: T.header,
                      children: [
                          (0, i.jsx)(g.X6q, {
                              variant: 'heading-md/semibold',
                              children: _.intl.string(_.t.mrqSOj)
                          }),
                          (0, i.jsx)(g.P3F, {
                              onClick: k,
                              className: T.nitroWheelContainer,
                              children: (0, i.jsx)(g.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: T.nitroWheel
                              })
                          }),
                          Y &&
                              (0, i.jsx)(g.IGR, {
                                  className: T.newBadge,
                                  text: _.intl.string(_.t.y2b7CA)
                              })
                      ]
                  }),
                  (0, i.jsx)(g.Text, {
                      className: T.subheader,
                      variant: 'text-sm/normal',
                      children: _.intl.format(_.t.LuYDy8, {
                          guildName: (e, t) =>
                              (0, i.jsx)(
                                  g.Text,
                                  {
                                      tag: 'span',
                                      variant: 'text-sm/medium',
                                      children: null == r ? void 0 : r.name
                                  },
                                  t
                              )
                      })
                  }),
                  F &&
                      (0, i.jsxs)('div', {
                          className: T.warningContainer,
                          children: [
                              (0, i.jsx)(g.P4T, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: d.Z.STATUS_WARNING
                              }),
                              (0, i.jsx)(g.Text, {
                                  className: T.warningLabel,
                                  variant: 'text-sm/medium',
                                  children: _.intl.string(_.t['a9G/ER'])
                              })
                          ]
                      }),
                  (0, i.jsx)(g.xJW, {
                      className: T.optionsContainer,
                      title: _.intl.string(_.t.xxvoAg),
                      children: (0, i.jsxs)('div', {
                          className: a()({ [T.options]: !z }),
                          children: [
                              (0, i.jsx)(g.FXm, {
                                  className: a()({ [T.options]: z }),
                                  value: null != P ? P : b.YC.CLASSIC,
                                  onChange: (e) => {
                                      O(e.value), R && (0, C.t)(t, P, e.value, 'notificationSettings');
                                  },
                                  options: W,
                                  radioItemClassName: T.option
                              }),
                              V.map((e, t) =>
                                  (0, i.jsx)(
                                      f.Z,
                                      {
                                          className: T.playableOption,
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
                  !z && (0, i.jsx)(E.Z, { onClose: n })
              ]
          });
}
