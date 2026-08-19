i.d(t, { Z7: () => h, l2: () => c, l6: () => n, lW: () => s, oz: () => d, zV: () => r });
var a = i(915089),
    l = i(375708);
let s = (0, a.Ld)(),
    n = (0, a.Ld)(),
    d = (0, a.Ld)(),
    r = (0, a.Ld)(),
    c = (0, a.Ld)();
function h() {
    [
        { id: s, text: "," },
        { id: n, text: "," },
        { id: d, text: l.intl.string(l.t.gHp0C4) },
        { id: r, text: l.intl.string(l.t.GzDTxY) },
        { id: c, text: l.intl.string(l.t.SO93uu) },
    ].forEach((e) => {
        let { id: t, text: i } = e,
            a = document.getElementById(t);
        null == a &&
            ((a = document.createElement("div")).setAttribute("id", t),
            (a.innerText = i),
            (a.style.display = "none"),
            document.body.appendChild(a));
    });
}
