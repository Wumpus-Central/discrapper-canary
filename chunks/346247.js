l.d(t, { A: () => E });
var n = l(627968),
    a = l(64700),
    i = l(17928),
    s = l(477782),
    r = l(192308),
    u = l(80682),
    c = l(267102),
    d = l(206835),
    A = l(903209),
    o = l(280450),
    g = l(696451),
    h = l(71393),
    p = l(576705),
    G = l(287809),
    M = l(652215),
    y = l(375708);
function E(e) {
    let { guildId: t, userId: E, analyticsLocation: N, analyticsLocations: f, context: C, icon: O } = e,
        b = h.A.getGuild(t),
        B = o.default.getId(),
        I = (0, i.bG)([G.default], () => G.default.getUser(E)),
        L = (0, i.bG)([g.Ay], () => g.Ay.isGuestOrLurker(t, E), [t, E]);
    (0, i.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
    let k = a.useMemo(() => ({ [t]: [E] }), [t, E]);
    (0, u.Eq)(k, "useChangeIdentityItem");
    let P = C === M.BRT.POPOUT,
        U = C === M.BRT.OVERLAY,
        _ = (0, d.A)({ guild: b, analyticsLocations: f }),
        x = (0, c.aL)();
    if (null == b || P || U) return null;
    let j = B === E && (p.A.can(M.xBc.CHANGE_NICKNAME, b) || p.A.can(M.xBc.MANAGE_NICKNAMES, b)),
        m = B === E,
        K = p.A.canManageUser(M.xBc.MANAGE_NICKNAMES, E, b);
    if (!(j || K || m) || null == I || L) return null;
    let R = b.features.has(M.GuildFeatures.HUB) ? y.intl.string(y.t["+MWrWt"]) : y.intl.string(y.t["PKQB/H"]),
        S = m ? R : y.intl.string(y.t.dilOF6);
    return (0, n.jsx)(s.Dr, {
        id: "change-nickname",
        label: S,
        icon: O,
        leadingAccessory: null != O ? { type: "icon", icon: O } : void 0,
        action: () => {
            m
                ? ((0, A.A)(I.id, I.getAvatarURL(t, 80), { guildId: t }),
                  _(),
                  x.dispatch(M.jej.POPOUT_CLOSE),
                  (0, r.closeAllModals)())
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([l.e("87761"), l.e("28662"), l.e("48635")]).then(
                          l.bind(l, 752118),
                      );
                      return (l) =>
                          (0, n.jsx)(e, { ...l, guildId: t, user: I, analyticsSource: N, analyticsLocations: f });
                  });
        },
    });
}
