n.d(t, { Z: () => P }), n(781311);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(543241),
    c = n(222677),
    u = n(995774),
    d = n(665906),
    f = n(695346),
    g = n(496675),
    m = n(768581),
    p = n(176354),
    b = n(981631),
    h = n(185923),
    O = n(388032),
    y = n(933070);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function S(e) {
    var t;
    let { emoji: n, isFocused: r } = e,
        { animated: a, src: s, surrogates: c } = n;
    return (
        null == s && null != n.id
            ? (s = m.ZP.getEmojiURL({
                  id: n.id,
                  animated: !!a,
                  size: 20
              }))
            : null == s && (s = p.ZP.getURL(c)),
        (0, i.jsx)(
            o.ua7,
            {
                text: n.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: r,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        v(
                            E(
                                {
                                    'aria-label': O.intl.formatToPlainString(O.t['/iYSo6'], { emojiName: n.name }),
                                    className: l()(y.button, { [y.focused]: r })
                                },
                                e
                            ),
                            {
                                children:
                                    null == s || '' === s.trim()
                                        ? (0, i.jsx)('span', v(E({ className: l()('emoji', 'emoji-text', y.icon) }, e), { children: c }))
                                        : (0, i.jsx)('img', {
                                              className: y.icon,
                                              src: s,
                                              alt: ''
                                          })
                            }
                        )
                    )
            },
            null != (t = n.id) ? t : n.name
        )
    );
}
function P(e, t) {
    let n = (0, s.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && j.indexOf(null != (n = e.uniqueName) ? n : '') >= 0) &&
            !p.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: h.Hz.REACTION
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let r = f.nc.useSetting(),
        l = (0, d.$R)(t),
        m = (0, a.e7)([g.Z], () => r && l && (t.isPrivate() || g.Z.can(b.Plq.ADD_REACTIONS, t)), [t, l, r]),
        O = (n) => {
            (0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU);
        };
    return m && n.length > 0
        ? (0, i.jsx)(o.kSQ, {
              className: y.wrapper,
              children: n.map((e, t) => {
                  var n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: 'quickreact-'.concat(null != (n = e.id) ? n : t),
                          render: (t) => {
                              let { isFocused: n } = t;
                              return (0, i.jsx)(S, {
                                  emoji: e,
                                  isFocused: n
                              });
                          },
                          action: () => O(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      t
                  );
              })
          })
        : null;
}
