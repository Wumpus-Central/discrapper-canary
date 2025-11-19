_.d(e, {
    L2: () => i,
    _6: () => c,
    iK: () => s,
});
var a = _(694043),
    r = _(622916),
    n = _(665909),
    o = _(395848);
let E = {};
function i(t) {
    let e = E[t];
    if (e) return e;
    let _ = o.m[t];
    if ((0, a.QC)(_)) return (E[t] = _.bind(o.m));
    let i = o.m.document;
    if (i && "function" == typeof i.createElement)
        try {
            let e = i.createElement("iframe");
            (e.hidden = !0), i.head.appendChild(e);
            let a = e.contentWindow;
            a && a[t] && (_ = a[t]), i.head.removeChild(e);
        } catch (e) {
            n.X && r.kg.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, e);
        }
    return _ ? (E[t] = _.bind(o.m)) : _;
}
function c(t) {
    E[t] = void 0;
}
function s(...t) {
    return i("setTimeout")(...t);
}
