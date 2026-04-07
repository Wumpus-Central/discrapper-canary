"use strict";
n.d(t, { w: () => l });
let r = null,
    i = null,
    s = null;
function a(e, t, n) {
    return (
        t.beginPath(),
        t.arc(n / 2, n / 2, n / 2, 0, 2 * Math.PI),
        t.closePath(),
        t.clip(),
        t.drawImage(e, 0, 0, n, n, 0, 0, n, n),
        t
    );
}
function o(e) {
    let t = document.createElement("canvas"),
        n = t.getContext("2d"),
        r = Math.min(e.width, e.height);
    (t.width = r), (t.height = r), null != n && (n = a(e, n, r));
    let i = t.toDataURL();
    return t.remove(), i;
}
function l(e) {
    let t = new Image();
    return (
        (t.src = e),
        (t.crossOrigin = "anonymous"),
        new Promise((e) => {
            (t.onload = () => {
                "" === t.src || e(o(t));
            }),
                (t.onerror = () => {
                    e(t.src);
                });
        })
    );
}
