let r;
(n.d(t, { ur: () => o }), n(73800));
let i = !!('undefined' != typeof window && window.document && window.document.createElement),
    a = new Map();
function o(e, t) {
    if (e === t) return e;
    let n = a.get(e);
    if (n) return (n.forEach((e) => (e.current = t)), t);
    let r = a.get(t);
    return r ? (r.forEach((t) => (t.current = e)), e) : t;
}
'undefined' != typeof FinalizationRegistry &&
    (r = new FinalizationRegistry((e) => {
        a.delete(e);
    }));
