t.d(l, { e: () => p });
var s = t(477900),
    n = t(582128),
    i = t(403581),
    r = t(939249),
    a = t(320448),
    o = t(532794),
    c = t(871123),
    d = t(69236),
    u = t(421108),
    m = t(910200),
    x = t(202541),
    h = t(873417);
function p(e) {
    let { promotion: l, applicationId: t, analyticsLocations: p, onUpsellClick: b } = e,
        j = (0, d.W8)(),
        _ = null != l.reward ? null : i.t,
        N = n.useCallback(() => {
            b(),
                (0, o.A)({
                    subscriptionTier: x.pe.TIER_2,
                    applicationId: t,
                    analyticsLocations: p,
                    ...(0, c.zl)(l.rewardRequirements),
                });
        }, [b, t, p, l.rewardRequirements]);
    return null != l.endsAt && null == (0, u.ZH)(l.endsAt)
        ? null
        : "nitro" !== l.flavor
          ? (0, s.jsx)(m.O0, { Icon: l.Icon, text: l.text, endDatetime: l.endsAt, tooltip: l.tooltip })
          : j
            ? (0, s.jsx)(m.O0, {
                  gradientColor: "nitro-pink",
                  Icon: _,
                  text: l.text,
                  endDatetime: l.endsAt,
                  tooltip: l.tooltip,
              })
            : (0, s.jsx)(r.D, {
                  className: h.U,
                  onClick: N,
                  children: (0, s.jsx)(m.Ay, {
                      gradientColor: "nitro-pink",
                      Icon: _,
                      text: l.text,
                      tooltip: l.tooltip,
                      trailing: (0, s.jsx)(a._, { size: "xs", color: "currentColor" }),
                  }),
              });
}
