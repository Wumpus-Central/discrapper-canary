t.d(l, { e: () => b });
var s = t(477900),
    n = t(582128),
    r = t(403581),
    i = t(939249),
    a = t(320448),
    o = t(75678),
    c = t(871123),
    u = t(906383),
    d = t(421108),
    m = t(910200),
    x = t(202541),
    h = t(873417);
function b(e) {
    let { promotion: l, reward: t, applicationId: b, analyticsLocations: p, onUpsellClick: j } = e,
        _ = (0, u.Pc)(l),
        f = null != t ? null : r.t,
        v = n.useCallback(() => {
            (j(),
                (0, o.A)({
                    subscriptionTier: x.pe.TIER_2,
                    applicationId: b,
                    analyticsLocations: p,
                    ...(0, c.zl)(l.rewardRequirements),
                }));
        }, [j, b, p, l.rewardRequirements]);
    return null != l.endsAt && null == (0, d.ZH)(l.endsAt)
        ? null
        : "nitro" !== l.flavor
          ? (0, s.jsx)(m.O0, { Icon: l.Icon, text: l.text, endDatetime: l.endsAt, tooltip: l.tooltip })
          : (0, u.ad)(_)
            ? (0, s.jsx)(i.D, {
                  className: h.U,
                  onClick: v,
                  children: (0, s.jsx)(m.Ay, {
                      gradientColor: "nitro-pink",
                      Icon: f,
                      text: l.text,
                      tooltip: l.tooltip,
                      trailing: (0, s.jsx)(a._, { size: "xs", color: "currentColor" }),
                  }),
              })
            : (0, s.jsx)(m.O0, {
                  gradientColor: "nitro-pink",
                  Icon: f,
                  text: l.text,
                  endDatetime: l.endsAt,
                  tooltip: l.tooltip,
              });
}
