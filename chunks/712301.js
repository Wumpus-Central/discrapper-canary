t.d(n, { Z: () => v });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(749210),
    o = t(287734),
    u = t(933557),
    s = t(314897),
    c = t(592125),
    d = t(984933),
    g = t(271383),
    b = t(430824),
    Z = t(496675),
    f = t(699516),
    p = t(594174),
    O = t(979651),
    m = t(934415),
    h = t(700785),
    j = t(981631),
    P = t(388032);
function v(e, n) {
    let t = (0, i.e7)([d.ZP], () => d.ZP.getChannels(n)[d.Zb], [n]),
        v = (0, i.e7)(
            [O.Z, c.Z],
            () => {
                let t = O.Z.getUserVoiceChannelId(n, e.id);
                return c.Z.getChannel(t);
            },
            [n, e.id]
        );
    if ((0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == v) return null;
    let x = e.id === s.default.getId();
    if (!x && !Z.Z.can(j.Plq.MOVE_MEMBERS, v)) return null;
    let y = t.filter((n) => {
        let { channel: t } = n;
        return (
            t.id !== v.id &&
            (x
                ? Z.Z.can(j.Plq.CONNECT, t) && !(0, m.rY)(t, O.Z, b.Z)
                : Z.Z.can(j.Plq.MOVE_MEMBERS, t) &&
                  (Z.Z.can(j.Plq.CONNECT, t) ||
                      h.BT({
                          permission: j.Plq.CONNECT,
                          user: e,
                          context: t
                      })) &&
                  !(0, m.rY)(t, O.Z, b.Z))
        );
    });
    return 0 === y.length
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'voice-move',
              label: P.intl.string(P.t.FAplmp),
              children: y.map((t) => {
                  let { channel: i } = t;
                  return (0, l.jsx)(
                      r.sNh,
                      {
                          id: i.id,
                          action: () => {
                              e.id === s.default.getId() ? o.default.selectVoiceChannel(i.id) : a.Z.setChannel(n, e.id, i.id);
                          },
                          label: (0, u.F6)(i, p.default, f.Z)
                      },
                      i.id
                  );
              })
          });
}
