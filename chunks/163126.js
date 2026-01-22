n.d(t, {
    A: () => a,
});
var r = n(444927),
    i = n(964486);

function a() {
    let e = (0, r.A)(() => new AbortController());
    return (
        (0, i.l0)(() => {
            e.abort();
        }),
        e.signal
    );
}
