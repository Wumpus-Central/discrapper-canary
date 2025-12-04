n.d(t, { Z: () => i }), n(388685);
var r = n(612776);
function i(e) {
    if (0 === e.length || 1 === e.length) return [];
    let t = new Set();
    return (
        e.forEach((e) => {
            t.add(r.bq[e]);
        }),
        [...t]
    );
}
