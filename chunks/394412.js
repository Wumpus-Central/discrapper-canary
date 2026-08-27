t.d(n, { A: () => g });
var l = t(477900);
t(582128);
var i = t(17928),
    a = t(661531),
    s = t(192308),
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
    f = t(375708),
    p = t(410476);
function g(e) {
    let { channelId: n, showDismiss: g = !0 } = e,
        x = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]),
        I = (0, h.RO)(n),
        v = null != (0, h.Qs)(n),
        { canManageGuildEvent: T } = (0, o.nr)(x),
        _ = (0, i.bG)([u.A], () => I.filter((e) => !u.A.isEventDismissed(e.id)), [I]),
        j = (0, i.cf)([A.Ay], () => _.reduce((e, n) => ((e[n.id] = A.Ay.getUserCount(n.id, (0, C.G3)(n))), e), {}), [
            _,
        ]);
    return _.length < 1 || v
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: _.map((e) =>
                  (0, l.jsx)(
                      E.A,
                      {
                          icon: (0, l.jsx)(r.CalendarIcon, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: a.A.unsafe_rawColors.GREEN_360.css,
                          title: f.intl.formatToPlainString(T(e) ? f.t["1vGXqM"] : f.t.xMJyla, { eventName: e.name }),
                          description: f.intl.formatToPlainString(f.t.PTebCR, {
                              startTime: (0, C.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              T(e)
                                  ? (0, s.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            t.e("931937"),
                                            t.e("998835"),
                                            t.e("107427"),
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
                          onDismiss: g
                              ? () => {
                                    var n;
                                    return (n = e.id), void (0, m.Nt)(n);
                                }
                              : void 0,
                          userCount: j[e.id],
                          className: p.f,
                      },
                      e.id,
                  ),
              ),
          });
}
