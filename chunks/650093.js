a.d(e, {
    L2: () => c,
    _6: () => s,
    iK: () => E
});
var r = a(694043),
    n = a(622916),
    o = a(665909),
    _ = a(395848);
let i = {};
function c(t) {
    let e = i[t];
    if (e) return e;
    let a = _.m[t];
    if ((0, r.QC)(a)) return (i[t] = a.bind(_.m));
    let c = _.m.document;
    if (c && 'function' == typeof c.createElement)
        try {
            let e = c.createElement('iframe');
            (e.hidden = !0), c.head.appendChild(e);
            let r = e.contentWindow;
            r && r[t] && (a = r[t]), c.head.removeChild(e);
        } catch (e) {
            o.X && n.kg.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, e);
        }
    return a ? (i[t] = a.bind(_.m)) : a;
}
function s(t) {
    i[t] = void 0;
}
function E(...t) {
    return c('setTimeout')(...t);
}
