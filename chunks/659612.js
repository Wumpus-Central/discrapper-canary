"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(565645),
    l = n(206547),
    u = n(35275),
    c = n(299434);
function d(e) {
    let { guildId: t, emojiId: n, emojiName: i, className: d } = e,
        _ = (0, l.A)(t, n);
    return null != _ || null != i
        ? (0, r.jsx)(o.A, {
              emojiId: _?.id,
              emojiName: i ?? _?.name,
              animated: _?.animated ?? !1,
              className: a()(c.m, d),
          })
        : (0, r.jsx)(u.A, { className: a()(c.m, d), color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
