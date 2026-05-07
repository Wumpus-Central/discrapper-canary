l.d(t, { A: () => N });
var n = l(627968),
    a = l(64700),
    i = l(17928),
    s = l(477782),
    r = l(192308),
    u = l(80682),
    c = l(267102),
    d = l(206835),
    A = l(903209),
    o = l(495544),
    g = l(696451),
    h = l(71393),
    p = l(576705),
    G = l(287809),
    M = l(652215),
    y = l(375708);
function N(e) {
    let { guildId: t, userId: N, analyticsLocation: f, analyticsLocations: C, context: E, icon: b } = e,
        I = h.A.getGuild(t),
        O = o.default.getId(),
        k = (0, i.bG)([G.default], () => G.default.getUser(N)),
        B = (0, i.bG)([g.Ay], () => g.Ay.isGuestOrLurker(t, N), [t, N]);
    (0, i.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
    let L = a.useMemo(() => ({ [t]: [N] }), [t, N]);
    (0, u.Eq)(L, "useChangeIdentityItem");
    let P = E === M.BRT.POPOUT,
        U = (0, d.A)({ guild: I, analyticsLocations: C }),
        _ = (0, c.aL)();
    if (null == I || P) return null;
    let x = O === N && (p.A.can(M.xBc.CHANGE_NICKNAME, I) || p.A.can(M.xBc.MANAGE_NICKNAMES, I)),
        j = O === N,
        m = p.A.canManageUser(M.xBc.MANAGE_NICKNAMES, N, I);
    if (!(x || m || j) || null == k || B) return null;
    let K = I.features.has(M.GuildFeatures.HUB) ? y.intl.string(y.t["+MWrWt"]) : y.intl.string(y.t["PKQB/H"]),
        S = j ? K : y.intl.string(y.t.dilOF6);
    return (0, n.jsx)(s.Dr, {
        id: "change-nickname",
        label: S,
        icon: b,
        leadingAccessory: null != b ? { type: "icon", icon: b } : void 0,
        action: () => {
            j
                ? ((0, A.A)(k.id, k.getAvatarURL(t, 80), { guildId: t }),
                  U(),
                  _.dispatch(M.jej.POPOUT_CLOSE),
                  (0, r.closeAllModals)())
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          l.e("17094"),
                          l.e("52318"),
                          l.e("54975"),
                          l.e("48635"),
                      ]).then(l.bind(l, 752118));
                      return (l) =>
                          (0, n.jsx)(e, { ...l, guildId: t, user: k, analyticsSource: f, analyticsLocations: C });
                  });
        },
    });
}
