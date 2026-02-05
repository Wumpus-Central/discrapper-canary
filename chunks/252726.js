n.d(t, { A: () => y });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(686956),
    d = n(956793),
    o = n(47167),
    u = n(961350),
    s = n(734057),
    c = n(808728),
    A = n(696451),
    E = n(71393),
    _ = n(576705),
    g = n(994500),
    M = n(287809),
    O = n(977997),
    I = n(147036),
    S = n(488926),
    m = n(652215),
    T = n(985018);
function y(e, t) {
    let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        y = (0, i.bG)([O.A, s.A], () => {
            let n = O.A.getUserVoiceChannelId(t, e.id);
            return s.A.getChannel(n);
        }, [t, e.id]);
    if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == y) return null;
    let N = e.id === u.default.getId();
    if (!N && !_.A.can(m.xBc.MOVE_MEMBERS, y)) return null;
    let C = n.filter((t) => {
        let { channel: n } = t;
        return (
            n.id !== y.id &&
            (N
                ? _.A.can(m.xBc.CONNECT, n) && !(0, I.Pd)(n, O.A, E.A)
                : _.A.can(m.xBc.MOVE_MEMBERS, n) &&
                  (_.A.can(m.xBc.CONNECT, n) || S.$3({ permission: m.xBc.CONNECT, user: e, context: n })) &&
                  !(0, I.Pd)(n, O.A, E.A))
        );
    });
    return 0 === C.length
        ? null
        : (0, l.jsx)(a.Drp, {
              id: "voice-move",
              label: T.intl.string(T.t.FAplms),
              children: C.map((n) => {
                  let { channel: i } = n;
                  return (0, l.jsx)(
                      a.Drp,
                      {
                          id: i.id,
                          action: () => {
                              e.id === u.default.getId()
                                  ? d.default.selectVoiceChannel(i.id)
                                  : r.A.setChannel(t, e.id, i.id);
                          },
                          label: (0, o.m1)(i, M.default, g.A),
                      },
                      i.id,
                  );
              }),
          });
}
