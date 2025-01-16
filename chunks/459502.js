n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(724458);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    s = n(357156),
    o = n(592125),
    c = n(15274),
    d = n(924301),
    u = n(554747),
    h = n(854698),
    p = n(688641),
    m = n(388032),
    f = n(622246);
function g(e) {
    let { channelId: t } = e,
        g = (0, l.e7)([o.Z], () => o.Z.getChannel(t), [t]),
        C = (0, u.sz)(t),
        x = null != (0, u.qY)(t),
        { canManageGuildEvent: v } = (0, s.XJ)(g),
        _ = (0, l.cj)([d.ZP], () => C.reduce((e, t) => ((e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}));
    return C.length < 1 || x
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: C.map((e) =>
                  (0, i.jsx)(
                      p.Z,
                      {
                          icon: (0, i.jsx)(a.CalendarIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 20,
                              width: 20
                          }),
                          color: r.Z.unsafe_rawColors.GREEN_360.css,
                          title: m.intl.formatToPlainString(v(e) ? m.t['1vGXqK'] : m.t.xMJylZ, { eventName: e.name }),
                          description: m.intl.formatToPlainString(m.t.PTebCQ, { startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString }),
                          onClick: () => {
                              var t;
                              v((t = e))
                                  ? (0, a.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('22347'), n.e('84722'), n.e('21775')]).then(n.bind(n, 296864));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                event: t
                                            });
                                    })
                                  : (0, c.bO)({
                                        eventId: t.id,
                                        parentGuildId: t.guild_id
                                    });
                          },
                          userCount: _[e.id],
                          className: f.eventPrompt
                      },
                      e.id
                  )
              )
          });
}
