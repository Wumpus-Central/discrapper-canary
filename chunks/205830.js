t.d(l, { $: () => o });
var n = t(627968);
t(64700);
var s = t(503698),
    a = t.n(s),
    i = t(183802),
    r = t(616838);
function o(e) {
    let { skuIds: l, variant: t = i.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: a()(r.kL, r.$2, { [r.Wc]: t === i.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, n.jsx)(i.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
