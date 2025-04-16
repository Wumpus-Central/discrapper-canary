n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(749210),
    a = n(287734),
    u = n(933557),
    s = n(314897),
    c = n(592125),
    d = n(984933),
    b = n(271383),
    g = n(430824),
    Z = n(496675),
    f = n(699516),
    p = n(594174),
    O = n(979651),
    h = n(934415),
    m = n(700785),
    j = n(981631),
    P = n(388032);
function N(e, t) {
    let n = (0, l.e7)([d.ZP], () => d.ZP.getChannels(t)[d.Zb], [t]),
        N = (0, l.e7)(
            [O.Z, c.Z],
            () => {
                let n = O.Z.getUserVoiceChannelId(t, e.id);
                return c.Z.getChannel(n);
            },
            [t, e.id]
        );
    if ((0, l.e7)([b.ZP], () => b.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == N) return null;
    let y = e.id === s.default.getId();
    if (!y && !Z.Z.can(j.Plq.MOVE_MEMBERS, N)) return null;
    let E = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== N.id &&
            (y
                ? Z.Z.can(j.Plq.CONNECT, n) && !(0, h.rY)(n, O.Z, g.Z)
                : Z.Z.can(j.Plq.MOVE_MEMBERS, n) &&
                  (Z.Z.can(j.Plq.CONNECT, n) ||
                      m.BT({
                          permission: j.Plq.CONNECT,
                          user: e,
                          context: n
                      })) &&
                  !(0, h.rY)(n, O.Z, g.Z))
        );
    });
    return 0 === E.length
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'voice-move',
              label: P.NW.string(P.t.FAplmp),
              children: E.map((n) => {
                  let { channel: l } = n;
                  return (0, r.jsx)(
                      i.sNh,
                      {
                          id: l.id,
                          action: () => {
                              e.id === s.default.getId() ? a.default.selectVoiceChannel(l.id) : o.Z.setChannel(t, e.id, l.id);
                          },
                          label: (0, u.F6)(l, p.default, f.Z)
                      },
                      l.id
                  );
              })
          });
}
