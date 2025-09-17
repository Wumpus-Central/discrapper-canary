n.d(t, { Z: () => P }), n(781311);
var r = n(951288);
n(647438);
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
    O = n(981631),
    m = n(185923),
    y = n(388032),
    h = n(561782);
function v(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
let E = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function S(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: s } = t;
    return (
        null == a && null != t.id
            ? (a = b.ZP.getEmojiURL({
                  id: t.id,
                  animated: !!i,
                  size: 20,
              }))
            : null == a && (a = p.ZP.getURL(s)),
        (0, r.jsx)(o.ua7, {
            text: (0, p.nY)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (e) =>
                (0, r.jsx)(
                    "div",
                    j(
                        v(
                            {
                                "aria-label": y.intl.formatToPlainString(y.t["/iYSo6"], { emojiName: t.name }),
                                className: l()(h.button, { [h.focused]: n }),
                            },
                            e,
                        ),
                        {
                            children:
                                null == a || "" === a.trim()
                                    ? (0, r.jsx)(
                                          "span",
                                          j(v({ className: l()("emoji", "emoji-text", h.icon) }, e), { children: s }),
                                      )
                                    : (0, r.jsx)("img", {
                                          className: h.icon,
                                          src: a,
                                          alt: "",
                                      }),
                        },
                    ),
                ),
        })
    );
}
function P(e, t) {
    let n = (0, s.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && E.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) &&
            !p.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: m.Hz.REACTION,
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let i = f.nc.useSetting(),
        l = (0, d.$R)(t);
    return (0, a.e7)([g.Z], () => i && l && (t.isPrivate() || g.Z.can(O.Plq.ADD_REACTIONS, t)), [t, l, i]) &&
        n.length > 0
        ? (0, r.jsx)(o.kSQ, {
              className: h.wrapper,
              children: n.map((n, i) => {
                  var l;
                  return (0, r.jsx)(
                      o.sNh,
                      {
                          id: "quickreact-".concat(null != (l = n.id) ? l : i),
                          render: (e) => {
                              let { isFocused: t } = e;
                              return (0, r.jsx)(S, {
                                  emoji: n,
                                  isFocused: t,
                              });
                          },
                          action: () => {
                              (0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU);
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      i,
                  );
              }),
          })
        : null;
}
