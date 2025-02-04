n.d(t, { Z: () => S });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    r = n(481060),
    o = n(543241),
    d = n(222677),
    c = n(995774),
    u = n(665906),
    g = n(695346),
    f = n(496675),
    m = n(768581),
    h = n(176354),
    E = n(981631),
    v = n(185923),
    Z = n(388032),
    x = n(953568);
let N = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function p(e) {
    var t;
    let { emoji: n, isFocused: l } = e,
        { animated: s, src: o, surrogates: d } = n;
    return (
        null == o && null != n.id
            ? (o = m.ZP.getEmojiURL({
                  id: n.id,
                  animated: !!s,
                  size: 20
              }))
            : null == o && (o = h.ZP.getURL(d)),
        (0, i.jsx)(
            r.ua7,
            {
                text: n.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: l,
                children: (e) =>
                    (0, i.jsx)('div', {
                        'aria-label': Z.intl.formatToPlainString(Z.t['/iYSo6'], { emojiName: n.name }),
                        className: a()(x.button, { [x.focused]: l }),
                        ...e,
                        children:
                            null == o || '' === o.trim()
                                ? (0, i.jsx)('span', {
                                      className: a()('emoji', 'emoji-text', x.icon),
                                      ...e,
                                      children: d
                                  })
                                : (0, i.jsx)('img', {
                                      className: x.icon,
                                      src: o,
                                      alt: ''
                                  })
                    })
            },
            null !== (t = n.id) && void 0 !== t ? t : n.name
        )
    );
}
function S(e, t) {
    let n = (0, o.MZ)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && N.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : '') >= 0) &&
            !h.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: v.Hz.REACTION
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let l = g.nc.useSetting(),
        a = (0, u.$R)(t),
        m = (0, s.e7)([f.Z], () => l && a && (t.isPrivate() || f.Z.can(E.Plq.ADD_REACTIONS, t)), [t, a, l]),
        Z = (n) => {
            (0, d.rU)(t.id, e.id, (0, c.g1)(n), d.TW.MESSAGE_CONTEXT_MENU);
        };
    return m && n.length > 0
        ? (0, i.jsx)(r.kSQ, {
              className: x.wrapper,
              children: n.map((e, t) => {
                  var n;
                  return (0, i.jsx)(
                      r.sNh,
                      {
                          id: 'quickreact-'.concat(null !== (n = e.id) && void 0 !== n ? n : t),
                          render: (t) => {
                              let { isFocused: n } = t;
                              return (0, i.jsx)(p, {
                                  emoji: e,
                                  isFocused: n
                              });
                          },
                          action: () => Z(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      t
                  );
              })
          })
        : null;
}
