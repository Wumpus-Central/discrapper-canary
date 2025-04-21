n.d(t, { Z: () => y });
var l = n(200651);
n(192379);
var r = n(442837),
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
function y(e, t) {
    let n = (0, r.e7)([d.ZP], () => d.ZP.getChannels(t)[d.Zb], [t]),
        y = (0, r.e7)(
            [O.Z, c.Z],
            () => {
                let n = O.Z.getUserVoiceChannelId(t, e.id);
                return c.Z.getChannel(n);
            },
            [t, e.id]
        );
    if ((0, r.e7)([b.ZP], () => b.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == y) return null;
    let E = e.id === s.default.getId();
    if (!E && !Z.Z.can(j.Plq.MOVE_MEMBERS, y)) return null;
    let x = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== y.id &&
            (E
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
    return 0 === x.length
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'voice-move',
              label: P.intl.string(P.t.FAplmp),
              children: x.map((n) => {
                  let { channel: r } = n;
                  return (0, l.jsx)(
                      i.sNh,
                      {
                          id: r.id,
                          action: () => {
                              e.id === s.default.getId() ? a.default.selectVoiceChannel(r.id) : o.Z.setChannel(t, e.id, r.id);
                          },
                          label: (0, u.F6)(r, p.default, f.Z)
                      },
                      r.id
                  );
              })
          });
}
