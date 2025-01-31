n.d(t, { b: () => l });
var i = n(961742);
function r(e) {
    let t = e.getPropertyValue('content');
    return `${e.cssText} content: '${t.replace(/'|"/g, '')}';`;
}
function a(e) {
    return (0, i.qo)(e)
        .map((t) => {
            let n = e.getPropertyValue(t),
                i = e.getPropertyPriority(t);
            return `${t}: ${n}${i ? ' !important' : ''};`;
        })
        .join(' ');
}
function s(e, t, n) {
    let i = `.${e}:${t}`,
        s = n.cssText ? r(n) : a(n);
    return document.createTextNode(`${i}{${s}}`);
}
function o(e, t, n) {
    let r = window.getComputedStyle(e, n),
        a = r.getPropertyValue('content');
    if ('' === a || 'none' === a) return;
    let o = (0, i.Vj)();
    try {
        t.className = `${t.className} ${o}`;
    } catch (e) {
        return;
    }
    let l = document.createElement('style');
    l.appendChild(s(o, n, r)), t.appendChild(l);
}
function l(e, t) {
    o(e, t, ':before'), o(e, t, ':after');
}
