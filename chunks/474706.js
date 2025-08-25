n.d(t, { f: () => f });
var r = n(951288),
    i = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(987209),
    l = n(347896),
    c = n(717401),
    u = n(897942),
    d = n(487276);
function f() {
    var e;
    let t = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { claimableRewards: n } = (0, s.wD)(),
        f = (0, l.Z)(),
        _ = null == f ? void 0 : f.planSelection,
        p = null == _ || null == (e = _.getBackgroundImageUrl) ? void 0 : e.call(_),
        h = (0, c.Tl)(null == _ ? void 0 : _.gradientConfig);
    return null == _ || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.container,
              style: null != p ? { backgroundImage: "url(".concat(p, ")") } : h,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.textSection,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              children: _.heading(),
                          }),
                          null != _.subheading &&
                              n.length > 1 &&
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  className: d.subheading,
                                  children: _.subheading(n.length),
                              }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: d.avatar,
                      children: (0, r.jsx)(u.Z, {
                          maxRewardImageSrc: _.getImageUrl(!0, t),
                          claimableRewards: n,
                          size: o.EFr.SIZE_48,
                          imageScaling: 2.1,
                      }),
                  }),
              ],
          });
}
