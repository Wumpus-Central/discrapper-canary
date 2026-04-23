n.d(t, { $: () => s, A: () => a });
var i = n(444927),
    r = n(964486);
function a() {
    let e = (0, i.A)(() => new AbortController());
    return (
        (0, r.l0)(() => {
            e.abort();
        }),
        e.signal
    );
}
function s(e) {
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
