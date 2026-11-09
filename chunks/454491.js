var n = t(477900),
    s = t(582128),
    r = t(403581),
    a = t(939249),
    i = t(320448),
    o = t(778705),
    c = t(288106),
    u = t(871123),
    d = t(906383),
    m = t(421108),
    x = t(910200),
    h = t(682901),
    b = t(873417);
t.d(
    l,
    {},
    {
        e: function (e) {
            let { promotion: l, reward: t, applicationId: p, analyticsLocations: j, onUpsellClick: f } = e,
                _ = (0, d.Pc)(l),
                N = (0, m.tm)(l.endsAt),
                v = l.rewardStatus === c.GM.EARNED && null != t,
                I = N && v ? null : l.endsAt,
                g = null != t ? null : r.NitroWheelIcon,
                k = s.useCallback(() => {
                    (f(),
                        (0, o.A)({
                            subscriptionTier: h.pe.TIER_2,
                            applicationId: p,
                            analyticsLocations: j,
                            ...(0, u.zl)(l.rewardRequirements),
                        }));
                }, [f, p, j, l.rewardRequirements]);
            return N && !v
                ? null
                : "nitro" !== l.flavor
                  ? (0, n.jsx)(x.O0, { className: b.l, Icon: l.Icon, text: l.text, endDatetime: I, tooltip: l.tooltip })
                  : (0, d.ad)(_)
                    ? (0, n.jsx)(a.D, {
                          className: b.U,
                          onClick: k,
                          children: (0, n.jsx)(x.Ay, {
                              className: b.l,
                              gradientColor: "nitro-pink",
                              Icon: g,
                              text: l.text,
                              tooltip: l.tooltip,
                              trailing: (0, n.jsx)(i.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      })
                    : (0, n.jsx)(x.O0, {
                          className: b.l,
                          gradientColor: "nitro-pink",
                          Icon: g,
                          text: l.text,
                          endDatetime: I,
                          tooltip: l.tooltip,
                      });
        },
    },
);
