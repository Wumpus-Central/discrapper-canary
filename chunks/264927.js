d.d(e, { Z7: () => r, l2: () => p, l6: () => s, lW: () => l, oz: () => u, zV: () => c });
var i = d(915089),
    n = d(375708);
let l = (0, i.Ld)(),
    s = (0, i.Ld)(),
    u = (0, i.Ld)(),
    c = (0, i.Ld)(),
    p = (0, i.Ld)();
function r() {
    [
        { id: l, text: "," },
        { id: s, text: "," },
        { id: u, text: n.intl.string(n.t.gHp0C4) },
        { id: c, text: n.intl.string(n.t.GzDTxY) },
        { id: p, text: n.intl.string(n.t.SO93uu) },
    ].forEach((t) => {
        let { id: e, text: d } = t,
            i = document.getElementById(e);
        null == i &&
            ((i = document.createElement("div")).setAttribute("id", e),
            (i.innerText = d),
            (i.style.display = "none"),
            document.body.appendChild(i));
    });
}
