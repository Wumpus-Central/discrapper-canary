n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(827734),
    a = n(397927),
    s = n(931991),
    o = n(734057),
    c = n(87401),
    u = n(707592),
    d = n(698441),
    f = n(935159),
    p = n(508654),
    h = n(974930),
    b = n(47868),
    g = n(985018),
    m = n(19801);

function A(e) {
    let { channelId: t, showDismiss: A = !0 } = e,
        y = (0, l.bG)([o.A], () => o.A.getChannel(t), [t]),
        O = (0, p.RO)(t),
        j = null != (0, p.Qs)(t),
        { canManageGuildEvent: v } = (0, s.nr)(y),
        x = (0, l.bG)([c.A], () => O.filter((e) => !c.A.isEventDismissed(e.id)), [O]),
        E = (0, l.cf)([d.Ay], () => x.reduce((e, t) => ((e[t.id] = d.Ay.getUserCount(t.id, (0, h.G3)(t))), e), {}), [
            x,
        ]);
    return x.length < 1 || j
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: x.map((e) =>
                  (0, r.jsx)(
                      b.A,
                      {
                          icon: (0, r.jsx)(a.CTc, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                          }),
                          color: i.A.unsafe_rawColors.GREEN_360.css,
                          title: g.intl.formatToPlainString(v(e) ? g.t["1vGXqM"] : g.t.xMJyla, {
                              eventName: e.name,
                          }),
                          description: g.intl.formatToPlainString(g.t.PTebCR, {
                              startTime: (0, h.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              v(e)
                                  ? (0, a.mMO)(async () => {
                                        let { default: t } = await Promise.all([n.e("77223"), n.e("13227")]).then(
                                            n.bind(n, 199226),
                                        );
                                        return (n) => {
                                            var l, i;
                                            return (0, r.jsx)(
                                                t,
                                                ((l = (function (e) {
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
                                                (i = i =
                                                    {
                                                        event: e,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(i)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              l,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(i, e),
                                                          );
                                                      }),
                                                l),
                                            );
                                        };
                                    })
                                  : (0, u.uR)({
                                        eventId: e.id,
                                    });
                          },
                          onDismiss: A
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, f.Nt)(t);
                                }
                              : void 0,
                          userCount: E[e.id],
                          className: m.f,
                      },
                      e.id,
                  ),
              ),
          });
}
