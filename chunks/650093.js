a.d(e, {
    L2: () => E,
    _6: () => c,
    iK: () => s,
});
var r = a(694043),
    _ = a(622916),
    n = a(665909),
    o = a(395848);
let i = {};
function E(t) {
    let e = i[t];
    if (e) return e;
    let a = o.m[t];
    if ((0, r.QC)(a)) return (i[t] = a.bind(o.m));
    let E = o.m.document;
    if (E && "function" == typeof E.createElement)
        try {
            let e = E.createElement("iframe");
            (e.hidden = !0), E.head.appendChild(e);
            let r = e.contentWindow;
            r && r[t] && (a = r[t]), E.head.removeChild(e);
        } catch (e) {
            n.X && _.kg.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, e);
        }
    return a ? (i[t] = a.bind(o.m)) : a;
}
function c(t) {
    i[t] = void 0;
}
function s(...t) {
    return E("setTimeout")(...t);
}
