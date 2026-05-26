n.d(t, { Y: () => s, v: () => i });
let l = new Set();
function s(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function i(e) {
    if (0 !== l.size) for (let t of l) t(e);
}
