n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
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
    m = n(481060),
    g = n(243778),
    x = n(430824),
    S = n(9156),
    p = n(594174),
    N = n(74538),
    v = n(671105),
    j = n(552958),
    C = n(213931),
    f = n(940165),
    E = n(820408),
    b = n(921944),
    _ = n(871465),
    T = n(388032),
    Z = n(609388);
function O(e) {
    let { guildId: t, onClose: n, isRedesign: l = !1 } = e,
        a = (0, c.e7)([x.Z], () => x.Z.getGuild(t)),
        O = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        { playSound: L, isPlaying: I, soundpackPlaying: M } = (0, j.Z)(),
        A = (0, v.OR)(t),
        R = N.ZP.canUseCustomNotificationSounds(O),
        P = R ? A : _.YC.CLASSIC,
        G = s.useRef(0),
        U = s.useRef(-1),
        [k, w] = s.useState(!1),
        y = (0, _.LB)(),
        D = s.useCallback(() => {
            clearTimeout(U.current),
                (G.current += 1),
                G.current > 10 && (w(!0), h.K.set(_.CZ, !0)),
                (U.current = setTimeout(() => {
                    G.current = 0;
                }, 1000));
        }, []),
        [F, H] = o().partition(y, (e) => !e.requirePremium || (e.requirePremium && R)),
        B = F.map((e) => {
            var t, n, i, s;
            return {
                name: e.label,
                value: e.value,
                desc: e.description,
                radioBarClassName:
                    ((t = e.value),
                    (n = M),
                    (i = I),
                    (s = l),
                    r()(Z.option, {
                        [Z.optionRedesign]: s,
                        [Z.optionPlaying]: t === n && i
                    }))
            };
        }),
        [Y, W] = (0, g.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        z = Y === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    s.useEffect(
        () => () => {
            W(b.L.AUTO_DISMISS);
        },
        [W]
    );
    let V = N.ZP.canUseCustomNotificationSounds(O),
        q = (0, c.e7)([S.ZP], () => S.ZP.isMuted(t), [t]);
    return null == O
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsxs)('div', {
                      className: Z.header,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              variant: 'heading-md/semibold',
                              children: T.intl.string(T.t.mrqSOj)
                          }),
                          (0, i.jsx)(m.Clickable, {
                              onClick: D,
                              className: Z.nitroWheelContainer,
                              children: (0, i.jsx)(m.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: Z.nitroWheel
                              })
                          }),
                          z &&
                              (0, i.jsx)(m.TextBadge, {
                                  className: Z.newBadge,
                                  text: T.intl.string(T.t.y2b7CA)
                              })
                      ]
                  }),
                  (0, i.jsx)(m.Text, {
                      className: Z.subheader,
                      variant: 'text-sm/normal',
                      children: T.intl.format(T.t.LuYDy8, {
                          guildName: (e, t) =>
                              (0, i.jsx)(
                                  m.Text,
                                  {
                                      tag: 'span',
                                      variant: 'text-sm/medium',
                                      children: null == a ? void 0 : a.name
                                  },
                                  t
                              )
                      })
                  }),
                  q &&
                      (0, i.jsxs)('div', {
                          className: Z.warningContainer,
                          children: [
                              (0, i.jsx)(m.CircleWarningIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: d.Z.STATUS_WARNING
                              }),
                              (0, i.jsx)(m.Text, {
                                  className: Z.warningLabel,
                                  variant: 'text-sm/medium',
                                  children: T.intl.string(T.t['a9G/ER'])
                              })
                          ]
                      }),
                  (0, i.jsx)(m.FormItem, {
                      className: Z.optionsContainer,
                      title: T.intl.string(T.t.xxvoAg),
                      children: (0, i.jsxs)('div', {
                          className: r()({ [Z.options]: !V }),
                          children: [
                              (0, i.jsx)(m.RadioGroup, {
                                  className: r()({ [Z.options]: V }),
                                  value: null != P ? P : _.YC.CLASSIC,
                                  onChange: (e) => {
                                      L(e.value), R && (0, C.t)(t, P, e.value, 'notificationSettings');
                                  },
                                  options: B,
                                  radioItemClassName: Z.option
                              }),
                              H.map((e, t) =>
                                  (0, i.jsx)(
                                      f.Z,
                                      {
                                          className: Z.playableOption,
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
                  !V && (0, i.jsx)(E.Z, { onClose: n })
              ]
          });
}
