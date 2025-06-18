n.d(t, { Z: () => p });
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
    f = n(430824),
    Z = n(496675),
    b = n(699516),
    O = n(594174),
    m = n(979651),
    h = n(934415),
    j = n(700785),
    v = n(981631),
    E = n(388032);
function p(e, t) {
    let n = (0, i.e7)([c.ZP], () => c.ZP.getChannels(t)[c.Zb], [t]),
        p = (0, i.e7)(
            [m.Z, d.Z],
            () => {
                let n = m.Z.getUserVoiceChannelId(t, e.id);
                return d.Z.getChannel(n);
            },
            [t, e.id]
        );
    if ((0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == p) return null;
    let P = e.id === u.default.getId();
    if (!P && !Z.Z.can(v.Plq.MOVE_MEMBERS, p)) return null;
    let y = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== p.id &&
            (P
                ? Z.Z.can(v.Plq.CONNECT, n) && !(0, h.rY)(n, m.Z, f.Z)
                : Z.Z.can(v.Plq.MOVE_MEMBERS, n) &&
                  (Z.Z.can(v.Plq.CONNECT, n) ||
                      j.BT({
                          permission: v.Plq.CONNECT,
                          user: e,
                          context: n
                      })) &&
                  !(0, h.rY)(n, m.Z, f.Z))
        );
    });
    return 0 === y.length
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'voice-move',
              label: E.intl.string(E.t.FAplmp),
              children: y.map((n) => {
                  let { channel: i } = n;
                  return (0, l.jsx)(
                      r.sNh,
                      {
                          id: i.id,
                          action: () => {
                              e.id === u.default.getId() ? a.default.selectVoiceChannel(i.id) : o.Z.setChannel(t, e.id, i.id);
                          },
                          label: (0, s.F6)(i, O.default, b.Z)
                      },
                      i.id
                  );
              })
          });
}
