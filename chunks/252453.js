"use strict";
n.d(t, { W: () => _ });
var r = n(627968);
n(64700);
var i = n(708418),
    a = n(747243),
    s = n(582754),
    o = n(425763),
    l = n(647245);
let u = (0, a.eV)("keydown", (e) => !!(0, l.fR)(e) && (e.preventDefault(), !0)),
    c = (0, a.eV)(
        "mousedown",
        (e) => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, o.ef)(!1), !0),
    ),
    d = {
        backends: [
            { id: "html5", backend: i.t, transition: c },
            {
                id: "keyboard",
                backend: l.Ay,
                context: { window, document },
                options: { onDndModeChanged: o.ef, announcer: s.OR },
                preview: !0,
                transition: u,
            },
        ],
    };
function _(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.QP, { options: d, children: t });
}
