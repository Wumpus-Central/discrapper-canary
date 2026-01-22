n.d(t, {
    A: () => l,
});
var a = n(627968);
n(64700);
var r = n(515598),
    i = n(719335),
    c = n(339984);

function l(e) {
    let { type: t, analyticsPage: n, analyticsSection: l, isGIF: s, banner: o } = e;
    return [c.HL.BANNER, c.HL.AVATAR].includes(t) && s
        ? (0, a.jsx)(i.A, {
              analyticsSection: l,
              type: t,
          })
        : t === c.HL.GUILD_BANNER
          ? (0, a.jsx)(r.A, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: s,
                banner: o,
            })
          : null;
}
