n.d(t, { Z: () => b }), n(47120);
var a = n(200651);
n(192379);
var l = n(913527),
    r = n.n(l),
    i = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(713284),
    d = n(883904),
    u = n(211644),
    m = n(675478),
    h = n(681619),
    x = n(388958);
let p = (e) => {
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
    f = [
        {
            key: 'events',
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return ''.concat(t, ' ').concat(o.z[n]);
            }
        }
    ],
    _ = [
        {
            key: 'candidates',
            render(e) {
                let { dismissibleContent: t } = e;
                return ''.concat(o.z[t]);
            }
        }
    ];
function b() {
    let e = (0, i.e7)([c.Z], () => c.Z.getDCFEvents()),
        t = (0, u.ZP)((e) => e.candidates),
        n = (0, u.ZP)((e) => e.lastWinnerTime),
        l = void 0 !== n ? r()(n).fromNow() : 'n/a',
        o = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: p(t) + n.toString(),
                event: p(t),
                dismissibleContent: n
            };
        }),
        b = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, a.jsxs)('div', {
        className: x.panelContainer,
        children: [
            (0, a.jsxs)('div', {
                className: x.buttonContainer,
                children: [
                    (0, a.jsx)(s.zxk, {
                        className: x.button,
                        onClick: () => (0, d.EG)(),
                        children: 'Reset Daily Cap'
                    }),
                    (0, a.jsx)(s.zxk, {
                        className: x.button,
                        onClick: m.sr,
                        children: 'Clear All Dismissed Contents'
                    }),
                    (0, a.jsx)(s.zxk, {
                        className: x.button,
                        onClick: m.bE,
                        children: 'Check All Dismissed Contents'
                    })
                ]
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsxs)('div', {
                className: x.info,
                children: ['Last winner time: ', l]
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsx)('div', {
                className: x.candidatesTableContainer,
                children: (0, a.jsx)(h.Z, {
                    className: x.candidatesTable,
                    columns: _,
                    data: b
                })
            }),
            (0, a.jsx)('br', {}),
            (0, a.jsx)(h.Z, {
                columns: f,
                data: o
            })
        ]
    });
}
