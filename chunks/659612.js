n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(565645),
    l = n(206547),
    c = n(35275),
    u = n(299434);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: f } = e,
        p = (0, l.A)(n, i);
    return null != p || null != d
        ? (0, r.jsx)(o.A, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null != (t = null == p ? void 0 : p.animated) && t,
              className: a()(u.m, f),
          })
        : (0, r.jsx)(c.A, {
              className: a()(u.m, f),
              color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
          });
}
