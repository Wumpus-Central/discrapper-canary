n.d(t, { Z7: () => E, l2: () => o, l6: () => s, lW: () => a, oz: () => _, zV: () => l });
var i = n(915089),
    r = n(985018);
let a = (0, i.Ld)(),
    s = (0, i.Ld)(),
    _ = (0, i.Ld)(),
    l = (0, i.Ld)(),
    o = (0, i.Ld)();
function E() {
    [
        { id: a, text: "," },
        { id: s, text: "," },
        { id: _, text: r.intl.string(r.t.gHp0C4) },
        { id: l, text: r.intl.string(r.t.GzDTxY) },
        { id: o, text: r.intl.string(r.t.SO93uu) },
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
