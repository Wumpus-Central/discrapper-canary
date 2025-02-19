n.d(t, { Z: () => I });
var r = n(200651);
n(192379);
var i = n(399606),
    o = n(704215),
    a = n(481060),
    s = n(596454),
    l = n(607070),
    c = n(605236),
    u = n(880949),
    d = n(28546),
    f = n(65029),
    p = n(430824),
    _ = n(556296),
    h = n(451478),
    m = n(358085),
    g = n(13140),
    E = n(763296),
    v = n(981631),
    b = n(388032),
    y = n(340172);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    let { soundboardSound: t, closePicker: O } = e,
        I = (0, d.Iu)((e) => e.searchQuery),
        T = (0, i.e7)([E.Z], () => null != t && E.Z.isFavoriteSound(t.soundId)),
        N = (0, i.e7)([p.Z], () => p.Z.getGuild(null == t ? void 0 : t.guildId)),
        A = (0, i.e7)([l.Z], () => l.Z.useReducedMotion, []),
        C = (0, i.e7)([h.Z], () => h.Z.isFocused()),
        R = (0, i.e7)([_.ZP], () => _.ZP.getKeybindForAction(v.kg4.SOUNDBOARD_HOLD));
    if (null != t && I.length > 0)
        return (0, r.jsx)(f.Z, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(s.Z, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          className: y.emoji
                      })
                    : (0, r.jsx)(a.XBm, {
                          size: 'md',
                          color: 'currentColor',
                          className: y.emoji
                      }),
            graphicSecondary:
                null != N
                    ? (0, r.jsx)(u.Z, {
                          guild: N,
                          shouldAnimate: !A && C
                      })
                    : null,
            titlePrimary: t.name,
            titleSecondary: null == N ? void 0 : N.name,
            isFavorite: T
        });
    let P = () => {
            O(),
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('58120').then(n.bind(n, 355453));
                    return (t) => (0, r.jsx)(e, S({}, t));
                });
        },
        w = (0, c.un)(o.z.SOUNDBOARD_KEYBIND_TIP),
        D = () => (0, c.EW)(o.z.SOUNDBOARD_KEYBIND_TIP),
        x =
            null != R && (0, m.isWindows)() && !w
                ? b.NW.format(b.t.udMTtr, {
                      keybind: (0, g.BB)(R.shortcut, !0),
                      openSettingsHook: (e, t) =>
                          (0, r.jsx)(
                              a.eee,
                              {
                                  onClick: P,
                                  children: e
                              },
                              t
                          )
                  })
                : null;
    return null == x
        ? null
        : (0, r.jsxs)('div', {
              className: y.keybindHint,
              children: [
                  (0, r.jsx)(a.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: y.warningIcon
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-normal',
                      className: y.keybindHintText,
                      children: x
                  }),
                  (0, r.jsx)(a.P3F, {
                      className: y.closeButton,
                      onClick: D,
                      children: (0, r.jsx)(a.Dio, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
              ]
          });
}
