_.d(e, {
    D2: () => c,
    Hj: () => i,
    rK: () => s,
});
var a = _(176984),
    r = _(622916),
    n = _(688838);
let o = {},
    E = {};
function i(t, e) {
    (o[t] = o[t] || []), o[t].push(e);
}
function c(t, e) {
    E[t] || (e(), (E[t] = !0));
}
function s(t, e) {
    let _ = t && o[t];
    if (_)
        for (let o of _)
            try {
                o(e);
            } catch (e) {
                a.X &&
                    r.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, n.$P)(o)}
Error:`,
                        e,
                    );
            }
}
