(n.d(t, {
    $f: () => b,
    C$: () => m,
    Dt: () => E,
    Hw: () => h,
    wW: () => g
}),
    n(539854));
var r = n(255367),
    i = n(913527),
    a = n.n(i),
    o = n(481060),
    s = n(710845),
    l = n(45251),
    c = n(538084),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let t = u.intl.formatToPlainString(u.t['CvHu/v'], { timestamp: new Date(e).valueOf() });
    (0, o.showToast)((0, o.createToast)(t, o.ToastType.SUCCESS));
}
function m() {
    (0, o.showToast)((0, o.createToast)(u.intl.string(u.t['JF/LWl']), o.ToastType.SUCCESS));
}
function g(e) {
    (0, o.showToast)((0, o.createToast)(u.intl.formatToPlainString(u.t.sUvyW1, { error: e }), o.ToastType.FAILURE));
}
function E(e) {
    let { channel: t } = e,
        n = a()().add(1, 'day').startOf('day').set('hours', 9),
        i = a()().add(1, 'day').startOf('day').set('hours', 13),
        s = a()().startOf('isoWeek').add(1, 'week').set('hours', 9),
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
                value: s
            }
        ].map((e) =>
            (0, r.jsx)(
                o.sNh,
                {
                    id: e.display,
                    label: e.display,
                    action: () =>
                        (0, l._e)({
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
                            label: u.intl.string(u.t.stHooK),
                            action: () => b({ channel: t })
                        },
                        'custom-time'
                    )
                ]
            })
        ),
        c
    );
}
function b(e) {
    let { channel: t, prefilledTime: i } = e;
    (0, o.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 538084));
            return (n) =>
                (0, r.jsx)(
                    e,
                    p(f({}, n), {
                        channel: t,
                        prefilledTime: null != i ? i : a()().startOf('hour').add(1, 'hour').toISOString()
                    })
                );
        },
        { modalKey: c.k }
    );
}
new s.Z('Scheduled Messages');
