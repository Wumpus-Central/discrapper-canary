n.d(t, { S: () => f });
var i = n(200651);
n(192379);
var r = n(979714),
    a = n(434706),
    s = n(780384),
    o = n(79320),
    l = n(600795);
let u = (0, a.vQ)('keydown', (e) => !!(0, l.Tm)(e) && (e.preventDefault(), !0)),
    c = (0, a.vQ)('mousedown', (e) => -1 === e.type.indexOf('touch') && -1 !== e.type.indexOf('mouse') && ((0, o.Yk)(!1), !0)),
    d = {
        backends: [
            {
                id: 'html5',
                backend: r.PD,
                transition: c
            },
            {
                id: 'keyboard',
                backend: l.ZP,
                context: {
                    window,
                    document
                },
                options: {
                    onDndModeChanged: o.Yk,
                    announcer: s.uv
                },
                preview: !0,
                transition: u
            }
        ]
    };
function f(e) {
    let { children: t } = e;
    return (0, i.jsx)(a.WG, {
        options: d,
        children: t
    });
}
