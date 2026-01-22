n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(686956),
    o = n(956793),
    u = n(47167),
    c = n(961350),
    s = n(734057),
    d = n(808728),
    A = n(696451),
    b = n(71393),
    f = n(576705),
    O = n(994500),
    g = n(287809),
    y = n(977997),
    p = n(147036),
    E = n(488926),
    j = n(652215),
    m = n(985018);
function v(e, t) {
    let n = (0, l.bG)([d.Ay], () => d.Ay.getChannels(t)[d.vM], [t]),
        v = (0, l.bG)([y.A, s.A], () => {
            let n = y.A.getUserVoiceChannelId(t, e.id);
            return s.A.getChannel(n);
        }, [t, e.id]);
    if ((0, l.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == v) return null;
    let _ = e.id === c.default.getId();
    if (!_ && !f.A.can(j.xBc.MOVE_MEMBERS, v)) return null;
    let h = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== v.id &&
            (_
                ? f.A.can(j.xBc.CONNECT, n) && !(0, p.Pd)(n, y.A, b.A)
                : f.A.can(j.xBc.MOVE_MEMBERS, n) &&
                  (f.A.can(j.xBc.CONNECT, n) ||
                      E.$3({
                          permission: j.xBc.CONNECT,
                          user: e,
                          context: n,
                      })) &&
                  !(0, p.Pd)(n, y.A, b.A))
        );
    });
    return 0 === h.length
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "voice-move",
              label: m.intl.string(m.t.FAplms),
              children: h.map((n) => {
                  let { channel: l } = n;
                  return (0, r.jsx)(
                      i.Drp,
                      {
                          id: l.id,
                          action: () => {
                              e.id === c.default.getId()
                                  ? o.default.selectVoiceChannel(l.id)
                                  : a.A.setChannel(t, e.id, l.id);
                          },
                          label: (0, u.m1)(l, g.default, O.A),
                      },
                      l.id,
                  );
              }),
          });
}
