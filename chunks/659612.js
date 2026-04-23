n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    o = n(827734),
    a = n(565645),
    s = n(206547),
    u = n(35275),
    c = n(606481);
function d(e) {
    let { guildId: t, emojiId: n, emojiName: l, className: d } = e,
        m = (0, s.A)(t, n);
    return null != m || null != l
        ? (0, i.jsx)(a.A, {
              emojiId: m?.id,
              emojiName: l ?? m?.name,
              animated: m?.animated ?? !1,
              className: r()(c.m, d),
          })
        : (0, i.jsx)(u.A, { className: r()(c.m, d), color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
