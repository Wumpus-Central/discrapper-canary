n.d(t, { Z: () => d });
var a = n(951288);
n(647438);
var l = n(481060),
    r = n(840724),
    i = n(727366),
    o = n(693965);
function d(e) {
    let { applicationId: t, guildId: n, sectionTitle: d, skuIds: c, variant: s = r.Z.SMALL } = e;
    return null == c || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: o.sectionContainer,
              children: [
                  null != d &&
                      (0, a.jsx)(l.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          className: o.sectionTitle,
                          children: d,
                      }),
                  (0, a.jsx)(i.t, {
                      applicationId: t,
                      skuIds: c,
                      variant: s,
                      guildId: n,
                  }),
              ],
          });
}
