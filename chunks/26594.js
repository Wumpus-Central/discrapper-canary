var l = n(318254),
    i = n(792996),
    r = n(427483);
n.d(
    t,
    {},
    {
        G: function (e) {
            let { isGift: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e?.metadata?.orbs_reward;
            return null != n && n > 0
                ? {
                      Icon: l.OrbsIcon,
                      text: i.intl.format(t ? i.t["ZV+aS9"] : i.t["0StwHe"], { orbCount: n }),
                      graphic: { type: "video", url: r.A },
                  }
                : null;
        },
    },
);
