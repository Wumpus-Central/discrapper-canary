a.d(t, { A: () => s });
var n = a(627968);
a(64700);
var i = a(515598),
    o = a(719335),
    r = a(339984);
function s(e) {
    let { type: t, analyticsPage: a, analyticsSection: s, isGIF: l, banner: _ } = e;
    return [r.HL.BANNER, r.HL.AVATAR].includes(t) && l
        ? (0, n.jsx)(o.A, { analyticsSection: s, type: t })
        : t === r.HL.GUILD_BANNER
          ? (0, n.jsx)(i.A, { analyticsSection: s, analyticsPage: a, isGIF: l, banner: _ })
          : null;
}
