(n.d(t, { I: () => b }), n(290780), n(388685));
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    a = n(168107),
    l = n(480916),
    o = n(247206),
    c = n(925513),
    d = n(294602),
    u = n(249996),
    m = n(880257),
    p = n(838436),
    g = n(726985),
    h = n(388032),
    f = n(298136);
function b() {
    var e;
    let t = null == (e = (0, m.Z)()) || e,
        { goreContentGuilds: n, goreContentFriendDm: b, goreContentNonFriendDm: x } = (0, d.K)(),
        _ = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal(l.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, c.Jr)(e);
        },
        j = [
            {
                value: r.Q4.BLUR,
                label: h.intl.string(h.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: h.intl.string(h.t['D/157e'])
            }
        ],
        O = [
            {
                value: r.Q4.BLUR,
                label: h.intl.string(h.t.S49UaW)
            }
        ],
        C = {
            value: r.Q4.SHOW,
            label: h.intl.string(h.t['5k5OFh'])
        };
    return (
        t && (j.unshift(C), O.unshift(C)),
        (0, i.jsxs)(p.U, {
            setting: g.s6.GORE_MEDIA_REDACTION,
            children: [
                (0, i.jsxs)('div', {
                    className: f.selectItemRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: h.intl.string(h.t['+uI23N'])
                        }),
                        (0, i.jsx)(s.q4e, {
                            look: s.qQH.CUSTOM,
                            options: j,
                            value: b,
                            onChange: (e) => _({ goreContentFriendDm: e }),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, i.jsx)(u.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, i.jsx)(u.Z, { option: e })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.selectItemRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: h.intl.string(h.t['Yh+HX1'])
                        }),
                        (0, i.jsx)(s.q4e, {
                            look: s.qQH.CUSTOM,
                            options: j,
                            value: x,
                            onChange: (e) => _({ goreContentNonFriendDm: e }),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, i.jsx)(u.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, i.jsx)(u.Z, { option: e })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.selectItemRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: h.intl.string(h.t['FP+a4+'])
                        }),
                        (0, i.jsx)(s.q4e, {
                            look: s.qQH.CUSTOM,
                            options: O,
                            value: n,
                            onChange: (e) => _({ goreContentGuilds: e }),
                            isDisabled: !t,
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, i.jsx)(u.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, i.jsx)(u.Z, { option: e })
                        })
                    ]
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: h.intl.string(h.t.XgH9en)
                })
            ]
        })
    );
}
