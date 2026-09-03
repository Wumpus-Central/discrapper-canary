n.d(t, { _j: () => a, h3: () => s }), n(827669);
var i = n(652215);
let r = ["+:", "@", "#", ":", "/"].sort((e, t) => t.length - e.length),
    a = new Set(["("]);
function s(e, t) {
    let n = (function (e) {
            for (let t = 0; t < e.length; t++)
                if (
                    (function (e, t) {
                        let n;
                        return 0 === t || i.ugJ.test(e[t - 1]) || (null != (n = e[t - 1]) && a.has(n));
                    })(e, t)
                ) {
                    for (let n of r) if (e.startsWith(n, t)) return e.slice(t);
                }
            return e;
        })(e),
        s = e.length - n.length;
    return { word: n, fullWord: t.slice(s), didTrimPrefix: s > 0 };
}
