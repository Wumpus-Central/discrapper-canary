i.d(t, { A: () => S });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    a = i(80682),
    d = i(267102),
    o = i(206835),
    c = i(576622),
    u = i(961350),
    A = i(696451),
    g = i(71393),
    E = i(576705),
    h = i(287809),
    p = i(652215),
    _ = i(985018);
function S(e) {
    let { guildId: t, userId: S, analyticsLocation: b, analyticsLocations: N, context: f, icon: G } = e,
        L = g.A.getGuild(t),
        y = u.default.getId(),
        M = (0, s.bG)([h.default], () => h.default.getUser(S)),
        x = (0, s.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, S), [t, S]);
    (0, s.bG)([E.A], () => E.A.getGuildVersion(t), [t]);
    let v = l.useMemo(() => ({ [t]: [S] }), [t, S]);
    (0, a.E)(v, "useChangeIdentityItem");
    let D = f === p.BRT.POPOUT,
        j = (0, o.A)({ guild: L, analyticsLocations: N }),
        O = (0, d.aL)();
    if (null == L || D) return null;
    let m = y === S && (E.A.can(p.xBc.CHANGE_NICKNAME, L) || E.A.can(p.xBc.MANAGE_NICKNAMES, L)),
        I = y === S,
        U = E.A.canManageUser(p.xBc.MANAGE_NICKNAMES, S, L);
    if (!(m || U || I) || null == M || x) return null;
    let T = L.features.has(p.GuildFeatures.HUB) ? _.intl.string(_.t["+MWrWt"]) : _.intl.string(_.t["PKQB/H"]),
        R = I ? T : _.intl.string(_.t.dilOF6);
    return (0, n.jsx)(r.Drp, {
        id: "change-nickname",
        label: R,
        icon: G,
        leadingAccessory: null != G ? { type: "icon", icon: G } : void 0,
        action: () => {
            I
                ? ((0, c.A)(M.id, M.getAvatarURL(t, 80), { guildId: t }),
                  j(),
                  O.dispatch(p.jej.POPOUT_CLOSE),
                  (0, r.s7G)())
                : (0, r.mMO)(async () => {
                      let { default: e } = await i.e("48635").then(i.bind(i, 752118));
                      return (i) =>
                          (0, n.jsx)(e, { ...i, guildId: t, user: M, analyticsSource: b, analyticsLocations: N });
                  });
        },
    });
}
