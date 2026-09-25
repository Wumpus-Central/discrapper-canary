n.d(i, { default: () => k });
var e = n(477900),
    l = n(582128),
    r = n(702841),
    a = n(189213),
    o = n(964486),
    u = n(793574),
    s = n(688810),
    A = n(280450),
    d = n(696451),
    _ = n(71393),
    c = n(174459),
    f = n(229527),
    g = n(81400),
    E = n(243277),
    h = n(652215),
    N = n(340837),
    O = n(375708);
function k(t) {
    let { onClose: i, transitionState: n, guildId: k } = t,
        p = (0, r.bG)([A.default], () => A.default.getId()),
        T = (0, r.bG)([d.Ay], () => d.Ay.getMember(k, p), [k, p]),
        b = (0, r.bG)([_.A], () => _.A.getGuild(k), [k]),
        I = b?.name ?? "",
        M = (0, f.wj)(T),
        { analyticsLocations: C } = (0, s.Ay)(u.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [D, P] = (0, g.j8)({ guildId: k, analyticsLocations: C }),
        R = M.has(N.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? O.intl.formatToPlainString(O.t.Oh20JS, { guildName: I })
            : O.intl.formatToPlainString(O.t.h8IXqQ, { guildName: I });
    P || (R = O.intl.formatToPlainString(O.t.tcrtME, { guildName: I }));
    let S = P ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
    return ((0, o.Ay)(() => {
        c.default.track(h.HAw.OPEN_MODAL, { type: E.oN, guild_id: k, other_user_id: p });
    }),
    l.useEffect(() => {
        if (null == b) return void i();
    }, [b, i]),
    null == b)
        ? null
        : (0, e.jsx)(a.a, {
              transitionState: n,
              onClose: i,
              title: O.intl.string(O.t["P+6K9C"]),
              subtitle: R,
              actions: [
                  {
                      text: S,
                      onClick: function () {
                          (D(), i());
                      },
                  },
              ],
          });
}
