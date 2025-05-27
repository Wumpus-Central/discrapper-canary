n.d(t, { Z: () => v }), n(388685);
var a = n(255367);
n(73800);
var r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(713284),
    d = n(883904),
    u = n(211644),
    m = n(675478),
    x = n(681619),
    p = n(177488);
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
                let { event: t, dismissibleContent: n } = e;
                return ''.concat(t, ' ').concat(s.z[n]);
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
        n = (0, u.ZP)((e) => e.lastWinnerTime),
        r = 0 !== n ? l()(n).fromNow() : 'n/a',
        v = (0, u.ZP)((e) => e.recentlyShown[0]),
        g = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: h(t) + n.toString(),
                event: h(t),
                dismissibleContent: n
            };
        }),
        j = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, a.jsxs)('div', {
        className: p.panelContainer,
        children: [
            (0, a.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, a.jsx)(o.zxk, {
                        className: p.button,
                        onClick: () => (0, d.EG)(),
                        children: 'Reset Daily Cap'
                    }),
                    (0, a.jsx)(o.zxk, {
                        className: p.button,
                        onClick: m.sr,
                        children: 'Clear All Dismissed Contents'
                    }),
                    (0, a.jsx)(o.zxk, {
                        className: p.button,
                        onClick: m.bE,
                        children: 'Check All Dismissed Contents'
                    })
                ]
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsxs)('div', {
                className: p.info,
                children: ['Last winner time: ', r]
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsxs)('div', {
                className: p.info,
                children: ['Last winner: ', null != v ? s.z[v] : 'None']
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsx)('div', {
                className: p.candidatesTableContainer,
                children: (0, a.jsx)(x.Z, {
                    className: p.candidatesTable,
                    columns: f,
                    data: j
                })
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsx)(x.Z, {
                columns: b,
                data: g
            })
        ]
    });
}
