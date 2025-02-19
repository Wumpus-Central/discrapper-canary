n.d(t, { Z: () => P }), n(566702);
var r = n(200651);
n(192379);
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
    m = n(768581),
    b = n(176354),
    p = n(981631),
    h = n(185923),
    v = n(388032),
    y = n(637270);
function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
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
let E = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function j(e) {
    var t;
    let { emoji: n, isFocused: i } = e,
        { animated: a, src: s, surrogates: c } = n;
    return (
        null == s && null != n.id
            ? (s = m.ZP.getEmojiURL({
                  id: n.id,
                  animated: !!a,
                  size: 20
              }))
            : null == s && (s = b.ZP.getURL(c)),
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
                        N(
                            O(
                                {
                                    'aria-label': v.NW.formatToPlainString(v.t['/iYSo6'], { emojiName: n.name }),
                                    className: l()(y.button, { [y.focused]: i })
                                },
                                e
                            ),
                            {
                                children:
                                    null == s || '' === s.trim()
                                        ? (0, r.jsx)('span', N(O({ className: l()('emoji', 'emoji-text', y.icon) }, e), { children: c }))
                                        : (0, r.jsx)('img', {
                                              className: y.icon,
                                              src: s,
                                              alt: ''
                                          })
                            }
                        )
                    )
            },
            null !== (t = n.id) && void 0 !== t ? t : n.name
        )
    );
}
function P(e, t) {
    let n = (0, s.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && E.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : '') >= 0) &&
            !b.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: h.Hz.REACTION
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let i = f.nc.useSetting(),
        l = (0, d.$R)(t),
        m = (0, a.e7)([g.Z], () => i && l && (t.isPrivate() || g.Z.can(p.Plq.ADD_REACTIONS, t)), [t, l, i]),
        v = (n) => {
            (0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU);
        };
    return m && n.length > 0
        ? (0, r.jsx)(o.kSQ, {
              className: y.wrapper,
              children: n.map((e, t) => {
                  var n;
                  return (0, r.jsx)(
                      o.sNh,
                      {
                          id: 'quickreact-'.concat(null !== (n = e.id) && void 0 !== n ? n : t),
                          render: (t) => {
                              let { isFocused: n } = t;
                              return (0, r.jsx)(j, {
                                  emoji: e,
                                  isFocused: n
                              });
                          },
                          action: () => v(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      t
                  );
              })
          })
        : null;
}
