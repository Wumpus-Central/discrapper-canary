i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var a = i(515598),
    r = i(719335),
    l = i(339984);
function s(e) {
    let { type: t, analyticsPage: i, analyticsSection: s, isGIF: o, banner: c } = e;
    return [l.HL.BANNER, l.HL.AVATAR].includes(t) && o
        ? (0, n.jsx)(r.A, { analyticsSection: s, type: t })
        : t === l.HL.GUILD_BANNER
          ? (0, n.jsx)(a.A, { analyticsSection: s, analyticsPage: i, isGIF: o, banner: c })
          : null;
}
