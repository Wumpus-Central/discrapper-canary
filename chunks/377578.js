n.d(t, { A: () => C });
var l = n(477900);
n(582128);
var i = n(503698),
    o = n.n(i),
    r = n(646514),
    a = n(565645),
    s = n(855986),
    u = n(121681),
    c = n(35275),
    d = n(655756);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: i, className: C } = e,
        h = (0, s.bG)(
            [u.Ay],
            () => {
                if (null == n) return null;
                let e = u.Ay.getDisambiguatedEmojiContext(t);
                return e.getById(n) ?? e.getByName(n);
            },
            [t, n],
        );
    return null != h || null != i
        ? (0, l.jsx)(a.A, {
              emojiId: h?.id,
              emojiName: i ?? h?.name,
              animated: h?.animated ?? !1,
              className: o()(d.m, C),
          })
        : (0, l.jsx)(c.A, { className: o()(d.m, C), color: r.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
