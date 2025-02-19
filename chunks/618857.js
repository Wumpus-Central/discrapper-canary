n.d(t, {
    $f: () => h,
    C$: () => p,
    Dt: () => f,
    Hw: () => u,
    wW: () => m
}),
    n(653041);
var r = n(200651),
    i = n(913527),
    a = n.n(i),
    o = n(259443),
    l = n(481060),
    s = n(45251),
    c = n(538084),
    d = n(388032);
function u(e) {
    let t = d.NW.formatToPlainString(d.t['CvHu/v'], { timestamp: new Date(e).valueOf() });
    (0, l.showToast)((0, l.createToast)(t, l.ToastType.SUCCESS));
}
function p() {
    (0, l.showToast)((0, l.createToast)(d.NW.string(d.t['JF/LWl']), l.ToastType.SUCCESS));
}
function m(e) {
    (0, l.showToast)((0, l.createToast)(d.NW.formatToPlainString(d.t.sUvyW1, { error: e }), l.ToastType.FAILURE));
}
function f(e) {
    let { channel: t } = e,
        n = a()().add(1, 'day').startOf('day').set('hours', 9),
        i = a()().add(1, 'day').startOf('day').set('hours', 13),
        o = a()().startOf('isoWeek').add(1, 'week').set('hours', 9),
        c = [
            {
                display: d.NW.string(d.t.tjIn9v),
                value: n
            },
            {
                display: d.NW.string(d.t.EMRZyc),
                value: i
            },
            {
                display: d.NW.string(d.t['+P5MmJ']),
                value: o
            }
        ].map((e) =>
            (0, r.jsx)(
                l.sNh,
                {
                    id: e.display,
                    label: e.display,
                    action: () =>
                        (0, s._e)({
                            channelId: t.id,
                            scheduledTimestamp: e.value.toISOString()
                        })
                },
                e.display
            )
        );
    return (
        c.push(
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Clw, {}),
                    (0, r.jsx)(
                        l.sNh,
                        {
                            id: 'custom-time',
                            label: d.NW.string(d.t.stHooK),
                            action: () => h({ channel: t })
                        },
                        'custom-time'
                    )
                ]
            })
        ),
        c
    );
}
function h(e) {
    let { channel: t, prefilledTime: i } = e;
    (0, l.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 538084));
            return (n) => {
                var o, l;
                return (0, r.jsx)(
                    e,
                    ((o = (function (e) {
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
                    (l = l =
                        {
                            channel: t,
                            prefilledTime: null != i ? i : a()().startOf('hour').add(1, 'hour').toISOString()
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    o)
                );
            };
        },
        { modalKey: c.k }
    );
}
new o.Yd('Scheduled Messages');
