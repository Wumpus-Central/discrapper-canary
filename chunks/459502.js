n.d(t, { Z: () => _ });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(357156),
    s = n(516191),
    c = n(430104),
    u = n(592125),
    d = n(115648),
    p = n(15274),
    h = n(924301),
    f = n(658041),
    m = n(504160),
    g = n(554747),
    b = n(854698),
    y = n(688641),
    C = n(388032),
    v = n(837815);
function _(e) {
    let { channelId: t, showDismiss: _ = !0 } = e,
        O = (0, r.e7)([u.Z], () => u.Z.getChannel(t), [t]),
        x = (0, g.sz)(t),
        E = null != (0, g.qY)(t),
        { canManageGuildEvent: j } = (0, o.XJ)(O),
        S = (0, r.e7)([d.Z], () => x.filter((e) => !d.Z.isEventDismissed(e.id)), [x]),
        P = (0, r.cj)([h.ZP], () => S.reduce((e, t) => ((e[t.id] = h.ZP.getUserCount(t.id, (0, b.DK)(t))), e), {}), [
            S,
        ]);
    return S.length < 1 || E
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: S.map((e) =>
                  (0, i.jsx)(
                      y.Z,
                      {
                          icon: (0, i.jsx)(a.Que, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: l.Z.unsafe_rawColors.GREEN_360.css,
                          title: C.intl.formatToPlainString(j(e) ? C.t["1vGXqM"] : C.t.xMJyla, { eventName: e.name }),
                          description: C.intl.formatToPlainString(C.t.PTebCR, {
                              startTime: (0, b.ub)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () =>
                              (function (e) {
                                  let t = j(e),
                                      r = () => {
                                          (0, a.ZDy)(async () => {
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
                                                                      Object.getOwnPropertySymbols(n).filter(
                                                                          function (e) {
                                                                              return Object.getOwnPropertyDescriptor(
                                                                                  n,
                                                                                  e,
                                                                              ).enumerable;
                                                                          },
                                                                      ),
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
                                                          ? Object.defineProperties(
                                                                r,
                                                                Object.getOwnPropertyDescriptors(l),
                                                            )
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
                                          });
                                      };
                                  t && (0, c.u1)() && (0, f.s)(e)
                                      ? (0, s.Z)(r)
                                      : t
                                        ? r()
                                        : (0, p.bO)({ eventId: e.id });
                              })(e),
                          onDismiss: _
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, m.Xy)(t);
                                }
                              : void 0,
                          userCount: P[e.id],
                          className: v.eventPrompt,
                      },
                      e.id,
                  ),
              ),
          });
}
