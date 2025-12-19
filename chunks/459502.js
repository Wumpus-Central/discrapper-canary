n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
var r = n(442837),
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
    m = n(688641),
    g = n(388032),
    b = n(144914);
function y(e) {
    let { channelId: t, showDismiss: y = !0 } = e,
        C = (0, r.e7)([s.Z], () => s.Z.getChannel(t), [t]),
        v = (0, f.sz)(t),
        x = null != (0, f.qY)(t),
        { canManageGuildEvent: O } = (0, o.XJ)(C),
        E = (0, r.e7)([c.Z], () => v.filter((e) => !c.Z.isEventDismissed(e.id)), [v]),
        j = (0, r.cj)([d.ZP], () => E.reduce((e, t) => ((e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}), [
            E,
        ]);
    return E.length < 1 || x
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: E.map((e) =>
                  (0, i.jsx)(
                      m.Z,
                      {
                          icon: (0, i.jsx)(a.Que, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: l.Z.unsafe_rawColors.GREEN_360.css,
                          title: g.intl.formatToPlainString(O(e) ? g.t["1vGXqM"] : g.t.xMJyla, { eventName: e.name }),
                          description: g.intl.formatToPlainString(g.t.PTebCR, {
                              startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              O(e)
                                  ? (0, a.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e("84722"), n.e("58923")]).then(
                                            n.bind(n, 296864),
                                        );
                                        return (n) => {
                                            var r, l;
                                            return (0, i.jsx)(
                                                t,
                                                ((r = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            i = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (i = i.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            i.forEach(function (t) {
                                                                var i;
                                                                (i = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: i,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = i);
                                                            });
                                                    }
                                                    return e;
                                                })({}, n)),
                                                (l = l = { event: e }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var i = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, i);
                                                          }
                                                          return n;
                                                      })(Object(l)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              r,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(l, e),
                                                          );
                                                      }),
                                                r),
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
                          userCount: j[e.id],
                          className: b.eventPrompt,
                      },
                      e.id,
                  ),
              ),
          });
}
