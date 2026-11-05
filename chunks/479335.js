var r = i(477900),
    s = i(582128),
    n = i(855986),
    a = i(477782),
    t = i(497767),
    o = i(267102),
    u = i(144485),
    l = i(814278),
    d = i(259374),
    p = i(46653),
    k = i(792996);
i.d(
    c,
    {},
    {
        u: function (e) {
            let { userId: c, channelId: i, guildId: h, minimal: f = !1 } = e,
                b = (0, d.k)({ channelId: i }),
                C = (0, n.bG)([p.default], () => p.default.getId() === c),
                v = (0, o.Us)(),
                U = s.useCallback(() => {
                    u.A.openSecureFramesUserVerificationModal(
                        c,
                        i,
                        () => (0, l.z4)({ userId: c, channelId: i, guildId: h }),
                        v,
                    );
                }, [v, i, h, c]);
            return !b || C
                ? null
                : (0, r.jsx)(a.Dr, {
                      id: "secure-frames-user-verification",
                      label: k.intl.string(k.t["8ErYvY"]),
                      action: U,
                      icon: f ? t.UserCheckIcon : null,
                      leadingAccessory: f ? { type: "icon", icon: t.UserCheckIcon } : void 0,
                  });
        },
    },
);
