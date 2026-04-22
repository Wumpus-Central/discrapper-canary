"use strict";
n.d(t, { W: () => _ });
var r = n(627968);
n(64700);
var i = n(708418),
    s = n(747243),
    a = n(765178),
    o = n(425763),
    l = n(647245);
let u = (0, s.eV)("keydown", (e) => !!(0, l.fR)(e) && (e.preventDefault(), !0)),
    d = (0, s.eV)(
        "mousedown",
        (e) => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, o.ef)(!1), !0),
    ),
    c = {
        backends: [
            { id: "html5", backend: i.t, transition: d },
            {
                id: "keyboard",
                backend: l.Ay,
                context: { window, document },
                options: { onDndModeChanged: o.ef, announcer: a.O },
                preview: !0,
                transition: u,
            },
        ],
    };
function _(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.QP, { options: c, children: t });
}
