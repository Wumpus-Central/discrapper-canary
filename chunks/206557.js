n.d(t, { S: () => f });
var r = n(200651);
n(192379);
var i = n(979714),
    o = n(434706),
    a = n(780384),
    s = n(79320),
    l = n(600795);
let c = (0, o.vQ)('keydown', (e) => !!(0, l.Tm)(e) && (e.preventDefault(), !0)),
    u = (0, o.vQ)('mousedown', (e) => -1 === e.type.indexOf('touch') && -1 !== e.type.indexOf('mouse') && ((0, s.Yk)(!1), !0)),
    d = {
        backends: [
            {
                id: 'html5',
                backend: i.PD,
                transition: u
            },
            {
                id: 'keyboard',
                backend: l.ZP,
                context: {
                    window,
                    document
                },
                options: {
                    onDndModeChanged: s.Yk,
                    announcer: a.uv
                },
                preview: !0,
                transition: c
            }
        ]
    };
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.WG, {
        options: d,
        children: t
    });
}
