n.d(t, { I: () => f }), n(290780);
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    l = n(168107),
    a = n(480916),
    o = n(247206),
    c = n(925513),
    d = n(294602),
    u = n(880257),
    m = n(838436),
    g = n(726985),
    p = n(388032),
    h = n(298136);
function f() {
    var e;
    let t = null == (e = (0, u.Z)()) || e,
        { goreContentGuilds: n, goreContentFriendDm: f, goreContentNonFriendDm: b } = (0, d.K)(),
        _ = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void l.Z.showAgeVerificationGetStartedModal(a.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, c.Jr)(e);
        },
        x = [
            {
                value: r.Q4.BLUR,
                label: p.intl.string(p.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: p.intl.string(p.t['D/157e'])
            }
        ],
        E = [
            {
                value: r.Q4.BLUR,
                label: p.intl.string(p.t.S49UaW)
            }
        ],
        C = {
            value: r.Q4.SHOW,
            label: p.intl.string(p.t['5k5OFh'])
        };
    return (
        t && (x.unshift(C), E.unshift(C)),
        (0, i.jsxs)(m.U, {
            setting: g.s6.GORE_MEDIA_REDACTION,
            children: [
                (0, i.jsxs)('div', {
                    className: h.selectItemRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: p.intl.string(p.t['6k0AgI'])
                        }),
                        (0, i.jsx)(s.q4e, {
                            look: s.qQH.CUSTOM,
                            options: x,
                            value: f,
                            onChange: (e) => _({ goreContentFriendDm: e })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.selectItemRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: p.intl.string(p.t.D2EGSk)
                        }),
                        (0, i.jsx)(s.q4e, {
                            look: s.qQH.CUSTOM,
                            options: x,
                            value: b,
                            onChange: (e) => _({ goreContentNonFriendDm: e })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.selectItemRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: p.intl.string(p.t['FP+a4+'])
                        }),
                        (0, i.jsx)(s.q4e, {
                            look: s.qQH.CUSTOM,
                            options: E,
                            value: n,
                            onChange: (e) => _({ goreContentGuilds: e }),
                            isDisabled: !t
                        })
                    ]
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: p.intl.string(p.t.XgH9en)
                })
            ]
        })
    );
}
