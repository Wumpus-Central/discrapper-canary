r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(399606),
    s = r(704215),
    o = r(481060),
    l = r(596454),
    u = r(607070),
    c = r(605236),
    d = r(880949),
    f = r(28546),
    _ = r(65029),
    h = r(430824),
    p = r(556296),
    m = r(451478),
    g = r(358085),
    E = r(13140),
    v = r(763296),
    I = r(981631),
    T = r(388032),
    b = r(705340);
function y(e) {
    let { soundboardSound: n, closePicker: y } = e,
        S = (0, f.Iu)((e) => e.searchQuery),
        A = (0, a.e7)([v.Z], () => null != n && v.Z.isFavoriteSound(n.soundId)),
        N = (0, a.e7)([h.Z], () => h.Z.getGuild(null == n ? void 0 : n.guildId)),
        C = (0, a.e7)([u.Z], () => u.Z.useReducedMotion, []),
        R = (0, a.e7)([m.Z], () => m.Z.isFocused()),
        O = (0, a.e7)([p.Z], () => p.Z.getKeybindForAction(I.kg4.SOUNDBOARD_HOLD));
    if (null != n && S.length > 0)
        return (0, i.jsx)(_.Z, {
            graphicPrimary:
                null != n.emojiId || null != n.emojiName
                    ? (0, i.jsx)(l.Z, {
                          emojiId: n.emojiId,
                          emojiName: n.emojiName,
                          className: b.emoji
                      })
                    : (0, i.jsx)(o.ImageIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: b.emoji
                      }),
            graphicSecondary:
                null != N
                    ? (0, i.jsx)(d.Z, {
                          guild: N,
                          shouldAnimate: !C && R
                      })
                    : null,
            titlePrimary: n.name,
            titleSecondary: null == N ? void 0 : N.name,
            isFavorite: A
        });
    let D = () => {
            y(),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await r.e('58120').then(r.bind(r, 355453));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
        },
        L = (0, c.un)(s.z.SOUNDBOARD_KEYBIND_TIP),
        x = () => (0, c.EW)(s.z.SOUNDBOARD_KEYBIND_TIP),
        w =
            null != O && (0, g.isWindows)() && !L
                ? T.intl.format(T.t.udMTtr, {
                      keybind: (0, E.BB)(O.shortcut, !0),
                      openSettingsHook: (e, n) =>
                          (0, i.jsx)(
                              o.Anchor,
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
              className: b.keybindHint,
              children: [
                  (0, i.jsx)(o.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: b.warningIcon
                  }),
                  (0, i.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-normal',
                      className: b.keybindHintText,
                      children: w
                  }),
                  (0, i.jsx)(o.Clickable, {
                      className: b.closeButton,
                      onClick: x,
                      children: (0, i.jsx)(o.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
              ]
          });
}
