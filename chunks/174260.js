n.d(t, { Z: () => d });
var a = n(951288);
n(647438);
var r = n(481060),
    l = n(727366),
    i = n(650750);
function d(e) {
    let { applicationId: t, guildId: n, sectionTitle: d, skuIds: o, isWide: c } = e;
    return null == o || 0 === o.length
        ? null
        : (0, a.jsxs)("div", {
              className: i.sectionContainer,
              children: [
                  null != d &&
                      (0, a.jsx)(r.X6q, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          className: i.sectionTitle,
                          children: d,
                      }),
                  (0, a.jsx)(l.t, {
                      applicationId: t,
                      skuIds: o,
                      isWide: c,
                      guildId: n,
                  }),
              ],
          });
}
