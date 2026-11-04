var i = n(477900);
n(582128);
var l = n(855986),
    d = n(477782),
    r = n(778858),
    a = n(597798),
    c = n(47167),
    u = n(46653),
    A = n(734057),
    s = n(808728),
    C = n(696451),
    h = n(71393),
    o = n(576705),
    p = n(994500),
    E = n(287809),
    f = n(977997),
    x = n(147036),
    b = n(488926),
    g = n(652215),
    B = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, l.bG)([s.A], () => s.A.getChannels(t).VOCAL, [t]),
                O = (0, l.bG)(
                    [f.A, A.A],
                    () => {
                        let n = f.A.getUserVoiceChannelId(t, e.id);
                        return A.A.getChannel(n);
                    },
                    [t, e.id],
                );
            if ((0, l.bG)([C.Ay], () => C.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == O) return null;
            let M = e.id === u.default.getId();
            if (!M && !o.A.can(g.xBc.MOVE_MEMBERS, O)) return null;
            let N = n.filter((t) => {
                let { channel: n } = t;
                return (
                    n.id !== O.id &&
                    (M
                        ? o.A.can(g.xBc.CONNECT, n) && !(0, x.Pd)(n, f.A, h.A)
                        : o.A.can(g.xBc.MOVE_MEMBERS, n) &&
                          (o.A.can(g.xBc.CONNECT, n) || b.$3({ permission: g.xBc.CONNECT, user: e, context: n })) &&
                          !(0, x.Pd)(n, f.A, h.A))
                );
            });
            return 0 === N.length
                ? null
                : (0, i.jsx)(d.Dr, {
                      id: "voice-move",
                      label: B.intl.string(B.t.FAplms),
                      children: N.map((n) => {
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
        },
    },
);
