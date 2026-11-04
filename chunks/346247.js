var i = n(477900),
    a = n(582128),
    l = n(855986),
    s = n(477782),
    r = n(192308),
    u = n(80682),
    c = n(267102),
    d = n(206835),
    A = n(917445),
    o = n(46653),
    g = n(696451),
    h = n(71393),
    G = n(576705),
    p = n(287809),
    E = n(652215),
    M = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, userId: N, analyticsLocation: f, analyticsLocations: y, context: C, icon: O } = e,
                b = h.A.getGuild(t),
                B = o.default.getId(),
                I = (0, l.bG)([p.default], () => p.default.getUser(N)),
                k = (0, l.bG)([g.Ay], () => g.Ay.isGuestOrLurker(t, N), [t, N]);
            (0, l.bG)([G.A], () => G.A.getGuildVersion(t), [t]);
            let L = a.useMemo(() => ({ [t]: [N] }), [t, N]);
            (0, u.Eq)(L, "useChangeIdentityItem");
            let P = C === E.BRT.POPOUT,
                U = C === E.BRT.OVERLAY,
                _ = (0, d.A)({ guild: b, analyticsLocations: y }),
                m = (0, c.aL)();
            if (null == b || P || U) return null;
            let x = B === N && (G.A.can(E.xBc.CHANGE_NICKNAME, b) || G.A.can(E.xBc.MANAGE_NICKNAMES, b)),
                j = B === N,
                K = G.A.canManageUser(E.xBc.MANAGE_NICKNAMES, N, b);
            if (!(x || K || j) || null == I || k) return null;
            let R = b.features.has(E.GuildFeatures.HUB) ? M.intl.string(M.t["+MWrWt"]) : M.intl.string(M.t["PKQB/H"]),
                S = j ? R : M.intl.string(M.t.dilOF6);
            return (0, i.jsx)(s.Dr, {
                id: "change-nickname",
                label: S,
                icon: O,
                leadingAccessory: null != O ? { type: "icon", icon: O } : void 0,
                action: () => {
                    j
                        ? ((0, A.A)(I.id, I.getAvatarURL(t, 80), { guildId: t }),
                          _(),
                          m.dispatch(E.jej.POPOUT_CLOSE),
                          (0, r.s7)())
                        : (0, r.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e(611137),
                                  n.e(144909),
                                  n.e(188941),
                                  n.e(928662),
                                  n.e(448635),
                              ]).then(n.bind(n, 752118));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildId: t,
                                      user: I,
                                      analyticsSource: f,
                                      analyticsLocations: y,
                                  });
                          });
                },
            });
        },
    },
);
