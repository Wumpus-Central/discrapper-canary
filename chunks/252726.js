n.d(t, { A: () => M });
var i = n(627968);
n(64700);
var l = n(17928),
    d = n(477782),
    r = n(66834),
    a = n(730852),
    c = n(47167),
    u = n(495544),
    A = n(734057),
    s = n(808728),
    C = n(696451),
    h = n(71393),
    o = n(576705),
    p = n(994500),
    E = n(287809),
    f = n(977997),
    x = n(871237),
    b = n(488926),
    g = n(652215),
    B = n(375708);
function M(e, t) {
    let n = (0, l.bG)([s.Ay], () => s.Ay.getChannels(t)[s.vM], [t]),
        M = (0, l.bG)([f.A, A.A], () => {
            let n = f.A.getUserVoiceChannelId(t, e.id);
            return A.A.getChannel(n);
        }, [t, e.id]);
    if ((0, l.bG)([C.Ay], () => C.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == M) return null;
    let N = e.id === u.default.getId();
    if (!N && !o.A.can(g.xBc.MOVE_MEMBERS, M)) return null;
    let O = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== M.id &&
            (N
                ? o.A.can(g.xBc.CONNECT, n) && !(0, x.Pd)(n, f.A, h.A)
                : o.A.can(g.xBc.MOVE_MEMBERS, n) &&
                  (o.A.can(g.xBc.CONNECT, n) || b.$3({ permission: g.xBc.CONNECT, user: e, context: n })) &&
                  !(0, x.Pd)(n, f.A, h.A))
        );
    });
    return 0 === O.length
        ? null
        : (0, i.jsx)(d.Dr, {
              id: "voice-move",
              label: B.intl.string(B.t.FAplms),
              children: O.map((n) => {
                  let { channel: l } = n;
                  return (0, i.jsx)(
                      d.Dr,
                      {
                          id: l.id,
                          action: () => {
                              e.id === u.default.getId()
                                  ? a.default.selectVoiceChannel(l.id)
                                  : r.A.setChannel(t, e.id, l.id);
                          },
                          label: (0, c.m1)(l, E.default, p.A),
                      },
                      l.id,
                  );
              }),
          });
}
