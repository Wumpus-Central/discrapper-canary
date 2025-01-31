n.d(t, {
    vg: () => p,
    w7: () => _
});
var i = n(961742),
    r = n(295415),
    a = n(27273);
let s = /url\((['"]?)([^'"]+?)\1\)/g,
    o = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    l = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function u(e) {
    let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g');
}
function c(e) {
    let t = [];
    return e.replace(s, (e, n, i) => (t.push(i), e)), t.filter((e) => !(0, a.pZ)(e));
}
async function d(e, t, n, s, o) {
    try {
        let l;
        let c = n ? (0, i.Kk)(t, n) : t,
            d = (0, r.b)(t);
        if (o) {
            let e = await o(c);
            l = (0, a.DT)(e, d);
        } else l = await (0, a.sx)(c, d, s);
        return e.replace(u(t), `$1${l}$3`);
    } catch (e) {}
    return e;
}
function f(e, { preferredFontFormat: t }) {
    return t
        ? e.replace(l, (e) => {
              for (;;) {
                  let [n, , i] = o.exec(e) || [];
                  if (!i) return '';
                  if (i === t) return `src: ${n};`;
              }
          })
        : e;
}
function _(e) {
    return -1 !== e.search(s);
}
async function p(e, t, n) {
    if (!_(e)) return e;
    let i = f(e, n);
    return c(i).reduce((e, i) => e.then((e) => d(e, i, t, n)), Promise.resolve(i));
}
