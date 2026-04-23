n.d(t, { A: () => M });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(477782),
    o = n(192308),
    d = n(80682),
    u = n(267102),
    s = n(206835),
    c = n(576622),
    A = n(961350),
    E = n(696451),
    _ = n(71393),
    g = n(576705),
    I = n(287809),
    S = n(652215),
    f = n(985018);
function M(e) {
    let { guildId: t, userId: M, analyticsLocation: y, analyticsLocations: O, context: N, icon: h } = e,
        R = _.A.getGuild(t),
        p = A.default.getId(),
        m = (0, r.bG)([I.default], () => I.default.getUser(M)),
        T = (0, r.bG)([E.Ay], () => E.Ay.isGuestOrLurker(t, M), [t, M]);
    (0, r.bG)([g.A], () => g.A.getGuildVersion(t), [t]);
    let b = i.useMemo(() => ({ [t]: [M] }), [t, M]);
    (0, d.Eq)(b, "useChangeIdentityItem");
    let U = N === S.BRT.POPOUT,
        L = (0, s.A)({ guild: R, analyticsLocations: O }),
        C = (0, u.aL)();
    if (null == R || U) return null;
    let G = p === M && (g.A.can(S.xBc.CHANGE_NICKNAME, R) || g.A.can(S.xBc.MANAGE_NICKNAMES, R)),
        D = p === M,
        v = g.A.canManageUser(S.xBc.MANAGE_NICKNAMES, M, R);
    if (!(G || v || D) || null == m || T) return null;
    let x = R.features.has(S.GuildFeatures.HUB) ? f.intl.string(f.t["+MWrWt"]) : f.intl.string(f.t["PKQB/H"]),
        P = D ? x : f.intl.string(f.t.dilOF6);
    return (0, l.jsx)(a.Dr, {
        id: "change-nickname",
        label: P,
        icon: h,
        leadingAccessory: null != h ? { type: "icon", icon: h } : void 0,
        action: () => {
            D
                ? ((0, c.A)(m.id, m.getAvatarURL(t, 80), { guildId: t }),
                  L(),
                  C.dispatch(S.jej.POPOUT_CLOSE),
                  (0, o.closeAllModals)())
                : (0, o.openModalLazy)(async () => {
                      let { default: e } = await n.e("48635").then(n.bind(n, 752118));
                      return (n) =>
                          (0, l.jsx)(e, { ...n, guildId: t, user: m, analyticsSource: y, analyticsLocations: O });
                  });
        },
    });
}
