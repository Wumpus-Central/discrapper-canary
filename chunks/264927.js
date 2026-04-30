"use strict";
n.d(t, { Z7: () => c, l2: () => u, l6: () => a, lW: () => s, oz: () => o, zV: () => l });
var i = n(915089),
    r = n(375708);
let s = (0, i.Ld)(),
    a = (0, i.Ld)(),
    o = (0, i.Ld)(),
    l = (0, i.Ld)(),
    u = (0, i.Ld)();
function c() {
    [
        { id: s, text: "," },
        { id: a, text: "," },
        { id: o, text: r.intl.string(r.t.gHp0C4) },
        { id: l, text: r.intl.string(r.t.GzDTxY) },
        { id: u, text: r.intl.string(r.t.SO93uu) },
    ].forEach((e) => {
        let { id: t, text: n } = e,
            i = document.getElementById(t);
        null == i &&
            ((i = document.createElement("div")).setAttribute("id", t),
            (i.innerText = n),
            (i.style.display = "none"),
            document.body.appendChild(i));
    });
}
