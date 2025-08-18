n.d(t, { f: () => m });
var i = n(951288),
    r = n(442837),
    s = n(481060),
    a = n(607070),
    l = n(987209),
    o = n(347896),
    c = n(717401),
    d = n(897942),
    u = n(487276);
function m() {
    let e = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        { claimableRewards: t } = (0, l.wD)(),
        n = (0, o.Z)(),
        m = null == n ? void 0 : n.planSelection,
        p = (0, c.Tl)(null == m ? void 0 : m.gradientConfig);
    return null == m || null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: u.container,
              style: p,
              children: [
                  (0, i.jsxs)("div", {
                      className: u.textSection,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              children: m.heading(),
                          }),
                          null != m.subheading &&
                              t.length > 1 &&
                              (0, i.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  className: u.subheading,
                                  children: m.subheading(t.length),
                              }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: u.avatar,
                      children: (0, i.jsx)(d.Z, {
                          maxRewardImageSrc: m.getImageUrl(!0, e),
                          claimableRewards: t,
                          size: s.EFr.SIZE_48,
                      }),
                  }),
              ],
          });
}
