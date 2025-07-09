(n.d(t, {
    $f: () => m,
    C$: () => p,
    Dt: () => f,
    Hw: () => d,
    wW: () => h
}),
    n(539854));
var r = n(255367),
    i = n(913527),
    l = n.n(i),
    a = n(481060),
    o = n(710845),
    s = n(45251),
    c = n(538084),
    u = n(388032);
function d(e) {
    let t = u.intl.formatToPlainString(u.t['CvHu/v'], { timestamp: new Date(e).valueOf() });
    (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS));
}
function p() {
    (0, a.showToast)((0, a.createToast)(u.intl.string(u.t['JF/LWl']), a.ToastType.SUCCESS));
}
function h(e) {
    (0, a.showToast)((0, a.createToast)(u.intl.formatToPlainString(u.t.sUvyW1, { error: e }), a.ToastType.FAILURE));
}
function f(e) {
    let { channel: t } = e,
        n = l()().add(1, 'day').startOf('day').set('hours', 9),
        i = l()().add(1, 'day').startOf('day').set('hours', 13),
        o = l()().startOf('isoWeek').add(1, 'week').set('hours', 9),
        c = [
            {
                display: u.intl.string(u.t.tjIn9v),
                value: n
            },
            {
                display: u.intl.string(u.t.EMRZyc),
                value: i
            },
            {
                display: u.intl.string(u.t['+P5MmJ']),
                value: o
            }
        ].map((e) =>
            (0, r.jsx)(
                a.sNh,
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
                    (0, r.jsx)(a.Clw, {}),
                    (0, r.jsx)(
                        a.sNh,
                        {
                            id: 'custom-time',
                            label: u.intl.string(u.t.stHooK),
                            action: () => m({ channel: t })
                        },
                        'custom-time'
                    )
                ]
            })
        ),
        c
    );
}
function m(e) {
    let { channel: t, prefilledTime: i } = e;
    (0, a.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 538084));
            return (n) => {
                var a, o;
                return (0, r.jsx)(
                    e,
                    ((a = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, n)),
                    (o = o =
                        {
                            channel: t,
                            prefilledTime: null != i ? i : l()().startOf('hour').add(1, 'hour').toISOString()
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    a)
                );
            };
        },
        { modalKey: c.k }
    );
}
new o.Z('Scheduled Messages');
