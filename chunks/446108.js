n.d(t, {
    Mb: () => s,
    Z0: () => o,
    d1: () => c,
    fy: () => a,
    r5: () => l
});
var r = n(313201),
    i = n(388032);
let o = (0, r.hQ)(),
    a = (0, r.hQ)(),
    s = (0, r.hQ)(),
    l = (0, r.hQ)();
function c() {
    [
        {
            id: o,
            text: ','
        },
        {
            id: a,
            text: ','
        },
        {
            id: s,
            text: i.NW.string(i.t.gHp0Cw)
        },
        {
            id: l,
            text: i.NW.string(i.t.SO93ur)
        }
    ].forEach((e) => {
        let { id: t, text: n } = e,
            r = document.getElementById(t);
        null == r && ((r = document.createElement('div')).setAttribute('id', t), (r.innerText = n), (r.style.display = 'none'), document.body.appendChild(r));
    });
}
