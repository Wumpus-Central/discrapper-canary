"use strict";
n.d(t, { Z7: () => u, l2: () => l, l6: () => s, lW: () => a, oz: () => o });
var r = n(915089),
    i = n(985018);
let a = (0, r.Ld)(),
    s = (0, r.Ld)(),
    o = (0, r.Ld)(),
    l = (0, r.Ld)();
function u() {
    [
        { id: a, text: "," },
        { id: s, text: "," },
        { id: o, text: i.intl.string(i.t.gHp0C4) },
        { id: l, text: i.intl.string(i.t.SO93uu) },
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
