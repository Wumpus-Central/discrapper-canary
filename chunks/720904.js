t.d(n, {
    Z: function () {
        return x;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(442837),
    o = t(481060),
    s = t(543241),
    u = t(222677),
    d = t(995774),
    c = t(665906),
    g = t(695346),
    f = t(496675),
    m = t(768581),
    h = t(176354),
    E = t(981631),
    I = t(185923),
    v = t(388032),
    M = t(953568);
let p = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function Z(e) {
    var n;
    let { emoji: t, isFocused: l } = e,
        { animated: a, src: s, surrogates: u } = t;
    return (
        null == s && null != t.id
            ? (s = m.ZP.getEmojiURL({
                  id: t.id,
                  animated: !!a,
                  size: 20
              }))
            : null == s && (s = h.ZP.getURL(u)),
        (0, i.jsx)(
            o.Tooltip,
            {
                text: t.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: l,
                children: (e) =>
                    (0, i.jsx)('div', {
                        'aria-label': v.intl.formatToPlainString(v.t['/iYSo6'], { emojiName: t.name }),
                        className: r()(M.button, { [M.focused]: l }),
                        ...e,
                        children:
                            null == s || '' === s.trim()
                                ? (0, i.jsx)('span', {
                                      className: r()('emoji', 'emoji-text', M.icon),
                                      ...e,
                                      children: u
                                  })
                                : (0, i.jsx)('img', {
                                      className: M.icon,
                                      src: s,
                                      alt: ''
                                  })
                    })
            },
            null !== (n = t.id) && void 0 !== n ? n : t.name
        )
    );
}
function x(e, n) {
    let t = (0, s.MZ)(n.guild_id).filter((e) => {
        var t;
        return (
            !(e.useSpriteSheet && p.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : '') >= 0) &&
            !h.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: n,
                intention: I.Hz.REACTION
            })
        );
    });
    t.length > 4 && (t.length = 4);
    let l = g.nc.useSetting(),
        r = (0, c.$R)(n),
        m = (0, a.e7)([f.Z], () => l && r && (n.isPrivate() || f.Z.can(E.Plq.ADD_REACTIONS, n)), [n, r, l]),
        v = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
        };
    return m && t.length > 0
        ? (0, i.jsx)(o.MenuGroup, {
              className: M.wrapper,
              children: t.map((e, n) => {
                  var t;
                  return (0, i.jsx)(
                      o.MenuItem,
                      {
                          id: 'quickreact-'.concat(null !== (t = e.id) && void 0 !== t ? t : n),
                          render: (n) => {
                              let { isFocused: t } = n;
                              return (0, i.jsx)(Z, {
                                  emoji: e,
                                  isFocused: t
                              });
                          },
                          action: () => v(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      n
                  );
              })
          })
        : null;
}
