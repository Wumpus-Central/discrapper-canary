s.d(a, { F: () => _ });
var r = s(627968),
    n = s(512750),
    l = s(834730),
    t = s(975571),
    o = s(652215),
    i = s(853513),
    d = s(985018),
    c = s(182184);
function _(e) {
    let { powerup: a } = e;
    return a.skuId === n.FB
        ? (0, r.jsx)(l.E, {
              className: c.C,
              variant: "text-sm/medium",
              children: d.intl.format(i.default.fXE30d, { helpDeskArticle: t.A.getArticleURL(o.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
