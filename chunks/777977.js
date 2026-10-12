n.d(t, { $P: () => d, Eh: () => o, OR: () => l, Ps: () => s });
let i = null,
    r = new Set();
function a() {
    for (let e of r) e();
}
function s(e) {
    ((i = { ...e }), a());
}
function l(e) {
    null != i && (null == e || i.iframeId === e) && ((i = null), a());
}
function o() {
    return i;
}
function d(e) {
    return (
        r.add(e),
        () => {
            r.delete(e);
        }
    );
}
