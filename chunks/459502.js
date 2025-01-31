n.d(t, { Z: () => g }), n(724458);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(692547),
    r = n(481060),
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
        _ = (0, u.sz)(t),
        C = null != (0, u.qY)(t),
        { canManageGuildEvent: x } = (0, s.XJ)(g),
        v = (0, l.cj)([d.ZP], () => _.reduce((e, t) => ((e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}));
    return _.length < 1 || C
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: _.map((e) =>
                  (0, i.jsx)(
                      p.Z,
                      {
                          icon: (0, i.jsx)(r.Que, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 20,
                              width: 20
                          }),
                          color: a.Z.unsafe_rawColors.GREEN_360.css,
                          title: m.intl.formatToPlainString(x(e) ? m.t['1vGXqK'] : m.t.xMJylZ, { eventName: e.name }),
                          description: m.intl.formatToPlainString(m.t.PTebCQ, { startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString }),
                          onClick: () => {
                              x(e)
                                  ? (0, r.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e('22347'), n.e('84722'), n.e('21775')]).then(n.bind(n, 296864));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                event: e
                                            });
                                    })
                                  : (0, c.bO)({
                                        eventId: e.id,
                                        parentGuildId: e.guild_id
                                    });
                          },
                          userCount: v[e.id],
                          className: f.eventPrompt
                      },
                      e.id
                  )
              )
          });
}
