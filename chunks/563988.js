n.d(t, { R: () => o });
var l = n(627968),
    a = n(64700),
    i = n(951707),
    r = n(183802),
    s = n(627771);
function o(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: o } = e,
        c = a.useMemo(() => {
            if (null != o)
                return (e, t) => {
                    let { skuId: n, applicationId: l } = t;
                    e.preventDefault(), o(n, l);
                };
        }, [o]);
    return null == t || 0 === t.length
        ? null
        : (0, l.jsx)(i.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: s.B,
                          children: (0, l.jsx)(r.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: r.s.SMALL,
                              analyticsLocations: n,
                              onClick: c,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
