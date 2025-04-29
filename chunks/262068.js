n.d(t, {
    vg: () => p,
    w7: () => _
});
var r = n(961742),
    i = n(295415),
    o = n(27273);
let a = /url\((['"]?)([^'"]+?)\1\)/g,
    s = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    l = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function c(e) {
    let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g');
}
function u(e) {
    let t = [];
    return e.replace(a, (e, n, r) => (t.push(r), e)), t.filter((e) => !(0, o.pZ)(e));
}
async function d(e, t, n, a, s) {
    try {
        let l,
            u = n ? (0, r.Kk)(t, n) : t,
            d = (0, i.b)(t);
        if (s) {
            let e = await s(u);
            l = (0, o.DT)(e, d);
        } else l = await (0, o.sx)(u, d, a);
        return e.replace(c(t), `$1${l}$3`);
    } catch (e) {}
    return e;
}
function f(e, { preferredFontFormat: t }) {
    return t
        ? e.replace(l, (e) => {
              for (;;) {
                  let [n, , r] = s.exec(e) || [];
                  if (!r) return '';
                  if (r === t) return `src: ${n};`;
              }
          })
        : e;
}
function _(e) {
    return -1 !== e.search(a);
}
async function p(e, t, n) {
    if (!_(e)) return e;
    let r = f(e, n);
    return u(r).reduce((e, r) => e.then((e) => d(e, r, t, n)), Promise.resolve(r));
}
