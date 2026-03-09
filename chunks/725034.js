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
    h = n(652215),
    N = n(340837),
    O = n(985018);
function k(t) {
    let { onClose: i, transitionState: n, guildId: k } = t,
        p = (0, a.bG)([A.default], () => A.default.getId()),
        M = (0, a.bG)([d.Ay], () => d.Ay.getMember(k, p), [k, p]),
        T = (0, a.bG)([_.A], () => _.A.getGuild(k), [k]),
        b = T?.name ?? "",
        I = (0, f.wj)(M),
        { analyticsLocations: C } = (0, u.Ay)(s.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [D, P] = (0, g.j8)({ guildId: k, analyticsLocations: C }),
        R = I.has(N.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? O.intl.formatToPlainString(O.t.Oh20JS, { guildName: b })
            : O.intl.formatToPlainString(O.t.h8IXqQ, { guildName: b });
    P || (R = O.intl.formatToPlainString(O.t.tcrtME, { guildName: b }));
    let S = P ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
    return ((0, o.Ay)(() => {
        c.default.track(h.HAw.OPEN_MODAL, { type: E.oN, guild_id: k, other_user_id: p });
    }),
    e.useEffect(() => {
        if (null == T) return void i();
    }, [T, i]),
    null == T)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: n,
              onClose: i,
              title: O.intl.string(O.t["P+6K9C"]),
              subtitle: R,
              actions: [
                  {
                      text: S,
                      onClick: () => {
                          D(), i();
                      },
                  },
              ],
          });
}
