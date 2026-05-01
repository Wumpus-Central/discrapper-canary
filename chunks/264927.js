n.d(t, { Z7: () => c, l2: () => d, l6: () => s, lW: () => r, oz: () => l, zV: () => o });
var i = n(915089),
    a = n(985018);
let r = (0, i.Ld)(),
    s = (0, i.Ld)(),
    l = (0, i.Ld)(),
    o = (0, i.Ld)(),
    d = (0, i.Ld)();
function c() {
    [
        { id: r, text: "," },
        { id: s, text: "," },
        { id: l, text: a.intl.string(a.t.gHp0C4) },
        { id: o, text: a.intl.string(a.t.GzDTxY) },
        { id: d, text: a.intl.string(a.t.SO93uu) },
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
