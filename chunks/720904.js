(n.d(t, { Z: () => _ }), n(781311));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(543241),
    c = n(222677),
    u = n(995774),
    d = n(665906),
    f = n(695346),
    g = n(496675),
    b = n(768581),
    p = n(176354),
    m = n(981631),
    O = n(185923),
    y = n(388032),
    h = n(933070);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function E(e) {
    var t;
    let { emoji: n, isFocused: i } = e,
        { animated: a, src: s, surrogates: c } = n;
    return (
        null == s && null != n.id
            ? (s = b.ZP.getEmojiURL({
                  id: n.id,
                  animated: !!a,
                  size: 20
              }))
            : null == s && (s = p.ZP.getURL(c)),
        (0, r.jsx)(
            o.ua7,
            {
                text: n.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: i,
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        j(
                            v(
                                {
                                    'aria-label': y.intl.formatToPlainString(y.t['/iYSo6'], { emojiName: n.name }),
                                    className: l()(h.button, { [h.focused]: i })
                                },
                                e
                            ),
                            {
                                children:
                                    null == s || '' === s.trim()
                                        ? (0, r.jsx)('span', j(v({ className: l()('emoji', 'emoji-text', h.icon) }, e), { children: c }))
                                        : (0, r.jsx)('img', {
                                              className: h.icon,
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
function _(e, t) {
    let n = (0, s.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && S.indexOf(null != (n = e.uniqueName) ? n : '') >= 0) &&
            !p.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: O.Hz.REACTION
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let i = f.nc.useSetting(),
        l = (0, d.$R)(t),
        b = (0, a.e7)([g.Z], () => i && l && (t.isPrivate() || g.Z.can(m.Plq.ADD_REACTIONS, t)), [t, l, i]),
        y = (n) => {
            (0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU);
        };
    return b && n.length > 0
        ? (0, r.jsx)(o.kSQ, {
              className: h.wrapper,
              children: n.map((e, t) => {
                  var n;
                  return (0, r.jsx)(
                      o.sNh,
                      {
                          id: 'quickreact-'.concat(null != (n = e.id) ? n : t),
                          render: (t) => {
                              let { isFocused: n } = t;
                              return (0, r.jsx)(E, {
                                  emoji: e,
                                  isFocused: n
                              });
                          },
                          action: () => y(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      t
                  );
              })
          })
        : null;
}
