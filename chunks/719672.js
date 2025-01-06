n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var r,
    a,
    l = n(200651);
n(192379);
var i = n(913527),
    o = n.n(i),
    s = n(442837),
    c = n(704215),
    d = n(481060),
    u = n(713284),
    m = n(883904),
    h = n(211644),
    x = n(675478),
    f = n(681619),
    p = n(388958);
((a = r || (r = {})).EVENT = 'events'), (a.CANDIDATES = 'candidates');
let b = (e) => {
        switch (e) {
            case u.D.DC_DISMISSED:
                return 'DISMISS:';
            case u.D.DC_SHOWN:
                return 'SHOW:';
            case u.D.DC_SHOW_REQUEST:
                return 'REQUEST TO SHOW:';
            default:
                return 'UNKNOWN TYPE:';
        }
    },
    g = [
        {
            key: 'events',
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return ''.concat(t, ' ').concat(c.z[n]);
            }
        }
    ],
    v = [
        {
            key: 'candidates',
            render(e) {
                let { dismissibleContent: t } = e;
                return ''.concat(c.z[t]);
            }
        }
    ];
function j() {
    let e = (0, s.e7)([u.Z], () => u.Z.getDCFEvents()),
        t = (0, h.ZP)((e) => e.candidates),
        n = (0, h.ZP)((e) => e.lastWinnerTime),
        r = o()(n).fromNow(),
        a = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: b(t) + n.toString(),
                event: b(t),
                dismissibleContent: n
            };
        }),
        i = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, l.jsxs)('div', {
        className: p.panelContainer,
        children: [
            (0, l.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, l.jsx)(d.Button, {
                        className: p.button,
                        onClick: () => (0, m.EG)(),
                        children: 'Reset Daily Cap'
                    }),
                    (0, l.jsx)(d.Button, {
                        className: p.button,
                        onClick: x.sr,
                        children: 'Clear All Dismissed Contents'
                    }),
                    (0, l.jsx)(d.Button, {
                        className: p.button,
                        onClick: x.bE,
                        children: 'Check All Dismissed Contents'
                    })
                ]
            }),
            (0, l.jsx)('br', {}),
            (0, l.jsxs)('div', {
                className: p.info,
                children: ['Last winner time: ', r]
            }),
            (0, l.jsx)('br', {}),
            (0, l.jsx)('div', {
                className: p.candidatesTableContainer,
                children: (0, l.jsx)(f.Z, {
                    className: p.candidatesTable,
                    columns: v,
                    data: i
                })
            }),
            (0, l.jsx)('br', {}),
            (0, l.jsx)(f.Z, {
                columns: g,
                data: a
            })
        ]
    });
}
