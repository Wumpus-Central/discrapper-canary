"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    r = n(397927),
    a = n(931991),
    o = n(734057),
    c = n(87401),
    d = n(707592),
    u = n(698441),
    h = n(935159),
    A = n(508654),
    m = n(974930),
    _ = n(47868),
    p = n(985018),
    g = n(537512);
function f(e) {
    let { channelId: t, showDismiss: f = !0 } = e,
        x = (0, s.bG)([o.A], () => o.A.getChannel(t), [t]),
        E = (0, A.RO)(t),
        C = null != (0, A.Qs)(t),
        { canManageGuildEvent: I } = (0, a.nr)(x),
        N = (0, s.bG)([c.A], () => E.filter((e) => !c.A.isEventDismissed(e.id)), [E]),
        b = (0, s.cf)([u.Ay], () => N.reduce((e, t) => ((e[t.id] = u.Ay.getUserCount(t.id, (0, m.G3)(t))), e), {}), [
            N,
        ]);
    return N.length < 1 || C
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N.map((e) =>
                  (0, i.jsx)(
                      _.A,
                      {
                          icon: (0, i.jsx)(r.CTc, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: l.A.unsafe_rawColors.GREEN_360.css,
                          title: p.intl.formatToPlainString(I(e) ? p.t["1vGXqM"] : p.t.xMJyla, { eventName: e.name }),
                          description: p.intl.formatToPlainString(p.t.PTebCR, {
                              startTime: (0, m.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              I(e)
                                  ? (0, r.mMO)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("51354"),
                                            n.e("77223"),
                                            n.e("953"),
                                        ]).then(n.bind(n, 199226));
                                        return (n) => (0, i.jsx)(t, { ...n, event: e });
                                    })
                                  : (0, d.uR)({ eventId: e.id });
                          },
                          onDismiss: f
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, h.Nt)(t);
                                }
                              : void 0,
                          userCount: b[e.id],
                          className: g.f,
                      },
                      e.id,
                  ),
              ),
          });
}
