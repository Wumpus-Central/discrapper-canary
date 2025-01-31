a.d(e, {
    D2: () => s,
    Hj: () => c,
    rK: () => E
});
var r = a(176984),
    n = a(622916),
    o = a(688838);
let _ = {},
    i = {};
function c(t, e) {
    (_[t] = _[t] || []), _[t].push(e);
}
function s(t, e) {
    i[t] || (e(), (i[t] = !0));
}
function E(t, e) {
    let a = t && _[t];
    if (a)
        for (let _ of a)
            try {
                _(e);
            } catch (e) {
                r.X &&
                    n.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, o.$P)(_)}
Error:`,
                        e
                    );
            }
}
