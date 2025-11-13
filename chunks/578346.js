a.d(e, {
    D2: () => c,
    Hj: () => E,
    rK: () => s,
});
var r = a(176984),
    _ = a(622916),
    n = a(688838);
let o = {},
    i = {};
function E(t, e) {
    (o[t] = o[t] || []), o[t].push(e);
}
function c(t, e) {
    i[t] || (e(), (i[t] = !0));
}
function s(t, e) {
    let a = t && o[t];
    if (a)
        for (let o of a)
            try {
                o(e);
            } catch (e) {
                r.X &&
                    _.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, n.$P)(o)}
Error:`,
                        e,
                    );
            }
}
