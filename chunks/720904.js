n.d(t, { Z: () => S }), n(781311);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(28664),
    s = n(481060),
    c = n(543241),
    u = n(222677),
    d = n(995774),
    f = n(665906),
    g = n(695346),
    b = n(496675),
    p = n(768581),
    y = n(176354),
    O = n(981631),
    h = n(185923),
    m = n(388032),
    v = n(561782);
let j = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function E(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: s } = t;
    return (
        null == a && null != t.id
            ? (a = p.ZP.getEmojiURL({
                  id: t.id,
                  animated: !!i,
                  size: 20,
              }))
            : null == a && (a = y.ZP.getURL(s)),
        (0, r.jsx)(o.u, {
            text: (0, y.nY)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, r.jsx)("div", {
                "aria-label": m.intl.formatToPlainString(m.t["/iYSo6"], { emojiName: t.name }),
                className: l()(v.button, { [v.focused]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, r.jsx)("span", {
                              className: l()("emoji", "emoji-text", v.icon),
                              children: s,
                          })
                        : (0, r.jsx)("img", {
                              className: v.icon,
                              src: a,
                              alt: "",
                          }),
            }),
        })
    );
}
function S(e, t) {
    let n = (0, c.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && j.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) &&
            !y.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: h.Hz.REACTION,
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let i = g.nc.useSetting(),
        l = (0, f.$R)(t);
    return (0, a.e7)([b.Z], () => i && l && (t.isPrivate() || b.Z.can(O.Plq.ADD_REACTIONS, t)), [t, l, i]) &&
        n.length > 0
        ? (0, r.jsx)(s.kSQ, {
              className: v.wrapper,
              children: n.map((n, i) => {
                  var l;
                  return (0, r.jsx)(
                      s.sNh,
                      {
                          id: "quickreact-".concat(null != (l = n.id) ? l : i),
                          render: (e) => {
                              let { isFocused: t } = e;
                              return (0, r.jsx)(E, {
                                  emoji: n,
                                  isFocused: t,
                              });
                          },
                          action: () => {
                              (0, u.rU)(t.id, e.id, (0, d.g1)(n), u.TW.MESSAGE_CONTEXT_MENU);
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      i,
                  );
              }),
          })
        : null;
}
