t.d(l, { e: () => b });
var s = t(477900),
    n = t(582128),
    i = t(403581),
    r = t(939249),
    a = t(320448),
    o = t(75678),
    c = t(871123),
    d = t(906383),
    u = t(421108),
    m = t(910200),
    x = t(202541),
    h = t(873417);
function b(e) {
    let { promotion: l, reward: t, applicationId: b, analyticsLocations: p, onUpsellClick: j } = e,
        _ = (0, d.Pc)(l),
        N = null != t ? null : i.t,
        g = n.useCallback(() => {
            (j(),
                (0, o.A)({
                    subscriptionTier: x.pe.TIER_2,
                    applicationId: b,
                    analyticsLocations: p,
                    ...(0, c.zl)(l.rewardRequirements),
                }));
        }, [j, b, p, l.rewardRequirements]);
    return null != l.endsAt && null == (0, u.ZH)(l.endsAt)
        ? null
        : "nitro" !== l.flavor
          ? (0, s.jsx)(m.O0, { Icon: l.Icon, text: l.text, endDatetime: l.endsAt, tooltip: l.tooltip })
          : (0, d.ad)(_)
            ? (0, s.jsx)(r.D, {
                  className: h.U,
                  onClick: g,
                  children: (0, s.jsx)(m.Ay, {
                      gradientColor: "nitro-pink",
                      Icon: N,
                      text: l.text,
                      tooltip: l.tooltip,
                      trailing: (0, s.jsx)(a._, { size: "xs", color: "currentColor" }),
                  }),
              })
            : (0, s.jsx)(m.O0, {
                  gradientColor: "nitro-pink",
                  Icon: N,
                  text: l.text,
                  endDatetime: l.endsAt,
                  tooltip: l.tooltip,
              });
}
