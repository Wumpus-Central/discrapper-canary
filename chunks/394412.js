n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    a = n(397927),
    r = n(931991),
    o = n(734057),
    d = n(87401),
    c = n(707592),
    u = n(698441),
    h = n(935159),
    A = n(508654),
    _ = n(974930),
    m = n(47868),
    g = n(985018),
    p = n(537512);
function f(e) {
    let { channelId: t, showDismiss: f = !0 } = e,
        x = (0, l.bG)([o.A], () => o.A.getChannel(t), [t]),
        E = (0, A.RO)(t),
        I = null != (0, A.Qs)(t),
        { canManageGuildEvent: C } = (0, r.nr)(x),
        N = (0, l.bG)([d.A], () => E.filter((e) => !d.A.isEventDismissed(e.id)), [E]),
        T = (0, l.cf)([u.Ay], () => N.reduce((e, t) => ((e[t.id] = u.Ay.getUserCount(t.id, (0, _.G3)(t))), e), {}), [
            N,
        ]);
    return N.length < 1 || I
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N.map((e) =>
                  (0, i.jsx)(
                      m.A,
                      {
                          icon: (0, i.jsx)(a.CTc, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: s.A.unsafe_rawColors.GREEN_360.css,
                          title: g.intl.formatToPlainString(C(e) ? g.t["1vGXqM"] : g.t.xMJyla, { eventName: e.name }),
                          description: g.intl.formatToPlainString(g.t.PTebCR, {
                              startTime: (0, _.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              C(e)
                                  ? (0, a.mMO)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("51354"),
                                            n.e("77223"),
                                            n.e("953"),
                                        ]).then(n.bind(n, 199226));
                                        return (n) => (0, i.jsx)(t, { ...n, event: e });
                                    })
                                  : (0, c.uR)({ eventId: e.id });
                          },
                          onDismiss: f
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, h.Nt)(t);
                                }
                              : void 0,
                          userCount: T[e.id],
                          className: p.f,
                      },
                      e.id,
                  ),
              ),
          });
}
