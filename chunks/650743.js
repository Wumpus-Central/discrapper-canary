n.d(t, { Z: () => I });
var r = n(54381);
n(473749);
var i = n(399606),
    a = n(704215),
    o = n(481060),
    s = n(596454),
    l = n(607070),
    c = n(266454),
    u = n(880949),
    d = n(28546),
    f = n(65029),
    p = n(430824),
    _ = n(556296),
    m = n(451478),
    h = n(358085),
    g = n(13140),
    E = n(763296),
    b = n(981631),
    y = n(388032),
    O = n(258482);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    let { soundboardSound: t, closePicker: v } = e,
        I = (0, d.Iu)((e) => e.searchQuery),
        T = (0, i.e7)([E.Z], () => null != t && E.Z.isFavoriteSound(t.soundId)),
        C = (0, i.e7)([p.Z], () => p.Z.getGuild(null == t ? void 0 : t.guildId)),
        A = (0, i.e7)([l.Z], () => l.Z.useReducedMotion, []),
        N = (0, i.e7)([m.Z], () => m.Z.isFocused()),
        P = (0, i.e7)([_.ZP], () => _.ZP.getKeybindForAction(b.kg4.SOUNDBOARD_HOLD));
    if (null != t && I.length > 0)
        return (0, r.jsx)(f.Z, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(s.Z, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          className: O.emoji,
                      })
                    : (0, r.jsx)(o.XBm, {
                          size: "md",
                          color: "currentColor",
                          className: O.emoji,
                      }),
            graphicSecondary:
                null != C
                    ? (0, r.jsx)(u.Z, {
                          guild: C,
                          shouldAnimate: !A && N,
                      })
                    : null,
            titlePrimary: t.name,
            titleSecondary: null == C ? void 0 : C.name,
            isFavorite: T,
        });
    let R = () => {
            v(),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("58120").then(n.bind(n, 355453));
                    return (t) => (0, r.jsx)(e, S({}, t));
                });
        },
        w = (0, c.zu)(a.z.SOUNDBOARD_KEYBIND_TIP),
        D = () => (0, c.Q3)(a.z.SOUNDBOARD_KEYBIND_TIP),
        x =
            null != P && (0, h.isWindows)() && !w
                ? y.intl.format(y.t.udMTth, {
                      keybind: (0, g.BB)(P.shortcut, !0),
                      openSettingsHook: (e, t) =>
                          (0, r.jsx)(
                              o.Anchor,
                              {
                                  onClick: R,
                                  children: e,
                              },
                              t,
                          ),
                  })
                : null;
    return null == x
        ? null
        : (0, r.jsxs)("div", {
              className: O.keybindHint,
              children: [
                  (0, r.jsx)(o.Mgn, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: O.warningIcon,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      className: O.keybindHintText,
                      children: x,
                  }),
                  (0, r.jsx)(o.P3F, {
                      className: O.closeButton,
                      onClick: D,
                      children: (0, r.jsx)(o.Dio, {
                          size: "xs",
                          color: "currentColor",
                      }),
                  }),
              ],
          });
}
