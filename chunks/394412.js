t.d(n, { A: () => E });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(827734),
    s = t(192308),
    r = t(81466),
    o = t(931991),
    c = t(734057),
    u = t(87401),
    d = t(707592),
    A = t(698441),
    h = t(935159),
    p = t(508654),
    m = t(974930),
    g = t(47868),
    f = t(985018),
    C = t(282741);
function E(e) {
    let { channelId: n, showDismiss: E = !0 } = e,
        v = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]),
        I = (0, p.RO)(n),
        x = null != (0, p.Qs)(n),
        { canManageGuildEvent: T } = (0, o.nr)(v),
        _ = (0, i.bG)([u.A], () => I.filter((e) => !u.A.isEventDismissed(e.id)), [I]),
        j = (0, i.cf)([A.Ay], () => _.reduce((e, n) => ((e[n.id] = A.Ay.getUserCount(n.id, (0, m.G3)(n))), e), {}), [
            _,
        ]);
    return _.length < 1 || x
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: _.map((e) =>
                  (0, l.jsx)(
                      g.A,
                      {
                          icon: (0, l.jsx)(r.C, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: a.A.unsafe_rawColors.GREEN_360.css,
                          title: f.intl.formatToPlainString(T(e) ? f.t["1vGXqM"] : f.t.xMJyla, { eventName: e.name }),
                          description: f.intl.formatToPlainString(f.t.PTebCR, {
                              startTime: (0, m.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              T(e)
                                  ? (0, s.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            t.e("51354"),
                                            t.e("77223"),
                                            t.e("30020"),
                                        ]).then(t.bind(t, 199226));
                                        return (t) => (0, l.jsx)(n, { ...t, event: e });
                                    })
                                  : (0, d.uR)({ eventId: e.id });
                          },
                          onDismiss: E
                              ? () => {
                                    var n;
                                    return (n = e.id), void (0, h.Nt)(n);
                                }
                              : void 0,
                          userCount: j[e.id],
                          className: C.f,
                      },
                      e.id,
                  ),
              ),
          });
}
