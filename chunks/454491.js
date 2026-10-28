t.d(l, { e: () => p });
var n = t(477900),
    s = t(582128),
    r = t(403581),
    a = t(939249),
    i = t(320448),
    o = t(75678),
    c = t(871123),
    u = t(906383),
    d = t(421108),
    m = t(910200),
    x = t(202541),
    h = t(873417);
function p(e) {
    let { promotion: l, reward: t, applicationId: p, analyticsLocations: b, onUpsellClick: j } = e,
        _ = (0, u.Pc)(l),
        f = null != t ? null : r.t,
        N = s.useCallback(() => {
            (j(),
                (0, o.A)({
                    subscriptionTier: x.pe.TIER_2,
                    applicationId: p,
                    analyticsLocations: b,
                    ...(0, c.zl)(l.rewardRequirements),
                }));
        }, [j, p, b, l.rewardRequirements]);
    return null != l.endsAt && null == (0, d.ZH)(l.endsAt)
        ? null
        : "nitro" !== l.flavor
          ? (0, n.jsx)(m.O0, { className: h.l, Icon: l.Icon, text: l.text, endDatetime: l.endsAt, tooltip: l.tooltip })
          : (0, u.ad)(_)
            ? (0, n.jsx)(a.D, {
                  className: h.U,
                  onClick: N,
                  children: (0, n.jsx)(m.Ay, {
                      className: h.l,
                      gradientColor: "nitro-pink",
                      Icon: f,
                      text: l.text,
                      tooltip: l.tooltip,
                      trailing: (0, n.jsx)(i._, { size: "xs", color: "currentColor" }),
                  }),
              })
            : (0, n.jsx)(m.O0, {
                  className: h.l,
                  gradientColor: "nitro-pink",
                  Icon: f,
                  text: l.text,
                  endDatetime: l.endsAt,
                  tooltip: l.tooltip,
              });
}
