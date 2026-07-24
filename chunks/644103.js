t.d(s, { Y: () => l, v: () => n });
let i = new Set();
function l(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function n(e) {
    if (0 !== i.size) for (let s of i) s(e);
}
