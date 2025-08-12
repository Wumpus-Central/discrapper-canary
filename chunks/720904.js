n.d(t, { Z: () => A }), n(781311);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(543241),
    c = n(222677),
    u = n(995774),
    d = n(665906),
    f = n(695346),
    _ = n(496675),
    p = n(768581),
    h = n(176354),
    m = n(981631),
    g = n(185923),
    E = n(388032),
    b = n(37388);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function S(e) {
    var t;
    let { emoji: n, isFocused: i } = e,
        { animated: a, src: l, surrogates: c } = n;
    return (
        null == l && null != n.id
            ? (l = p.ZP.getEmojiURL({
                  id: n.id,
                  animated: !!a,
                  size: 20,
              }))
            : null == l && (l = h.ZP.getURL(c)),
        (0, r.jsx)(
            s.ua7,
            {
                text: n.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: i,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        I(
                            O(
                                {
                                    "aria-label": E.intl.formatToPlainString(E.t["/iYSo6"], { emojiName: n.name }),
                                    className: o()(b.button, { [b.focused]: i }),
                                },
                                e,
                            ),
                            {
                                children:
                                    null == l || "" === l.trim()
                                        ? (0, r.jsx)(
                                              "span",
                                              I(O({ className: o()("emoji", "emoji-text", b.icon) }, e), {
                                                  children: c,
                                              }),
                                          )
                                        : (0, r.jsx)("img", {
                                              className: b.icon,
                                              src: l,
                                              alt: "",
                                          }),
                            },
                        ),
                    ),
            },
            null != (t = n.id) ? t : n.name,
        )
    );
}
function A(e, t) {
    let n = (0, l.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && T.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) &&
            !h.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: g.Hz.REACTION,
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let i = f.nc.useSetting(),
        o = (0, d.$R)(t),
        p = (0, a.e7)([_.Z], () => i && o && (t.isPrivate() || _.Z.can(m.Plq.ADD_REACTIONS, t)), [t, o, i]),
        E = (n) => {
            (0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU);
        };
    return p && n.length > 0
        ? (0, r.jsx)(s.kSQ, {
              className: b.wrapper,
              children: n.map((e, t) => {
                  var n;
                  return (0, r.jsx)(
                      s.sNh,
                      {
                          id: "quickreact-".concat(null != (n = e.id) ? n : t),
                          render: (t) => {
                              let { isFocused: n } = t;
                              return (0, r.jsx)(S, {
                                  emoji: e,
                                  isFocused: n,
                              });
                          },
                          action: () => E(e),
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      t,
                  );
              }),
          })
        : null;
}
