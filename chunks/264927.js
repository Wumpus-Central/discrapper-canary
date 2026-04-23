"use strict";
n.d(t, { Z7: () => c, l2: () => u, l6: () => a, lW: () => s, oz: () => o, zV: () => l });
var r = n(915089),
    i = n(985018);
let s = (0, r.Ld)(),
    a = (0, r.Ld)(),
    o = (0, r.Ld)(),
    l = (0, r.Ld)(),
    u = (0, r.Ld)();
function c() {
    [
        { id: s, text: "," },
        { id: a, text: "," },
        { id: o, text: i.intl.string(i.t.gHp0C4) },
        { id: l, text: i.intl.string(i.t.GzDTxY) },
        { id: u, text: i.intl.string(i.t.SO93uu) },
    ].forEach((e) => {
        let { id: t, text: n } = e,
            r = document.getElementById(t);
        null == r &&
            ((r = document.createElement("div")).setAttribute("id", t),
            (r.innerText = n),
            (r.style.display = "none"),
            document.body.appendChild(r));
    });
}
