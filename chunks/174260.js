l.d(e, { Z: () => o });
var t = l(54381);
l(473749);
var i = l(481060),
    a = l(840724),
    d = l(727366),
    r = l(650750);
function o(n) {
    let { applicationId: e, guildId: l, sectionTitle: o, skuIds: s, variant: c = a.Z.SMALL } = n;
    return null == s || 0 === s.length
        ? null
        : (0, t.jsxs)("div", {
              className: r.sectionContainer,
              children: [
                  null != o &&
                      (0, t.jsx)(i.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          className: r.sectionTitle,
                          children: o,
                      }),
                  (0, t.jsx)(d.t, {
                      applicationId: e,
                      skuIds: s,
                      variant: c,
                      guildId: l,
                  }),
              ],
          });
}
