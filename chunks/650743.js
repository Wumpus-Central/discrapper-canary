r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651);
r(192379);
var a = r(399606),
    o = r(704215),
    s = r(481060),
    l = r(596454),
    u = r(607070),
    c = r(605236),
    d = r(880949),
    f = r(28546),
    p = r(65029),
    h = r(430824),
    _ = r(556296),
    m = r(451478),
    g = r(358085),
    E = r(13140),
    v = r(763296),
    y = r(981631),
    b = r(388032),
    I = r(705340);
function T(e) {
    let { soundboardSound: n, closePicker: T } = e,
        S = (0, f.Iu)((e) => e.searchQuery),
        A = (0, a.e7)([v.Z], () => null != n && v.Z.isFavoriteSound(n.soundId)),
        C = (0, a.e7)([h.Z], () => h.Z.getGuild(null == n ? void 0 : n.guildId)),
        N = (0, a.e7)([u.Z], () => u.Z.useReducedMotion, []),
        R = (0, a.e7)([m.Z], () => m.Z.isFocused()),
        O = (0, a.e7)([_.Z], () => _.Z.getKeybindForAction(y.kg4.SOUNDBOARD_HOLD));
    if (null != n && S.length > 0)
        return (0, i.jsx)(p.Z, {
            graphicPrimary:
                null != n.emojiId || null != n.emojiName
                    ? (0, i.jsx)(l.Z, {
                          emojiId: n.emojiId,
                          emojiName: n.emojiName,
                          className: I.emoji
                      })
                    : (0, i.jsx)(s.ImageIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.emoji
                      }),
            graphicSecondary:
                null != C
                    ? (0, i.jsx)(d.Z, {
                          guild: C,
                          shouldAnimate: !N && R
                      })
                    : null,
            titlePrimary: n.name,
            titleSecondary: null == C ? void 0 : C.name,
            isFavorite: A
        });
    let D = () => {
            T(),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await r.e('58120').then(r.bind(r, 355453));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
        },
        L = (0, c.un)(o.z.SOUNDBOARD_KEYBIND_TIP),
        x = () => (0, c.EW)(o.z.SOUNDBOARD_KEYBIND_TIP),
        w =
            null != O && (0, g.isWindows)() && !L
                ? b.intl.format(b.t.udMTtr, {
                      keybind: (0, E.BB)(O.shortcut, !0),
                      openSettingsHook: (e, n) =>
                          (0, i.jsx)(
                              s.Anchor,
                              {
                                  onClick: D,
                                  children: e
                              },
                              n
                          )
                  })
                : null;
    return null == w
        ? null
        : (0, i.jsxs)('div', {
              className: I.keybindHint,
              children: [
                  (0, i.jsx)(s.CircleWarningIcon, {
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
                      children: w
                  }),
                  (0, i.jsx)(s.Clickable, {
                      className: I.closeButton,
                      onClick: x,
                      children: (0, i.jsx)(s.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
              ]
          });
}
