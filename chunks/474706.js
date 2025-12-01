n.d(t, { f: () => f });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(987209),
    l = n(347896),
    c = n(717401),
    u = n(897942),
    d = n(487276);
function f() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { claimableRewards: n } = (0, s.wD)(),
        f = (0, l.Z)(),
        p = null == f ? void 0 : f.planSelection,
        _ = (0, c.Tl)(null == p ? void 0 : p.gradientConfig, { reverse: !0 }),
        m = null == p || null == (e = p.getBannerImageUrl) ? void 0 : e.call(p);
    return null == p || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.container,
              style: _,
              children: [
                  null != m &&
                      (0, r.jsx)("div", {
                          className: d.bannerImage,
                          style: { backgroundImage: "url(".concat(m, ")") },
                      }),
                  (0, r.jsxs)("div", {
                      className: d.textSection,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/bold",
                              color: "always-white",
                              children: p.heading(),
                          }),
                          null != p.subheading &&
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/medium",
                                  color: "always-white",
                                  children: p.subheading(n.length),
                              }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: d.avatar,
                      children: (0, r.jsx)(u.Z, {
                          maxRewardImageSrc: p.getImageUrl(!0, t),
                          claimableRewards: n,
                          size: a.EFr.SIZE_48,
                          imageScaling: t ? 1.9 : 2.4,
                      }),
                  }),
              ],
          });
}
