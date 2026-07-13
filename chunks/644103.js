n.d(t, { Y: () => l, v: () => s });
let i = new Set();
function l(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function s(e) {
    if (0 !== i.size) for (let t of i) t(e);
}
