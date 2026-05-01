"use strict";
n.d(t, { $: () => a, A: () => s });
var i = n(444927),
    r = n(964486);
function s() {
    let e = (0, i.A)(() => new AbortController());
    return (
        (0, r.l0)(() => {
            e.abort();
        }),
        e.signal
    );
}
function a(e) {
    let t = (0, i.A)(() => new AbortController());
    return (
        (0, r.l0)(() => {
            setTimeout(() => {
                t.abort();
            }, e);
        }),
        t.signal
    );
}
