n.d(t, { Z: () => f }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(848246),
    i = n(442837),
    o = n(481060),
    s = n(570140),
    c = n(746599),
    d = n(594174),
    u = n(246992),
    m = n(473657);
let h = [
        {
            label: 'No Override',
            value: !1
        },
        {
            label: 'Available: true',
            value: !0
        }
    ],
    x = [
        {
            label: 'No Override',
            value: !1
        },
        {
            label: 'Success',
            value: !0
        }
    ],
    p = [
        {
            label: '1 day',
            value: 1
        },
        {
            label: '7 days',
            value: 7
        }
    ];
function f() {
    let e = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        [t, n] = l.useState(!1),
        [f, _] = l.useState(!1),
        [b, g] = l.useState(1);
    return (0, a.jsxs)('div', {
        className: m.container,
        children: [
            (0, a.jsx)(o.hjN, {
                title: 'Override HQ Streaming: Available',
                className: m.formElement,
                tag: o.RB0.H3,
                children: (0, a.jsx)(o.q4e, {
                    options: h,
                    value: t,
                    onChange: (e) => {
                        n(e);
                    },
                    popoutLayerContext: u.O$
                })
            }),
            (0, a.jsx)(o.hjN, {
                title: 'Override HQ Streaming: Activate',
                className: m.formElement,
                tag: o.RB0.H3,
                children: (0, a.jsx)(o.q4e, {
                    options: x,
                    value: f,
                    onChange: (e) => {
                        _(e);
                    },
                    popoutLayerContext: u.O$
                })
            }),
            (0, a.jsx)(o.hjN, {
                title: 'Override Demo Duration',
                className: m.formElement,
                tag: o.RB0.H3,
                children: (0, a.jsx)(o.q4e, {
                    options: p,
                    value: b,
                    onChange: (e) => {
                        g(e);
                    },
                    popoutLayerContext: u.O$
                })
            }),
            (0, a.jsx)(o.zxk, {
                onClick: () =>
                    void (s.Z.dispatch({
                        type: 'PREMIUM_PERKS_DEMO_OVERRIDE',
                        perkType: r.q.STREAM_HIGH_QUALITY,
                        user: e,
                        available: t,
                        activateSuccess: f,
                        demoDuration: b
                    }),
                    (0, c.Vk)()),
                children: 'Update'
            })
        ]
    });
}
