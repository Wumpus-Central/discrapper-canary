n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(357156),
    s = n(592125),
    c = n(115648),
    u = n(15274),
    d = n(924301),
    p = n(504160),
    f = n(554747),
    h = n(854698),
    g = n(688641),
    m = n(388032),
    b = n(144914);
function y(e) {
    let { channelId: t, showDismiss: y = !0 } = e,
        v = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]),
        O = (0, f.sz)(t),
        j = null != (0, f.qY)(t),
        { canManageGuildEvent: x } = (0, o.XJ)(v),
        C = (0, i.e7)([c.Z], () => O.filter((e) => !c.Z.isEventDismissed(e.id)), [O]),
        E = (0, i.cj)([d.ZP], () => C.reduce((e, t) => ((e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}), [
            C,
        ]);
    return C.length < 1 || j
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: C.map((e) =>
                  (0, r.jsx)(
                      g.Z,
                      {
                          icon: (0, r.jsx)(a.Que, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: l.Z.unsafe_rawColors.GREEN_360.css,
                          title: m.intl.formatToPlainString(x(e) ? m.t["1vGXqM"] : m.t.xMJyla, { eventName: e.name }),
                          description: m.intl.formatToPlainString(m.t.PTebCR, {
                              startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              x(e)
                                  ? (0, a.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e("84722"), n.e("5992")]).then(
                                            n.bind(n, 296864),
                                        );
                                        return (n) => {
                                            var i, l;
                                            return (0, r.jsx)(
                                                t,
                                                ((i = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
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
                                                          Object.defineProperty(
                                                              i,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(l, e),
                                                          );
                                                      }),
                                                i),
                                            );
                                        };
                                    })
                                  : (0, u.bO)({ eventId: e.id });
                          },
                          onDismiss: y
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, p.Xy)(t);
                                }
                              : void 0,
                          userCount: E[e.id],
                          className: b.eventPrompt,
                      },
                      e.id,
                  ),
              ),
          });
}
