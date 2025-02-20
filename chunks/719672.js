n.d(t, { Z: () => _ }), n(47120);
var r = n(200651);
n(192379);
var a = n(913527),
    i = n.n(a),
    l = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(713284),
    d = n(883904),
    u = n(211644),
    h = n(675478),
    m = n(681619),
    x = n(60223);
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
    b = [
        {
            key: 'candidates',
            render(e) {
                let { dismissibleContent: t } = e;
                return ''.concat(o.z[t]);
            }
        }
    ];
function _() {
    let e = (0, l.e7)([c.Z], () => c.Z.getDCFEvents()),
        t = (0, u.ZP)((e) => e.candidates),
        n = (0, u.ZP)((e) => e.lastWinnerTime),
        a = void 0 !== n ? i()(n).fromNow() : 'n/a',
        o = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: p(t) + n.toString(),
                event: p(t),
                dismissibleContent: n
            };
        }),
        _ = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, r.jsxs)('div', {
        className: x.panelContainer,
        children: [
            (0, r.jsxs)('div', {
                className: x.buttonContainer,
                children: [
                    (0, r.jsx)(s.zxk, {
                        className: x.button,
                        onClick: () => (0, d.EG)(),
                        children: 'Reset Daily Cap'
                    }),
                    (0, r.jsx)(s.zxk, {
                        className: x.button,
                        onClick: h.sr,
                        children: 'Clear All Dismissed Contents'
                    }),
                    (0, r.jsx)(s.zxk, {
                        className: x.button,
                        onClick: h.bE,
                        children: 'Check All Dismissed Contents'
                    })
                ]
            }),
            (0, r.jsx)('br', {}),
            (0, r.jsxs)('div', {
                className: x.info,
                children: ['Last winner time: ', a]
            }),
            (0, r.jsx)('br', {}),
            (0, r.jsx)('div', {
                className: x.candidatesTableContainer,
                children: (0, r.jsx)(m.Z, {
                    className: x.candidatesTable,
                    columns: b,
                    data: _
                })
            }),
            (0, r.jsx)('br', {}),
            (0, r.jsx)(m.Z, {
                columns: f,
                data: o
            })
        ]
    });
}
