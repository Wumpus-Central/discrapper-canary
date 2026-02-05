"use strict";
n.d(t, { w: () => u });
var r = n(728458);
let i = null,
    a = null,
    s = null;
function o(e, t, n) {
    return (
        t.beginPath(),
        t.arc(n / 2, n / 2, n / 2, 0, 2 * Math.PI),
        t.closePath(),
        t.clip(),
        t.drawImage(e, 0, 0, n, n, 0, 0, n, n),
        t
    );
}
function l(e) {
    let t = document.createElement("canvas"),
        n = t.getContext("2d"),
        r = Math.min(e.width, e.height);
    (t.width = r), (t.height = r), null != n && (n = o(e, n, r));
    let i = t.toDataURL();
    return t.remove(), i;
}
function u(e) {
    let t = new Image();
    return (
        (t.src = e),
        (t.crossOrigin = "anonymous"),
        new Promise((e) => {
            (t.onload = () => {
                "" === t.src || e(l(t));
            }),
                (t.onerror = (n) => {
                    r.A.captureMessage(`Failed to load notification avatar to circle crop: ${n}`), e(t.src);
                });
        })
    );
}
