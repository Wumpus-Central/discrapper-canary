l.d(s, { Y: () => i, v: () => a });
let t = new Set();
function i(e) {
    return (
        t.add(e),
        () => {
            t.delete(e);
        }
    );
}
function a(e) {
    if (0 !== t.size) for (let s of t) s(e);
}
