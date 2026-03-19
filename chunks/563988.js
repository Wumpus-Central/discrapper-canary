n.d(t, { R: () => s });
var a = n(627968);
n(64700);
var l = n(720462),
    i = n(183802),
    r = n(209968);
function s(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, a.jsx)(l.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, a.jsx)(
                      "div",
                      {
                          className: r.B,
                          children: (0, a.jsx)(i.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: i.s.SMALL,
                              analyticsLocations: n,
                              onClick:
                                  null != s
                                      ? (t) => {
                                            t.preventDefault(), s(e);
                                        }
                                      : void 0,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
