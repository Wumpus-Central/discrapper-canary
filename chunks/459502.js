n.d(t, { Z: () => b }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(357156),
    c = n(592125),
    u = n(15274),
    d = n(924301),
    p = n(554747),
    h = n(854698),
    f = n(688641),
    m = n(388032),
    g = n(837815);
function b(e) {
    let { channelId: t, showDismiss: b = !0 } = e,
        y = (0, l.e7)([c.Z], () => c.Z.getChannel(t), [t]),
        C = (0, p.sz)(t),
        v = null != (0, p.qY)(t),
        { canManageGuildEvent: _ } = (0, s.XJ)(y),
        [O, x] = r.useState(() => new Set()),
        E = r.useMemo(() => C.filter((e) => !O.has(e.id)), [C, O]),
        j = (0, l.cj)([d.ZP], () => E.reduce((e, t) => ((e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}), [
            E,
        ]);
    return E.length < 1 || v
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: E.map((e) =>
                  (0, i.jsx)(
                      f.Z,
                      {
                          icon: (0, i.jsx)(o.Que, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: a.Z.unsafe_rawColors.GREEN_360.css,
                          title: m.intl.formatToPlainString(_(e) ? m.t["1vGXqM"] : m.t.xMJyla, { eventName: e.name }),
                          description: m.intl.formatToPlainString(m.t.PTebCR, {
                              startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              _(e)
                                  ? (0, o.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e("84722"), n.e("51885")]).then(
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
                          onDismiss: b
                              ? () => {
                                    var t;
                                    return (t = e.id), void x((e) => new Set(e).add(t));
                                }
                              : void 0,
                          userCount: j[e.id],
                          className: g.eventPrompt,
                      },
                      e.id,
                  ),
              ),
          });
}
