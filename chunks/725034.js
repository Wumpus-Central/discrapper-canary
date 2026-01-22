l.d(i, {
    default: () => k,
}),
    l(896048);
var n = l(627968),
    e = l(64700),
    r = l(158954),
    a = l(417597),
    o = l(964486),
    u = l(793574),
    s = l(688810),
    A = l(961350),
    d = l(696451),
    _ = l(71393),
    c = l(954571),
    f = l(229527),
    g = l(81400),
    E = l(411335),
    N = l(652215),
    O = l(340837),
    h = l(985018);

function k(t) {
    var i;
    let { onClose: l, transitionState: k, guildId: p } = t,
        M = (0, a.bG)([A.default], () => A.default.getId()),
        T = (0, a.bG)([d.Ay], () => d.Ay.getMember(p, M), [p, M]),
        b = (0, a.bG)([_.A], () => _.A.getGuild(p), [p]),
        C = null != (i = null == b ? void 0 : b.name) ? i : "",
        D = (0, f.wj)(T),
        { analyticsLocations: I } = (0, s.Ay)(u.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [P, R] = (0, g.j8)({
            guildId: p,
            analyticsLocations: I,
        }),
        S = D.has(O.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? h.intl.formatToPlainString(h.t.Oh20JS, {
                  guildName: C,
              })
            : h.intl.formatToPlainString(h.t["+VAZ/Z"], {
                  guildName: C,
              });
    R ||
        (S = h.intl.formatToPlainString(h.t.tcrtME, {
            guildName: C,
        }));
    let U = R ? h.intl.string(h.t.Viksoo) : h.intl.string(h.t.WikgZ1);
    return ((0, o.Ay)(() => {
        c.default.track(N.HAw.OPEN_MODAL, {
            type: E.oN,
            guild_id: p,
            other_user_id: M,
        });
    }),
    e.useEffect(() => {
        if (null == b) return void l();
    }, [b, l]),
    null == b)
        ? null
        : (0, n.jsx)(r.Modal, {
              transitionState: k,
              onClose: l,
              title: h.intl.string(h.t["P+6K9C"]),
              subtitle: S,
              actions: [
                  {
                      text: U,
                      onClick: () => {
                          P(), l();
                      },
                  },
              ],
          });
}
