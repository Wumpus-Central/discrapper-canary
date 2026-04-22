n.d(t, { A: () => c });
var l = n(627968),
    i = n(311907),
    a = n(990078),
    s = n(408278),
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
            tooltipText: I,
            disabled: x,
            shouldHideButton: m,
            onClick: S,
        } = (0, d.A)({ user: t, channel: n, location: c });
    return !g || m
        ? null
        : (0, l.jsx)(a.m, {
              text: I,
              children: (0, l.jsx)("div", {
                  children: (0, l.jsx)(s.K, {
                      variant: "icon-only",
                      icon: () => (0, l.jsx)(A, { size: "sm", color: p }),
                      "aria-label": u.intl.formatToPlainString(u.t["3IPBG1"], { username: h }),
                      size: "sm",
                      onClick: S,
                      disabled: x,
                  }),
              }),
          });
}
