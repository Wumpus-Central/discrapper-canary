n.d(t, { Z: () => g });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(357156),
    s = n(592125),
    c = n(15274),
    u = n(924301),
    d = n(554747),
    p = n(854698),
    h = n(688641),
    f = n(388032),
    m = n(167487);
function g(e) {
    let { channelId: t } = e,
        g = (0, r.e7)([s.Z], () => s.Z.getChannel(t), [t]),
        b = (0, d.sz)(t),
        y = null != (0, d.qY)(t),
        { canManageGuildEvent: C } = (0, o.XJ)(g),
        v = (0, r.cj)([u.ZP], () => b.reduce((e, t) => ((e[t.id] = u.ZP.getUserCount(t.id, (0, p.DK)(t))), e), {}));
    return b.length < 1 || y
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: b.map((e) =>
                  (0, i.jsx)(
                      h.Z,
                      {
                          icon: (0, i.jsx)(a.Que, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: l.Z.unsafe_rawColors.GREEN_360.css,
                          title: f.intl.formatToPlainString(C(e) ? f.t["1vGXqM"] : f.t.xMJyla, { eventName: e.name }),
                          description: f.intl.formatToPlainString(f.t.PTebCR, {
                              startTime: (0, p.ub)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              C(e)
                                  ? (0, a.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e("84722"), n.e("1431")]).then(
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
                                  : (0, c.bO)({ eventId: e.id });
                          },
                          userCount: v[e.id],
                          className: m.eventPrompt,
                      },
                      e.id,
                  ),
              ),
          });
}
