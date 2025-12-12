n.d(t, {
    L2: () => s,
    _6: () => c,
    iK: () => E,
});
var r = n(635196),
    i = n(98076),
    a = n(808446),
    o = n(514962);
let _ = {};
function s(e) {
    let t = _[e];
    if (t) return t;
    let n = o.m[e];
    if ((0, r.QC)(n)) return (_[e] = n.bind(o.m));
    let s = o.m.document;
    if (s && "function" == typeof s.createElement)
        try {
            let t = s.createElement("iframe");
            (t.hidden = !0), s.head.appendChild(t);
            let r = t.contentWindow;
            r && r[e] && (n = r[e]), s.head.removeChild(t);
        } catch (t) {
            a.X && i.kg.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
        }
    return n ? (_[e] = n.bind(o.m)) : n;
}
function c(e) {
    _[e] = void 0;
}
function E(...e) {
    return s("setTimeout")(...e);
}
