n.d(t, { Z: () => m });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    a = n(749210),
    o = n(287734),
    u = n(933557),
    c = n(314897),
    s = n(592125),
    d = n(984933),
    f = n(271383),
    b = n(430824),
    g = n(496675),
    O = n(699516),
    E = n(594174),
    Z = n(979651),
    P = n(934415),
    p = n(700785),
    y = n(981631),
    j = n(388032);
function m(e, t) {
    let n = (0, r.e7)([d.ZP], () => d.ZP.getChannels(t)[d.Zb], [t]),
        m = (0, r.e7)([Z.Z, s.Z], () => {
            let n = Z.Z.getUserVoiceChannelId(t, e.id);
            return s.Z.getChannel(n);
        }, [t, e.id]);
    if ((0, r.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == m) return null;
    let h = e.id === c.default.getId();
    if (!h && !g.Z.can(y.Plq.MOVE_MEMBERS, m)) return null;
    let v = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== m.id &&
            (h
                ? g.Z.can(y.Plq.CONNECT, n) && !(0, P.rY)(n, Z.Z, b.Z)
                : g.Z.can(y.Plq.MOVE_MEMBERS, n) &&
                  (g.Z.can(y.Plq.CONNECT, n) ||
                      p.BT({
                          permission: y.Plq.CONNECT,
                          user: e,
                          context: n,
                      })) &&
                  !(0, P.rY)(n, Z.Z, b.Z))
        );
    });
    return 0 === v.length
        ? null
        : (0, l.jsx)(i.sNh, {
              id: "voice-move",
              label: j.intl.string(j.t.FAplmp),
              children: v.map((n) => {
                  let { channel: r } = n;
                  return (0, l.jsx)(
                      i.sNh,
                      {
                          id: r.id,
                          action: () => {
                              e.id === c.default.getId()
                                  ? o.default.selectVoiceChannel(r.id)
                                  : a.Z.setChannel(t, e.id, r.id);
                          },
                          label: (0, u.F6)(r, E.default, O.Z),
                      },
                      r.id,
                  );
              }),
          });
}
