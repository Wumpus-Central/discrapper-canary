t.d(n, { Z: () => P });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(749210),
    o = t(287734),
    u = t(933557),
    s = t(314897),
    c = t(592125),
    d = t(984933),
    g = t(271383),
    Z = t(430824),
    b = t(496675),
    f = t(699516),
    p = t(594174),
    O = t(979651),
    m = t(934415),
    N = t(700785),
    h = t(981631),
    j = t(388032);
function P(e, n) {
    let t = (0, r.e7)([d.ZP], () => d.ZP.getChannels(n)[d.Zb], [n]),
        P = (0, r.e7)(
            [O.Z, c.Z],
            () => {
                let t = O.Z.getUserVoiceChannelId(n, e.id);
                return c.Z.getChannel(t);
            },
            [n, e.id]
        );
    if ((0, r.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == P) return null;
    let x = e.id === s.default.getId();
    if (!x && !b.Z.can(h.Plq.MOVE_MEMBERS, P)) return null;
    let v = t.filter((n) => {
        let { channel: t } = n;
        return (
            t.id !== P.id &&
            (x
                ? b.Z.can(h.Plq.CONNECT, t) && !(0, m.rY)(t, O.Z, Z.Z)
                : b.Z.can(h.Plq.MOVE_MEMBERS, t) &&
                  (b.Z.can(h.Plq.CONNECT, t) ||
                      N.BT({
                          permission: h.Plq.CONNECT,
                          user: e,
                          context: t
                      })) &&
                  !(0, m.rY)(t, O.Z, Z.Z))
        );
    });
    return 0 === v.length
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'voice-move',
              label: j.NW.string(j.t.FAplmp),
              children: v.map((t) => {
                  let { channel: r } = t;
                  return (0, l.jsx)(
                      i.sNh,
                      {
                          id: r.id,
                          action: () => {
                              e.id === s.default.getId() ? o.default.selectVoiceChannel(r.id) : a.Z.setChannel(n, e.id, r.id);
                          },
                          label: (0, u.F6)(r, p.default, f.Z)
                      },
                      r.id
                  );
              })
          });
}
