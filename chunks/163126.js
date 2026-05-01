n.d(t, { $: () => s, A: () => r });
var i = n(444927),
    a = n(964486);
function r() {
    let e = (0, i.A)(() => new AbortController());
    return (
        (0, a.l0)(() => {
            e.abort();
        }),
        e.signal
    );
}
function s(e) {
    let t = (0, i.A)(() => new AbortController());
    return (
        (0, a.l0)(() => {
            setTimeout(() => {
                t.abort();
            }, e);
        }),
        t.signal
    );
}
