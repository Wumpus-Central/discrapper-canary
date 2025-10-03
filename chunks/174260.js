t.d(n, { Z: () => d });
var a = t(951288);
t(647438);
var l = t(481060),
    r = t(727366),
    i = t(693965);
function d(e) {
    let { applicationId: n, sectionTitle: t, skuIds: d, isWide: o } = e;
    return null == d || 0 === d.length
        ? null
        : (0, a.jsxs)("div", {
              className: i.sectionContainer,
              children: [
                  null != t &&
                      (0, a.jsx)(l.X6q, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          className: i.sectionTitle,
                          children: t,
                      }),
                  (0, a.jsx)(r.t, {
                      applicationId: n,
                      skuIds: d,
                      isWide: o,
                  }),
              ],
          });
}
