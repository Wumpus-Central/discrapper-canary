r.d(n, {
    S: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(979714),
    o = r(434706),
    s = r(780384),
    l = r(79320),
    u = r(600795);
let c = (0, o.vQ)('keydown', (e) => !!(0, u.Tm)(e) && (e.preventDefault(), !0)),
    d = (0, o.vQ)('mousedown', (e) => -1 === e.type.indexOf('touch') && -1 !== e.type.indexOf('mouse') && ((0, l.Yk)(!1), !0)),
    f = {
        backends: [
            {
                id: 'html5',
                backend: a.PD,
                transition: d
            },
            {
                id: 'keyboard',
                backend: u.ZP,
                context: {
                    window,
                    document
                },
                options: {
                    onDndModeChanged: l.Yk,
                    announcer: s.uv
                },
                preview: !0,
                transition: c
            }
        ]
    };
function p(e) {
    let { children: n } = e;
    return (0, i.jsx)(o.WG, {
        options: f,
        children: n
    });
}
