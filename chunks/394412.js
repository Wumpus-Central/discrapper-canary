t.d(n, { A: () => p });
var i = t(477900);
t(582128);
var l = t(17928),
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
    g = t(974930),
    x = t(47868),
    C = t(105292),
    f = t(410476);
function p(e) {
    let { channelId: n, showDismiss: p = !0 } = e,
        E = (0, l.bG)([c.A], () => c.A.getChannel(n), [n]),
        j = (0, m.RO)(n),
        v = null != (0, m.Qs)(n),
        { canManageGuildEvent: I } = (0, o.nr)(E),
        N = (0, l.bG)([u.A], () => j.filter((e) => !u.A.isEventDismissed(e.id)), [j]),
        T = (0, l.cf)([A.Ay], () => N.reduce((e, n) => ((e[n.id] = A.Ay.getUserCount(n.id, (0, g.G3)(n))), e), {}), [
            N,
        ]);
    return N.length < 1 || v
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N.map((e) =>
                  (0, i.jsx)(
                      x.A,
                      {
                          icon: (0, i.jsx)(r.CalendarIcon, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: s.A.unsafe_rawColors.GREEN_360.css,
                          title: C.intl.formatToPlainString(I(e) ? C.t["1vGXqM"] : C.t.xMJyla, { eventName: e.name }),
                          description: C.intl.formatToPlainString(C.t.PTebCR, {
                              startTime: (0, g.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              I(e)
                                  ? (0, a.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            t.e("884841"),
                                            t.e("998835"),
                                            t.e("107427"),
                                            t.e("901922"),
                                            t.e("970644"),
                                            t.e("449347"),
                                            t.e("468248"),
                                            t.e("69772"),
                                        ]).then(t.bind(t, 914119));
                                        return (t) => (0, i.jsx)(n, { ...t, event: e });
                                    })
                                  : (0, d.uR)({ eventId: e.id });
                          },
                          onDismiss: p
                              ? () => {
                                    var n;
                                    return ((n = e.id), void (0, h.Nt)(n));
                                }
                              : void 0,
                          userCount: T[e.id],
                          className: f.f,
                      },
                      e.id,
                  ),
              ),
          });
}
