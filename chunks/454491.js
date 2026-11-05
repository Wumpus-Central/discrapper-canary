var n = t(477900),
    s = t(582128),
    r = t(403581),
    a = t(939249),
    i = t(320448),
    o = t(778705),
    c = t(871123),
    u = t(906383),
    d = t(421108),
    m = t(910200),
    x = t(682901),
    h = t(873417);
t.d(
    l,
    {},
    {
        e: function (e) {
            let { promotion: l, reward: t, applicationId: b, analyticsLocations: p, onUpsellClick: j } = e,
                f = (0, u.Pc)(l),
                _ = null != t ? null : r.NitroWheelIcon,
                N = s.useCallback(() => {
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
                  ? (0, n.jsx)(m.O0, {
                        className: h.l,
                        Icon: l.Icon,
                        text: l.text,
                        endDatetime: l.endsAt,
                        tooltip: l.tooltip,
                    })
                  : (0, u.ad)(f)
                    ? (0, n.jsx)(a.D, {
                          className: h.U,
                          onClick: N,
                          children: (0, n.jsx)(m.Ay, {
                              className: h.l,
                              gradientColor: "nitro-pink",
                              Icon: _,
                              text: l.text,
                              tooltip: l.tooltip,
                              trailing: (0, n.jsx)(i.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      })
                    : (0, n.jsx)(m.O0, {
                          className: h.l,
                          gradientColor: "nitro-pink",
                          Icon: _,
                          text: l.text,
                          endDatetime: l.endsAt,
                          tooltip: l.tooltip,
                      });
        },
    },
);
