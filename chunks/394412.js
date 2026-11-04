var i = t(477900);
t(582128);
var l = t(855986),
    s = t(646514),
    a = t(192308),
    r = t(81466),
    o = t(931991),
    c = t(734057),
    d = t(87401),
    u = t(707592),
    A = t(698441),
    h = t(935159),
    m = t(508654),
    g = t(974930),
    x = t(47868),
    C = t(792996),
    f = t(410476);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n, showDismiss: p = !0 } = e,
                E = (0, l.bG)([c.A], () => c.A.getChannel(n), [n]),
                j = (0, m.RO)(n),
                I = null != (0, m.Qs)(n),
                { canManageGuildEvent: v } = (0, o.nr)(E),
                N = (0, l.bG)([d.A], () => j.filter((e) => !d.A.isEventDismissed(e.id)), [j]),
                _ = (0, l.cf)(
                    [A.Ay],
                    () => N.reduce((e, n) => ((e[n.id] = A.Ay.getUserCount(n.id, (0, g.G3)(n))), e), {}),
                    [N],
                );
            return N.length < 1 || I
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
                                  title: C.intl.formatToPlainString(v(e) ? C.t["1vGXqM"] : C.t.xMJyla, {
                                      eventName: e.name,
                                  }),
                                  description: C.intl.formatToPlainString(C.t.PTebCR, {
                                      startTime: (0, g.CC)(e.scheduled_start_time).startDateTimeString,
                                  }),
                                  onClick: () => {
                                      v(e)
                                          ? (0, a.mM)(async () => {
                                                let { default: n } = await Promise.all([
                                                    t.e(884841),
                                                    t.e(998835),
                                                    t.e(107427),
                                                    t.e(908170),
                                                    t.e(449347),
                                                    t.e(402076),
                                                    t.e(612502),
                                                ]).then(t.bind(t, 163765));
                                                return (t) => (0, i.jsx)(n, { ...t, event: e });
                                            })
                                          : (0, u.uR)({ eventId: e.id });
                                  },
                                  onDismiss: p
                                      ? () => {
                                            var n;
                                            return ((n = e.id), void (0, h.Nt)(n));
                                        }
                                      : void 0,
                                  userCount: _[e.id],
                                  className: f.f,
                              },
                              e.id,
                          ),
                      ),
                  });
        },
    },
);
