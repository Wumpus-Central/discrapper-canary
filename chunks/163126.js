"use strict";
n.d(t, { $: () => a, A: () => s });
var r = n(444927),
    i = n(964486);
function s() {
    let e = (0, r.A)(() => new AbortController());
    return (
        (0, i.l0)(() => {
            e.abort();
        }),
        e.signal
    );
}
function a(e) {
    let t = (0, r.A)(() => new AbortController());
    return (
        (0, i.l0)(() => {
            setTimeout(() => {
                t.abort();
            }, e);
        }),
        t.signal
    );
}
