n.d(t, {
    $f: () => h,
    C$: () => p,
    Dt: () => f,
    Hw: () => d,
    wW: () => m
}),
    n(653041);
var r = n(200651),
    i = n(913527),
    a = n.n(i),
    l = n(259443),
    o = n(481060),
    s = n(45251),
    c = n(538084),
    u = n(388032);
function d(e) {
    let t = u.NW.formatToPlainString(u.t['CvHu/v'], { timestamp: new Date(e).valueOf() });
    (0, o.showToast)((0, o.createToast)(t, o.ToastType.SUCCESS));
}
function p() {
    (0, o.showToast)((0, o.createToast)(u.NW.string(u.t['JF/LWl']), o.ToastType.SUCCESS));
}
function m(e) {
    (0, o.showToast)((0, o.createToast)(u.NW.formatToPlainString(u.t.sUvyW1, { error: e }), o.ToastType.FAILURE));
}
function f(e) {
    let { channel: t } = e,
        n = a()().add(1, 'day').startOf('day').set('hours', 9),
        i = a()().add(1, 'day').startOf('day').set('hours', 13),
        l = a()().startOf('isoWeek').add(1, 'week').set('hours', 9),
        c = [
            {
                display: u.NW.string(u.t.tjIn9v),
                value: n
            },
            {
                display: u.NW.string(u.t.EMRZyc),
                value: i
            },
            {
                display: u.NW.string(u.t['+P5MmJ']),
                value: l
            }
        ].map((e) =>
            (0, r.jsx)(
                o.sNh,
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
                    (0, r.jsx)(o.Clw, {}),
                    (0, r.jsx)(
                        o.sNh,
                        {
                            id: 'custom-time',
                            label: u.NW.string(u.t.stHooK),
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
    (0, o.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 538084));
            return (n) => {
                var l, o;
                return (0, r.jsx)(
                    e,
                    ((l = (function (e) {
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
                    (o = o =
                        {
                            channel: t,
                            prefilledTime: null != i ? i : a()().startOf('hour').add(1, 'hour').toISOString()
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    l)
                );
            };
        },
        { modalKey: c.k }
    );
}
new l.Yd('Scheduled Messages');
