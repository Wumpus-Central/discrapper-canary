n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var r = n(399606),
    a = n(704215),
    s = n(481060),
    o = n(596454),
    l = n(607070),
    u = n(605236),
    c = n(880949),
    d = n(28546),
    f = n(65029),
    _ = n(430824),
    p = n(556296),
    h = n(451478),
    m = n(358085),
    g = n(13140),
    E = n(763296),
    v = n(981631),
    y = n(388032),
    I = n(685567);
function T(e) {
    let { soundboardSound: t, closePicker: T } = e,
        b = (0, d.Iu)((e) => e.searchQuery),
        S = (0, r.e7)([E.Z], () => null != t && E.Z.isFavoriteSound(t.soundId)),
        A = (0, r.e7)([_.Z], () => _.Z.getGuild(null == t ? void 0 : t.guildId)),
        N = (0, r.e7)([l.Z], () => l.Z.useReducedMotion, []),
        C = (0, r.e7)([h.Z], () => h.Z.isFocused()),
        R = (0, r.e7)([p.ZP], () => p.ZP.getKeybindForAction(v.kg4.SOUNDBOARD_HOLD));
    if (null != t && b.length > 0)
        return (0, i.jsx)(f.Z, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(o.Z, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          className: I.emoji
                      })
                    : (0, i.jsx)(s.XBm, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.emoji
                      }),
            graphicSecondary:
                null != A
                    ? (0, i.jsx)(c.Z, {
                          guild: A,
                          shouldAnimate: !N && C
                      })
                    : null,
            titlePrimary: t.name,
            titleSecondary: null == A ? void 0 : A.name,
            isFavorite: S
        });
    let O = () => {
            T(),
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('58120').then(n.bind(n, 355453));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        D = (0, u.un)(a.z.SOUNDBOARD_KEYBIND_TIP),
        L = () => (0, u.EW)(a.z.SOUNDBOARD_KEYBIND_TIP),
        x =
            null != R && (0, m.isWindows)() && !D
                ? y.intl.format(y.t.udMTtr, {
                      keybind: (0, g.BB)(R.shortcut, !0),
                      openSettingsHook: (e, t) =>
                          (0, i.jsx)(
                              s.eee,
                              {
                                  onClick: O,
                                  children: e
                              },
                              t
                          )
                  })
                : null;
    return null == x
        ? null
        : (0, i.jsxs)('div', {
              className: I.keybindHint,
              children: [
                  (0, i.jsx)(s.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: I.warningIcon
                  }),
                  (0, i.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-normal',
                      className: I.keybindHintText,
                      children: x
                  }),
                  (0, i.jsx)(s.P3F, {
                      className: I.closeButton,
                      onClick: L,
                      children: (0, i.jsx)(s.Dio, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
              ]
          });
}
