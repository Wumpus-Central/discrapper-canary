r.d(n, {
    b: function () {
        return u;
    }
});
var i = r(961742);
function a(e) {
    let n = e.getPropertyValue('content');
    return `${e.cssText} content: '${n.replace(/'|"/g, '')}';`;
}
function o(e) {
    return (0, i.qo)(e)
        .map((n) => {
            let r = e.getPropertyValue(n),
                i = e.getPropertyPriority(n);
            return `${n}: ${r}${i ? ' !important' : ''};`;
        })
        .join(' ');
}
function s(e, n, r) {
    let i = `.${e}:${n}`,
        s = r.cssText ? a(r) : o(r);
    return document.createTextNode(`${i}{${s}}`);
}
function l(e, n, r) {
    let a = window.getComputedStyle(e, r),
        o = a.getPropertyValue('content');
    if ('' === o || 'none' === o) return;
    let l = (0, i.Vj)();
    try {
        n.className = `${n.className} ${l}`;
    } catch (e) {
        return;
    }
    let u = document.createElement('style');
    u.appendChild(s(l, r, a)), n.appendChild(u);
}
function u(e, n) {
    l(e, n, ':before'), l(e, n, ':after');
}
