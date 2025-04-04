r.d(e, { ur: () => i }), r(192379), 'undefined' != typeof window && window.document && window.document.createElement;
let n = new Map();
function i(t, e) {
    if (t === e) return t;
    let r = n.get(t);
    if (r) return r.forEach((t) => (t.current = e)), e;
    let i = n.get(e);
    return i ? (i.forEach((e) => (e.current = t)), t) : e;
}
'undefined' != typeof FinalizationRegistry &&
    new FinalizationRegistry((t) => {
        n.delete(t);
    });
