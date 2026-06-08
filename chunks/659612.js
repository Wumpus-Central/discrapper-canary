i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(661531),
    r = i(565645),
    u = i(206547),
    o = i(35275),
    c = i(606481);
function d(e) {
    let { guildId: t, emojiId: i, emojiName: l, className: d } = e,
        f = (0, u.A)(t, i);
    return null != f || null != l
        ? (0, n.jsx)(r.A, {
              emojiId: f?.id,
              emojiName: l ?? f?.name,
              animated: f?.animated ?? !1,
              className: s()(c.m, d),
          })
        : (0, n.jsx)(o.A, { className: s()(c.m, d), color: a.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
