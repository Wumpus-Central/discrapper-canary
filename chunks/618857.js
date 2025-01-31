n.d(t, {
    $f: () => p,
    C$: () => m,
    Dt: () => _,
    Hw: () => u,
    wW: () => h
}),
    n(653041);
var i = n(200651),
    l = n(913527),
    a = n.n(l),
    r = n(259443),
    s = n(481060),
    o = n(45251),
    c = n(538084),
    d = n(388032);
function u(e) {
    let t = d.intl.formatToPlainString(d.t['CvHu/v'], { timestamp: new Date(e).valueOf() });
    (0, s.showToast)((0, s.createToast)(t, s.ToastType.SUCCESS));
}
function m() {
    (0, s.showToast)((0, s.createToast)(d.intl.string(d.t['JF/LWl']), s.ToastType.SUCCESS));
}
function h(e) {
    (0, s.showToast)((0, s.createToast)(d.intl.formatToPlainString(d.t.sUvyW1, { error: e }), s.ToastType.FAILURE));
}
function _(e) {
    let { channel: t } = e,
        n = a()().add(1, 'day').startOf('day').set('hours', 9),
        l = a()().add(1, 'day').startOf('day').set('hours', 13),
        r = a()().startOf('isoWeek').add(1, 'week').set('hours', 9),
        c = [
            {
                display: d.intl.string(d.t.tjIn9v),
                value: n
            },
            {
                display: d.intl.string(d.t.EMRZyc),
                value: l
            },
            {
                display: d.intl.string(d.t['+P5MmJ']),
                value: r
            }
        ].map((e) =>
            (0, i.jsx)(
                s.sNh,
                {
                    id: e.display,
                    label: e.display,
                    action: () =>
                        (0, o._e)({
                            channelId: t.id,
                            scheduledTimestamp: e.value.toISOString()
                        })
                },
                e.display
            )
        );
    return (
        c.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.Clw, {}),
                    (0, i.jsx)(
                        s.sNh,
                        {
                            id: 'custom-time',
                            label: d.intl.string(d.t.stHooK),
                            action: () => p({ channel: t })
                        },
                        'custom-time'
                    )
                ]
            })
        ),
        c
    );
}
function p(e) {
    let { channel: t, prefilledTime: l } = e;
    (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 538084));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    channel: t,
                    prefilledTime: null != l ? l : a()().startOf('hour').add(1, 'hour').toISOString()
                });
        },
        { modalKey: c.k }
    );
}
new r.Yd('Scheduled Messages');
