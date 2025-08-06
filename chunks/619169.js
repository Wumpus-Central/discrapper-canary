let r;
n.d(t, { ur: () => a }), n(73800);
let i = !!("undefined" != typeof window && window.document && window.document.createElement),
    o = new Map();
function a(e, t) {
    if (e === t) return e;
    let n = o.get(e);
    if (n) return n.forEach((e) => (e.current = t)), t;
    let r = o.get(t);
    return r ? (r.forEach((t) => (t.current = e)), e) : t;
}
"undefined" != typeof FinalizationRegistry &&
    (r = new FinalizationRegistry((e) => {
        o.delete(e);
    }));
