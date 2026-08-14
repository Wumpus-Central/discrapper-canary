t.d(n, { A: () => f });
var l = t(477900);
t(582128);
var i = t(17928),
    s = t(661531),
    a = t(192308),
    r = t(81466),
    o = t(931991),
    c = t(734057),
    u = t(87401),
    d = t(707592),
    A = t(698441),
    m = t(935159),
    h = t(508654),
    C = t(974930),
    E = t(47868),
    p = t(375708),
    g = t(822125);
function f(e) {
    let { channelId: n, showDismiss: f = !0 } = e,
        x = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]),
        I = (0, h.RO)(n),
        T = null != (0, h.Qs)(n),
        { canManageGuildEvent: v } = (0, o.nr)(x),
        _ = (0, i.bG)([u.A], () => I.filter((e) => !u.A.isEventDismissed(e.id)), [I]),
        j = (0, i.cf)([A.Ay], () => _.reduce((e, n) => ((e[n.id] = A.Ay.getUserCount(n.id, (0, C.G3)(n))), e), {}), [
            _,
        ]);
    return _.length < 1 || T
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: _.map((e) =>
                  (0, l.jsx)(
                      E.A,
                      {
                          icon: (0, l.jsx)(r.C, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: s.A.unsafe_rawColors.GREEN_360.css,
                          title: p.intl.formatToPlainString(v(e) ? p.t["1vGXqM"] : p.t.xMJyla, { eventName: e.name }),
                          description: p.intl.formatToPlainString(p.t.PTebCR, {
                              startTime: (0, C.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              v(e)
                                  ? (0, a.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            t.e("942725"),
                                            t.e("166509"),
                                            t.e("725296"),
                                            t.e("901922"),
                                            t.e("970644"),
                                            t.e("449347"),
                                            t.e("468248"),
                                            t.e("69772"),
                                        ]).then(t.bind(t, 914119));
                                        return (t) => (0, l.jsx)(n, { ...t, event: e });
                                    })
                                  : (0, d.uR)({ eventId: e.id });
                          },
                          onDismiss: f
                              ? () => {
                                    var n;
                                    return (n = e.id), void (0, m.Nt)(n);
                                }
                              : void 0,
                          userCount: j[e.id],
                          className: g.f,
                      },
                      e.id,
                  ),
              ),
          });
}
