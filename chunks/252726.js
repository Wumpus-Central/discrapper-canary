n.d(t, { A: () => N });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(477782),
    a = n(686956),
    o = n(956793),
    d = n(47167),
    u = n(495544),
    s = n(734057),
    c = n(808728),
    A = n(696451),
    E = n(71393),
    _ = n(576705),
    g = n(994500),
    I = n(287809),
    S = n(977997),
    f = n(147036),
    M = n(488926),
    y = n(652215),
    O = n(985018);
function N(e, t) {
    let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        N = (0, i.bG)([S.A, s.A], () => {
            let n = S.A.getUserVoiceChannelId(t, e.id);
            return s.A.getChannel(n);
        }, [t, e.id]);
    if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == N) return null;
    let h = e.id === u.default.getId();
    if (!h && !_.A.can(y.xBc.MOVE_MEMBERS, N)) return null;
    let R = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== N.id &&
            (h
                ? _.A.can(y.xBc.CONNECT, n) && !(0, f.Pd)(n, S.A, E.A)
                : _.A.can(y.xBc.MOVE_MEMBERS, n) &&
                  (_.A.can(y.xBc.CONNECT, n) || M.$3({ permission: y.xBc.CONNECT, user: e, context: n })) &&
                  !(0, f.Pd)(n, S.A, E.A))
        );
    });
    return 0 === R.length
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "voice-move",
              label: O.intl.string(O.t.FAplms),
              children: R.map((n) => {
                  let { channel: i } = n;
                  return (0, l.jsx)(
                      r.Dr,
                      {
                          id: i.id,
                          action: () => {
                              e.id === u.default.getId()
                                  ? o.default.selectVoiceChannel(i.id)
                                  : a.A.setChannel(t, e.id, i.id);
                          },
                          label: (0, d.m1)(i, I.default, g.A),
                      },
                      i.id,
                  );
              }),
          });
}
