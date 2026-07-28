t.d(l, { e: () => h });
var s = t(477900),
    n = t(582128),
    i = t(403581),
    r = t(939249),
    a = t(320448),
    o = t(532794),
    c = t(69236),
    d = t(421108),
    u = t(910200),
    m = t(202541),
    x = t(22832);
function h(e) {
    let { promotion: l, applicationId: t, analyticsLocations: h, onUpsellClick: p } = e,
        b = (0, c.W8)(),
        j = null != l.reward ? null : i.t,
        _ = n.useCallback(() => {
            p(), (0, o.A)({ subscriptionTier: m.pe.TIER_2, applicationId: t, analyticsLocations: h });
        }, [p, t, h]);
    return null != l.endsAt && null == (0, d.Z)(l.endsAt)
        ? null
        : "nitro" !== l.flavor
          ? (0, s.jsx)(u.O0, { Icon: l.Icon, text: l.text, endDatetime: l.endsAt, tooltip: l.tooltip })
          : b
            ? (0, s.jsx)(u.O0, {
                  gradientColor: "nitro-pink",
                  Icon: j,
                  text: l.text,
                  endDatetime: l.endsAt,
                  tooltip: l.tooltip,
              })
            : (0, s.jsx)(r.D, {
                  className: x.U,
                  onClick: _,
                  children: (0, s.jsx)(u.Ay, {
                      gradientColor: "nitro-pink",
                      Icon: j,
                      text: l.text,
                      tooltip: l.tooltip,
                      trailing: (0, s.jsx)(a._, { size: "xs", color: "currentColor" }),
                  }),
              });
}
