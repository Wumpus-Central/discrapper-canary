t.d(n, { Z: () => v });
var l = t(54381);
t(473749);
var i = t(442837),
    r = t(481060),
    a = t(749210),
    u = t(287734),
    o = t(933557),
    s = t(314897),
    d = t(592125),
    c = t(984933),
    g = t(271383),
    Z = t(430824),
    f = t(496675),
    b = t(699516),
    O = t(594174),
    m = t(979651),
    h = t(934415),
    p = t(700785),
    P = t(981631),
    j = t(388032);
function v(e, n) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
        v = (0, i.e7)([m.Z, d.Z], () => {
            let t = m.Z.getUserVoiceChannelId(n, e.id);
            return d.Z.getChannel(t);
        }, [n, e.id]);
    if ((0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == v) return null;
    let N = e.id === s.default.getId();
    if (!N && !f.Z.can(P.Plq.MOVE_MEMBERS, v)) return null;
    let y = t.filter((n) => {
        let { channel: t } = n;
        return (
            t.id !== v.id &&
            (N
                ? f.Z.can(P.Plq.CONNECT, t) && !(0, h.rY)(t, m.Z, Z.Z)
                : f.Z.can(P.Plq.MOVE_MEMBERS, t) &&
                  (f.Z.can(P.Plq.CONNECT, t) ||
                      p.BT({
                          permission: P.Plq.CONNECT,
                          user: e,
                          context: t,
                      })) &&
                  !(0, h.rY)(t, m.Z, Z.Z))
        );
    });
    return 0 === y.length
        ? null
        : (0, l.jsx)(r.sNh, {
              id: "voice-move",
              label: j.intl.string(j.t.FAplms),
              children: y.map((t) => {
                  let { channel: i } = t;
                  return (0, l.jsx)(
                      r.sNh,
                      {
                          id: i.id,
                          action: () => {
                              e.id === s.default.getId()
                                  ? u.default.selectVoiceChannel(i.id)
                                  : a.Z.setChannel(n, e.id, i.id);
                          },
                          label: (0, o.F6)(i, O.default, b.Z),
                      },
                      i.id,
                  );
              }),
          });
}
