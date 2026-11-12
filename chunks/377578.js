t.d(a, { A: () => d });
var l = t(477900);
t(582128);
var n = t(503698),
    r = t.n(n),
    s = t(646514),
    i = t(565645),
    u = t(855986),
    o = t(121681),
    c = t(35275),
    h = t(655756);
function d(e) {
    let { guildId: a, emojiId: t, emojiName: n, className: d } = e,
        m = (0, u.bG)(
            [o.Ay],
            () => {
                if (null == t) return null;
                let e = o.Ay.getDisambiguatedEmojiContext(a);
                return e.getById(t) ?? e.getByName(t);
            },
            [a, t],
        );
    return null != m || null != n
        ? (0, l.jsx)(i.A, {
              emojiId: m?.id,
              emojiName: n ?? m?.name,
              animated: m?.animated ?? !1,
              className: r()(h.m, d),
          })
        : (0, l.jsx)(c.A, { className: r()(h.m, d), color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
