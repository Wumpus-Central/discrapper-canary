n.d(t, { Z: () => E }), n(781311);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(28664),
    c = n(481060),
    s = n(543241),
    u = n(222677),
    d = n(995774),
    f = n(665906),
    g = n(695346),
    b = n(496675),
    p = n(768581),
    O = n(176354),
    y = n(981631),
    m = n(185923),
    v = n(388032),
    h = n(217094);
let j = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function S(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: o, surrogates: c } = t;
    return (
        null == o && null != t.id
            ? (o = p.ZP.getEmojiURL({
                  id: t.id,
                  animated: !!i,
                  size: 20,
              }))
            : null == o && (o = O.ZP.getURL(c)),
        (0, r.jsx)(a.u, {
            text: (0, O.nY)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, r.jsx)("div", {
                "aria-label": v.intl.formatToPlainString(v.t["/iYSo6"], { emojiName: t.name }),
                className: l()(h.button, { [h.focused]: n }),
                children:
                    null == o || "" === o.trim()
                        ? (0, r.jsx)("span", {
                              className: l()("emoji", "emoji-text", h.icon),
                              children: c,
                          })
                        : (0, r.jsx)("img", {
                              className: h.icon,
                              src: o,
                              alt: "",
                          }),
            }),
        })
    );
}
function E(e, t) {
    let n = (0, s.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && j.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) &&
            !O.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: m.Hz.REACTION,
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let i = g.nc.useSetting(),
        l = (0, f.$R)(t);
    return (0, o.e7)([b.Z], () => i && l && (t.isPrivate() || b.Z.can(y.Plq.ADD_REACTIONS, t)), [t, l, i]) &&
        n.length > 0
        ? (0, r.jsx)(c.kSQ, {
              className: h.wrapper,
              children: n.map((n, i) => {
                  var l;
                  return (0, r.jsx)(
                      c.sNh,
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
