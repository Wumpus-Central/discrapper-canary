t.d(l, { $: () => r });
var n = t(627968);
t(64700);
var s = t(503698),
    a = t.n(s),
    i = t(183802),
    d = t(660592);
function r(e) {
    let { applicationId: l, skuIds: t, variant: s = i.s.SMALL, guildId: r, analyticsLocations: o } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: a()(d.kL, d.$2, { [d.Wc]: s === i.s.MEDIUM }),
              children: t.map((e, t) =>
                  (0, n.jsx)(
                      i.A,
                      {
                          positionInSection: t,
                          applicationId: l,
                          skuId: e,
                          variant: s,
                          guildId: r,
                          analyticsLocations: o,
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
