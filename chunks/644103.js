t.d(s, { Y: () => n, v: () => l });
let i = new Set();
function n(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function l(e) {
    if (0 !== i.size) for (let s of i) s(e);
}
