n.d(t, { A: () => c });
var l = n(627968),
    i = n(311907),
    s = n(435371),
    a = n(397927),
    r = n(309010),
    o = n(562153),
    d = n(135635),
    u = n(985018);
function c(e) {
    let { user: t, channel: n, location: c } = e,
        g = (0, i.bG)([r.A], () => r.A.getVoiceChannelId() === n.id),
        h = (0, o.tx)(n.guild_id, n.id, t),
        {
            icon: A,
            iconColor: p,
            tooltipText: m,
            disabled: I,
            shouldHideButton: x,
            onClick: v,
        } = (0, d.A)({ user: t, channel: n, location: c });
    return !g || x
        ? null
        : (0, l.jsx)(s.m_, {
              text: m,
              children: (0, l.jsx)("div", {
                  children: (0, l.jsx)(a.K0, {
                      variant: "icon-only",
                      icon: () => (0, l.jsx)(A, { size: "sm", color: p }),
                      "aria-label": u.intl.formatToPlainString(u.t["3IPBG1"], { username: h }),
                      size: "sm",
                      onClick: v,
                      disabled: I,
                  }),
              }),
          });
}
