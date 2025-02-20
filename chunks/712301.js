n.d(t, { Z: () => m });
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
    f = n(271383),
    Z = n(430824),
    b = n(496675),
    g = n(699516),
    O = n(594174),
    p = n(979651),
    P = n(934415),
    h = n(700785),
    N = n(981631),
    j = n(388032);
function m(e, t) {
    let n = (0, l.e7)([d.ZP], () => d.ZP.getChannels(t)[d.Zb], [t]),
        m = (0, l.e7)(
            [p.Z, c.Z],
            () => {
                let n = p.Z.getUserVoiceChannelId(t, e.id);
                return c.Z.getChannel(n);
            },
            [t, e.id]
        );
    if ((0, l.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == m) return null;
    let y = e.id === s.default.getId();
    if (!y && !b.Z.can(N.Plq.MOVE_MEMBERS, m)) return null;
    let v = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== m.id &&
            (y
                ? b.Z.can(N.Plq.CONNECT, n) && !(0, P.rY)(n, p.Z, Z.Z)
                : b.Z.can(N.Plq.MOVE_MEMBERS, n) &&
                  (b.Z.can(N.Plq.CONNECT, n) ||
                      h.BT({
                          permission: N.Plq.CONNECT,
                          user: e,
                          context: n
                      })) &&
                  !(0, P.rY)(n, p.Z, Z.Z))
        );
    });
    return 0 === v.length
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'voice-move',
              label: j.NW.string(j.t.FAplmp),
              children: v.map((n) => {
                  let { channel: l } = n;
                  return (0, r.jsx)(
                      i.sNh,
                      {
                          id: l.id,
                          action: () => {
                              e.id === s.default.getId() ? a.default.selectVoiceChannel(l.id) : o.Z.setChannel(t, e.id, l.id);
                          },
                          label: (0, u.F6)(l, O.default, g.Z)
                      },
                      l.id
                  );
              })
          });
}
