t.d(n, { Z: () => c });
var l = t(54381),
    i = t(473749),
    a = t(481060),
    o = t(590961),
    s = t(840724),
    r = t(727366),
    d = t(389901);
function c(e) {
    let { analyticsSectionId: n, applicationId: t, guildId: c, sectionTitle: u, skuIds: f, variant: g = s.Z.SMALL } = e,
        p = i.useMemo(
            () => ({
                pageSection: n,
                pageSectionTitle: u,
            }),
            [n, u],
        );
    return null == f || 0 === f.length
        ? null
        : (0, l.jsx)(o.hL, {
              newValue: p,
              children: (0, l.jsxs)("div", {
                  className: d.sectionContainer,
                  children: [
                      null != u &&
                          u.length > 0 &&
                          (0, l.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: d.sectionTitle,
                              children: u,
                          }),
                      (0, l.jsx)(r.t, {
                          applicationId: t,
                          skuIds: f,
                          variant: g,
                          guildId: c,
                      }),
                  ],
              }),
          });
}
