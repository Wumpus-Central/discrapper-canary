t.d(s, { Y: () => i, v: () => n });
let l = new Set();
function i(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function n(e) {
    if (0 !== l.size) for (let s of l) s(e);
}
