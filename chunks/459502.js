n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(692547),
    o = n(481060),
    a = n(357156),
    s = n(592125),
    c = n(15274),
    u = n(924301),
    d = n(554747),
    p = n(854698),
    h = n(688641),
    f = n(388032),
    m = n(268813);
function g(e) {
    let { channelId: t } = e,
        g = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]),
        b = (0, d.sz)(t),
        _ = null != (0, d.qY)(t),
        { canManageGuildEvent: C } = (0, a.XJ)(g),
        y = (0, i.cj)([u.ZP], () => b.reduce((e, t) => ((e[t.id] = u.ZP.getUserCount(t.id, (0, p.DK)(t))), e), {}));
    return b.length < 1 || _
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: b.map((e) =>
                  (0, r.jsx)(
                      h.Z,
                      {
                          icon: (0, r.jsx)(o.Que, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 20,
                              width: 20
                          }),
                          color: l.Z.unsafe_rawColors.GREEN_360.css,
                          title: f.NW.formatToPlainString(C(e) ? f.t['1vGXqK'] : f.t.xMJylZ, { eventName: e.name }),
                          description: f.NW.formatToPlainString(f.t.PTebCQ, { startTime: (0, p.ub)(e.scheduled_start_time).startDateTimeString }),
                          onClick: () => {
                              C(e)
                                  ? (0, o.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e('22347'), n.e('84722'), n.e('30057')]).then(n.bind(n, 296864));
                                        return (n) => {
                                            var i, l;
                                            return (0, r.jsx)(
                                                t,
                                                ((i = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, n)),
                                                (l = l = { event: e }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(l)).forEach(function (e) {
                                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                                      }),
                                                i)
                                            );
                                        };
                                    })
                                  : (0, c.bO)({
                                        eventId: e.id,
                                        parentGuildId: e.guild_id
                                    });
                          },
                          userCount: y[e.id],
                          className: m.eventPrompt
                      },
                      e.id
                  )
              )
          });
}
