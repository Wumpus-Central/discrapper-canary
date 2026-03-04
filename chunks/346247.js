n.d(t, { A: () => I });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(397927),
    o = n(80682),
    d = n(267102),
    s = n(206835),
    u = n(576622),
    c = n(961350),
    A = n(696451),
    E = n(71393),
    g = n(576705),
    _ = n(287809),
    M = n(652215),
    O = n(985018);
function I(e) {
    let { guildId: t, userId: I, analyticsLocation: m, analyticsLocations: f, context: y, icon: S } = e,
        b = E.A.getGuild(t),
        N = c.default.getId(),
        h = (0, r.bG)([_.default], () => _.default.getUser(I)),
        p = (0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, I), [t, I]);
    (0, r.bG)([g.A], () => g.A.getGuildVersion(t), [t]);
    let T = i.useMemo(() => ({ [t]: [I] }), [t, I]);
    (0, o.Eq)(T, "useChangeIdentityItem");
    let C = y === M.BRT.POPOUT,
        U = (0, s.A)({ guild: b, analyticsLocations: f }),
        D = (0, d.aL)();
    if (null == b || C) return null;
    let R = N === I && (g.A.can(M.xBc.CHANGE_NICKNAME, b) || g.A.can(M.xBc.MANAGE_NICKNAMES, b)),
        L = N === I,
        G = g.A.canManageUser(M.xBc.MANAGE_NICKNAMES, I, b);
    if (!(R || G || L) || null == h || p) return null;
    let x = b.features.has(M.GuildFeatures.HUB) ? O.intl.string(O.t["+MWrWt"]) : O.intl.string(O.t["PKQB/H"]),
        j = L ? x : O.intl.string(O.t.dilOF6);
    return (0, l.jsx)(a.Drp, {
        id: "change-nickname",
        label: j,
        icon: S,
        leadingAccessory: null != S ? { type: "icon", icon: S } : void 0,
        action: () => {
            L
                ? ((0, u.A)(h.id, h.getAvatarURL(t, 80), { guildId: t }),
                  U(),
                  D.dispatch(M.jej.POPOUT_CLOSE),
                  (0, a.s7G)())
                : (0, a.mMO)(async () => {
                      let { default: e } = await n.e("48635").then(n.bind(n, 752118));
                      return (n) =>
                          (0, l.jsx)(e, { ...n, guildId: t, user: h, analyticsSource: m, analyticsLocations: f });
                  });
        },
    });
}
