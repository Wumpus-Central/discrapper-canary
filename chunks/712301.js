n.d(t, { Z: () => P });
var l = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    o = n(749210),
    a = n(287734),
    s = n(933557),
    u = n(314897),
    d = n(592125),
    c = n(984933),
    g = n(271383),
    Z = n(430824),
    f = n(496675),
    b = n(699516),
    m = n(594174),
    O = n(979651),
    h = n(934415),
    E = n(700785),
    j = n(981631),
    v = n(388032);
function P(e, t) {
    let n = (0, i.e7)([c.ZP], () => c.ZP.getChannels(t)[c.Zb], [t]),
        P = (0, i.e7)(
            [O.Z, d.Z],
            () => {
                let n = O.Z.getUserVoiceChannelId(t, e.id);
                return d.Z.getChannel(n);
            },
            [t, e.id]
        );
    if ((0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == P) return null;
    let p = e.id === u.default.getId();
    if (!p && !f.Z.can(j.Plq.MOVE_MEMBERS, P)) return null;
    let y = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== P.id &&
            (p
                ? f.Z.can(j.Plq.CONNECT, n) && !(0, h.rY)(n, O.Z, Z.Z)
                : f.Z.can(j.Plq.MOVE_MEMBERS, n) &&
                  (f.Z.can(j.Plq.CONNECT, n) ||
                      E.BT({
                          permission: j.Plq.CONNECT,
                          user: e,
                          context: n
                      })) &&
                  !(0, h.rY)(n, O.Z, Z.Z))
        );
    });
    return 0 === y.length
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'voice-move',
              label: v.intl.string(v.t.FAplmp),
              children: y.map((n) => {
                  let { channel: i } = n;
                  return (0, l.jsx)(
                      r.sNh,
                      {
                          id: i.id,
                          action: () => {
                              e.id === u.default.getId() ? a.default.selectVoiceChannel(i.id) : o.Z.setChannel(t, e.id, i.id);
                          },
                          label: (0, s.F6)(i, m.default, b.Z)
                      },
                      i.id
                  );
              })
          });
}
