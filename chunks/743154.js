n.d(t, { qd: () => l, wg: () => u, y7: () => c });
var r = n(366781),
    i = n(272469),
    o = n(21453),
    a = n(296438);
let s = {};
function l(e) {
    let t = s[e];
    if (t) return t;
    let n = a.j[e];
    if ((0, r.a3)(n)) return (s[e] = n.bind(a.j));
    let l = a.j.document;
    if (l && "function" == typeof l.createElement)
        try {
            let t = l.createElement("iframe");
            (t.hidden = !0), l.head.appendChild(t);
            let r = t.contentWindow;
            r && r[e] && (n = r[e]), l.head.removeChild(t);
        } catch (t) {
            o.T && i.vF.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
        }
    return n ? (s[e] = n.bind(a.j)) : n;
}
function c(e) {
    s[e] = void 0;
}
function u(...e) {
    return l("setTimeout")(...e);
}
