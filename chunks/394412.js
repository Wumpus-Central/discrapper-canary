n.d(t, { A: () => x });
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
    g = n(974930),
    m = n(47868),
    p = n(985018),
    _ = n(242182);
function x(e) {
    let { channelId: t, showDismiss: x = !0 } = e,
        f = (0, l.bG)([o.A], () => o.A.getChannel(t), [t]),
        E = (0, A.RO)(t),
        C = null != (0, A.Qs)(t),
        { canManageGuildEvent: I } = (0, r.nr)(f),
        S = (0, l.bG)([d.A], () => E.filter((e) => !d.A.isEventDismissed(e.id)), [E]),
        b = (0, l.cf)([u.Ay], () => S.reduce((e, t) => ((e[t.id] = u.Ay.getUserCount(t.id, (0, g.G3)(t))), e), {}), [
            S,
        ]);
    return S.length < 1 || C
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: S.map((e) =>
                  (0, i.jsx)(
                      m.A,
                      {
                          icon: (0, i.jsx)(a.CTc, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: s.A.unsafe_rawColors.GREEN_360.css,
                          title: p.intl.formatToPlainString(I(e) ? p.t["1vGXqM"] : p.t.xMJyla, { eventName: e.name }),
                          description: p.intl.formatToPlainString(p.t.PTebCR, {
                              startTime: (0, g.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              I(e)
                                  ? (0, a.mMO)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("51354"),
                                            n.e("77223"),
                                            n.e("24531"),
                                        ]).then(n.bind(n, 199226));
                                        return (n) => (0, i.jsx)(t, { ...n, event: e });
                                    })
                                  : (0, c.uR)({ eventId: e.id });
                          },
                          onDismiss: x
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, h.Nt)(t);
                                }
                              : void 0,
                          userCount: b[e.id],
                          className: _.f,
                      },
                      e.id,
                  ),
              ),
          });
}
