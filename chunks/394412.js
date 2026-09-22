t.d(n, { A: () => f });
var i = t(477900);
t(582128);
var l = t(17928),
    s = t(661531),
    a = t(192308),
    o = t(81466),
    r = t(931991),
    c = t(734057),
    u = t(87401),
    d = t(707592),
    A = t(698441),
    m = t(935159),
    h = t(508654),
    C = t(974930),
    p = t(47868),
    x = t(375708),
    g = t(410476);
function f(e) {
    let { channelId: n, showDismiss: f = !0 } = e,
        E = (0, l.bG)([c.A], () => c.A.getChannel(n), [n]),
        I = (0, h.RO)(n),
        v = null != (0, h.Qs)(n),
        { canManageGuildEvent: T } = (0, r.nr)(E),
        j = (0, l.bG)([u.A], () => I.filter((e) => !u.A.isEventDismissed(e.id)), [I]),
        N = (0, l.cf)([A.Ay], () => j.reduce((e, n) => ((e[n.id] = A.Ay.getUserCount(n.id, (0, C.G3)(n))), e), {}), [
            j,
        ]);
    return j.length < 1 || v
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: j.map((e) =>
                  (0, i.jsx)(
                      p.A,
                      {
                          icon: (0, i.jsx)(o.CalendarIcon, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: s.A.unsafe_rawColors.GREEN_360.css,
                          title: x.intl.formatToPlainString(T(e) ? x.t["1vGXqM"] : x.t.xMJyla, { eventName: e.name }),
                          description: x.intl.formatToPlainString(x.t.PTebCR, {
                              startTime: (0, C.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              T(e)
                                  ? (0, a.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            t.e("476227"),
                                            t.e("998835"),
                                            t.e("107427"),
                                            t.e("970644"),
                                            t.e("901922"),
                                            t.e("449347"),
                                            t.e("468248"),
                                            t.e("69772"),
                                        ]).then(t.bind(t, 914119));
                                        return (t) => (0, i.jsx)(n, { ...t, event: e });
                                    })
                                  : (0, d.uR)({ eventId: e.id });
                          },
                          onDismiss: f
                              ? () => {
                                    var n;
                                    return ((n = e.id), void (0, m.Nt)(n));
                                }
                              : void 0,
                          userCount: N[e.id],
                          className: g.f,
                      },
                      e.id,
                  ),
              ),
          });
}
