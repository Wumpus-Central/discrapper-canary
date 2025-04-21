n.d(t, { Z: () => M });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(749210),
    o = n(287734),
    u = n(933557),
    c = n(314897),
    s = n(592125),
    d = n(984933),
    f = n(271383),
    O = n(430824),
    E = n(496675),
    g = n(699516),
    b = n(594174),
    y = n(979651),
    _ = n(934415),
    p = n(700785),
    m = n(981631),
    j = n(388032);
function M(e, t) {
    let n = (0, l.e7)([d.ZP], () => d.ZP.getChannels(t)[d.Zb], [t]),
        M = (0, l.e7)(
            [y.Z, s.Z],
            () => {
                let n = y.Z.getUserVoiceChannelId(t, e.id);
                return s.Z.getChannel(n);
            },
            [t, e.id]
        );
    if ((0, l.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == M) return null;
    let P = e.id === c.default.getId();
    if (!P && !E.Z.can(m.Plq.MOVE_MEMBERS, M)) return null;
    let S = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== M.id &&
            (P
                ? E.Z.can(m.Plq.CONNECT, n) && !(0, _.rY)(n, y.Z, O.Z)
                : E.Z.can(m.Plq.MOVE_MEMBERS, n) &&
                  (E.Z.can(m.Plq.CONNECT, n) ||
                      p.BT({
                          permission: m.Plq.CONNECT,
                          user: e,
                          context: n
                      })) &&
                  !(0, _.rY)(n, y.Z, O.Z))
        );
    });
    return 0 === S.length
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'voice-move',
              label: j.intl.string(j.t.FAplmp),
              children: S.map((n) => {
                  let { channel: l } = n;
                  return (0, r.jsx)(
                      i.sNh,
                      {
                          id: l.id,
                          action: () => {
                              e.id === c.default.getId() ? o.default.selectVoiceChannel(l.id) : a.Z.setChannel(t, e.id, l.id);
                          },
                          label: (0, u.F6)(l, b.default, g.Z)
                      },
                      l.id
                  );
              })
          });
}
