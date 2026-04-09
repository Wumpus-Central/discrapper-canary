s.d(a, { F: () => _ });
var r = s(627968),
    t = s(512750),
    n = s(158954),
    o = s(975571),
    l = s(652215),
    i = s(333354),
    d = s(985018),
    c = s(1752);
function _(e) {
    let { powerup: a } = e;
    return a.skuId === t.FB
        ? (0, r.jsx)(n.EYj, {
              className: c.C,
              variant: "text-sm/medium",
              children: d.intl.format(i.default.fXE30d, { helpDeskArticle: o.A.getArticleURL(l.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
