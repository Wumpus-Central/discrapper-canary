"use strict";
n.d(t, { Y: () => r, v: () => a });
let i = new Set();
function r(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function a(e) {
    if (0 !== i.size) for (let t of i) t(e);
}
