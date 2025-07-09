(a.d(t, { Z: () => v }), a(388685));
var n = a(255367);
a(73800);
var r = a(913527),
    l = a.n(r),
    i = a(442837),
    s = a(704215),
    o = a(481060),
    c = a(713284),
    d = a(883904),
    u = a(211644),
    m = a(675478),
    x = a(681619),
    p = a(177488);
let h = (e) => {
        switch (e) {
            case c.D.DC_DISMISSED:
                return 'DISMISS:';
            case c.D.DC_SHOWN:
                return 'SHOW:';
            case c.D.DC_SHOW_REQUEST:
                return 'REQUEST TO SHOW:';
            default:
                return 'UNKNOWN TYPE:';
        }
    },
    b = [
        {
            key: 'events',
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return ''.concat(t, ' ').concat(s.z[a]);
            }
        }
    ],
    f = [
        {
            key: 'candidates',
            render(e) {
                let { dismissibleContent: t } = e;
                return ''.concat(s.z[t]);
            }
        }
    ];
function v() {
    let e = (0, i.e7)([c.Z], () => c.Z.getDCFEvents()),
        t = (0, u.ZP)((e) => e.candidates),
        a = (0, u.ZP)((e) => e.lastWinnerTime),
        r = 0 !== a ? l()(a).fromNow() : 'n/a',
        v = (0, u.ZP)((e) => e.recentlyShown[0]),
        j = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return {
                key: h(t) + a.toString(),
                event: h(t),
                dismissibleContent: a
            };
        }),
        g = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, n.jsxs)('div', {
        className: p.panelContainer,
        children: [
            (0, n.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, n.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: p.button,
                        children: (0, n.jsx)(o.zxk, {
                            variant: 'primary',
                            text: 'Reset Daily Cap',
                            onClick: () => (0, d.EG)()
                        })
                    }),
                    (0, n.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: p.button,
                        children: (0, n.jsx)(o.zxk, {
                            variant: 'primary',
                            text: 'Clear All Dismissed Contents',
                            onClick: m.sr
                        })
                    }),
                    (0, n.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: p.button,
                        children: (0, n.jsx)(o.zxk, {
                            variant: 'primary',
                            text: 'Check All Dismissed Contents',
                            onClick: m.bE
                        })
                    })
                ]
            }),
            (0, n.jsx)('br', {}),
            (0, n.jsxs)('div', {
                className: p.info,
                children: ['Last winner time: ', r]
            }),
            (0, n.jsx)('br', {}),
            (0, n.jsxs)('div', {
                className: p.info,
                children: ['Last winner: ', null != v ? s.z[v] : 'None']
            }),
            (0, n.jsx)('br', {}),
            (0, n.jsx)('div', {
                className: p.candidatesTableContainer,
                children: (0, n.jsx)(x.Z, {
                    className: p.candidatesTable,
                    columns: f,
                    data: g
                })
            }),
            (0, n.jsx)('br', {}),
            (0, n.jsx)(x.Z, {
                columns: b,
                data: j
            })
        ]
    });
}
