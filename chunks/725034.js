n.d(i, { default: () => k });
var l = n(627968),
    e = n(64700),
    r = n(158954),
    a = n(417597),
    o = n(964486),
    s = n(793574),
    u = n(688810),
    A = n(961350),
    d = n(696451),
    _ = n(71393),
    c = n(954571),
    f = n(229527),
    g = n(81400),
    E = n(411335),
    N = n(652215),
    O = n(340837),
    h = n(985018);
function k(t) {
    let { onClose: i, transitionState: n, guildId: k } = t,
        p = (0, a.bG)([A.default], () => A.default.getId()),
        M = (0, a.bG)([d.Ay], () => d.Ay.getMember(k, p), [k, p]),
        T = (0, a.bG)([_.A], () => _.A.getGuild(k), [k]),
        b = T?.name ?? "",
        C = (0, f.wj)(M),
        { analyticsLocations: D } = (0, u.Ay)(s.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [I, P] = (0, g.j8)({ guildId: k, analyticsLocations: D }),
        R = C.has(O.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? h.intl.formatToPlainString(h.t.Oh20JS, { guildName: b })
            : h.intl.formatToPlainString(h.t["+VAZ/Z"], { guildName: b });
    P || (R = h.intl.formatToPlainString(h.t.tcrtME, { guildName: b }));
    let S = P ? h.intl.string(h.t.Viksoo) : h.intl.string(h.t.WikgZ1);
    return ((0, o.Ay)(() => {
        c.default.track(N.HAw.OPEN_MODAL, { type: E.oN, guild_id: k, other_user_id: p });
    }),
    e.useEffect(() => {
        if (null == T) return void i();
    }, [T, i]),
    null == T)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: n,
              onClose: i,
              title: h.intl.string(h.t["P+6K9C"]),
              subtitle: R,
              actions: [
                  {
                      text: S,
                      onClick: () => {
                          I(), i();
                      },
                  },
              ],
          });
}
