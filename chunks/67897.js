r.d(t, {
    L2: () => s,
    _6: () => c,
    iK: () => E,
});
var n = r(635196),
    a = r(98076),
    i = r(808446),
    o = r(514962);
let _ = {};
function s(e) {
    let t = _[e];
    if (t) return t;
    let r = o.m[e];
    if ((0, n.QC)(r)) return (_[e] = r.bind(o.m));
    let s = o.m.document;
    if (s && "function" == typeof s.createElement)
        try {
            let t = s.createElement("iframe");
            (t.hidden = !0), s.head.appendChild(t);
            let n = t.contentWindow;
            n && n[e] && (r = n[e]), s.head.removeChild(t);
        } catch (t) {
            i.X && a.kg.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
        }
    return r ? (_[e] = r.bind(o.m)) : r;
}
function c(e) {
    _[e] = void 0;
}
function E(...e) {
    return s("setTimeout")(...e);
}
