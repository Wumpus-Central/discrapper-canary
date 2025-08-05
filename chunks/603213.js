n.d(t, { q: () => u });
var r = n(255367),
    o = n(494497),
    l = n(793030),
    s = n(63063),
    a = n(981631),
    i = n(93841),
    c = n(388032),
    d = n(850926);
function u(e) {
    let { powerup: t } = e;
    return t.skuId === o.A$
        ? (0, r.jsx)(l.xv, {
              className: d.learnMore,
              variant: 'text-sm/medium',
              children: c.intl.format(i.default.fXE30d, { helpDeskArticle: s.Z.getArticleURL(a.BhN.GUILD_VANITY_URL) })
          })
        : null;
}
