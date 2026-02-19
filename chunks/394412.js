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
    p = n(974930),
    g = n(47868),
    m = n(985018),
    _ = n(242182);
function f(e) {
    let { channelId: t, showDismiss: f = !0 } = e,
        x = (0, s.bG)([o.A], () => o.A.getChannel(t), [t]),
        C = (0, A.RO)(t),
        E = null != (0, A.Qs)(t),
        { canManageGuildEvent: I } = (0, a.nr)(x),
        b = (0, s.bG)([c.A], () => C.filter((e) => !c.A.isEventDismissed(e.id)), [C]),
        N = (0, s.cf)([u.Ay], () => b.reduce((e, t) => ((e[t.id] = u.Ay.getUserCount(t.id, (0, p.G3)(t))), e), {}), [
            b,
        ]);
    return b.length < 1 || E
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: b.map((e) =>
                  (0, i.jsx)(
                      g.A,
                      {
                          icon: (0, i.jsx)(r.CTc, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: l.A.unsafe_rawColors.GREEN_360.css,
                          title: m.intl.formatToPlainString(I(e) ? m.t["1vGXqM"] : m.t.xMJyla, { eventName: e.name }),
                          description: m.intl.formatToPlainString(m.t.PTebCR, {
                              startTime: (0, p.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              I(e)
                                  ? (0, r.mMO)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("51354"),
                                            n.e("77223"),
                                            n.e("24531"),
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
                          userCount: N[e.id],
                          className: _.f,
                      },
                      e.id,
                  ),
              ),
          });
}
