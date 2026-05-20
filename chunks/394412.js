t.d(n, { A: () => x });
var l = t(627968);
t(64700);
var i = t(17928),
    s = t(661531),
    a = t(192308),
    r = t(81466),
    o = t(931991),
    c = t(734057),
    u = t(87401),
    d = t(707592),
    A = t(698441),
    h = t(935159),
    m = t(508654),
    C = t(647090),
    E = t(47868),
    p = t(375708),
    g = t(282741);
function x(e) {
    let { channelId: n, showDismiss: x = !0 } = e,
        I = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]),
        f = (0, m.RO)(n),
        T = null != (0, m.Qs)(n),
        { canManageGuildEvent: v } = (0, o.nr)(I),
        _ = (0, i.bG)([u.A], () => f.filter((e) => !u.A.isEventDismissed(e.id)), [f]),
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
                                            t.e("15249"),
                                            t.e("70644"),
                                            t.e("49347"),
                                            t.e("68248"),
                                            t.e("69772"),
                                        ]).then(t.bind(t, 914119));
                                        return (t) => (0, l.jsx)(n, { ...t, event: e });
                                    })
                                  : (0, d.uR)({ eventId: e.id });
                          },
                          onDismiss: x
                              ? () => {
                                    var n;
                                    return (n = e.id), void (0, h.Nt)(n);
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
