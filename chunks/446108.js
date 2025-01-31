n.d(t, {
    Mb: () => o,
    Z0: () => a,
    d1: () => u,
    fy: () => s,
    r5: () => l
});
var i = n(313201),
    r = n(388032);
let a = (0, i.hQ)(),
    s = (0, i.hQ)(),
    o = (0, i.hQ)(),
    l = (0, i.hQ)();
function u() {
    [
        {
            id: a,
            text: ','
        },
        {
            id: s,
            text: ','
        },
        {
            id: o,
            text: r.intl.string(r.t.gHp0Cw)
        },
        {
            id: l,
            text: r.intl.string(r.t.SO93ur)
        }
    ].forEach((e) => {
        let { id: t, text: n } = e,
            i = document.getElementById(t);
        null == i && ((i = document.createElement('div')).setAttribute('id', t), (i.innerText = n), (i.style.display = 'none'), document.body.appendChild(i));
    });
}
