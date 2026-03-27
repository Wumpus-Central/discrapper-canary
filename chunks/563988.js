n.d(t, { R: () => c });
var a = n(627968),
    l = n(64700),
    i = n(720462),
    r = n(183802),
    s = n(244459);
function c(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: c } = e,
        o = l.useMemo(() => {
            if (null != c)
                return (e, t) => {
                    let { skuId: n, applicationId: a } = t;
                    e.preventDefault(), c(n, a);
                };
        }, [c]);
    return null == t || 0 === t.length
        ? null
        : (0, a.jsx)(i.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, a.jsx)(
                      "div",
                      {
                          className: s.B,
                          children: (0, a.jsx)(r.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: r.s.SMALL,
                              analyticsLocations: n,
                              onClick: o,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
