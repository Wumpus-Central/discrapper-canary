n.d(t, {
    D: () => u,
    m: () => d
});
var r = n(960048);
let i = 5 / 11,
    a = 1 + 1 / 11,
    o = 1 / 11;
function s(e, t, n) {
    return t.beginPath(), t.arc(n / 2, n / 2, n / 2, 0, 2 * Math.PI), t.closePath(), t.clip(), t.drawImage(e, 0, 0, n, n, 0, 0, n, n), t;
}
function l(e) {
    let t = document.createElement('canvas'),
        n = t.getContext('2d'),
        r = Math.min(e.width, e.height);
    (t.width = r), (t.height = r), null != n && (n = s(e, n, r));
    let i = t.toDataURL();
    return t.remove(), i;
}
function c(e, t) {
    let n = document.createElement('canvas'),
        r = n.getContext('2d'),
        l = Math.min(e.width, e.height);
    (n.width = l * a), (n.height = l * a);
    let c = l * i,
        u = n.width - c;
    null != r && (r.save(), (r = s(e, r, l)).restore(), r.beginPath(), r.moveTo(u, u), r.roundRect(u, u, c, c, o * l), r.closePath(), r.clip(), r.drawImage(t, 0, 0, t.width, t.height, u, u, c, c));
    let d = n.toDataURL();
    return n.remove(), d;
}
function u(e) {
    let t = new Image();
    return (
        (t.src = e),
        (t.crossOrigin = 'anonymous'),
        new Promise((e, n) => {
            (t.onload = () => {
                '' !== t.src && e(l(t));
            }),
                (t.onerror = (e) => {
                    r.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(e)), n(t.src);
                });
        })
    );
}
function d(e, t) {
    if (null == t) return u(e);
    let n = new Image();
    (n.src = e), (n.crossOrigin = 'anonymous');
    let i = new Image();
    return (
        (i.src = t),
        (i.crossOrigin = 'anonymous'),
        new Promise((e, t) => {
            (n.onload = () => {
                '' !== n.src &&
                    ((i.onload = () => {
                        e(c(n, i));
                    }),
                    (i.onerror = (e) => {
                        r.Z.captureMessage('Failed to load notification avatar to circle crop with secondary image: '.concat(e)), t(n.src);
                    }));
            }),
                (n.onerror = (e) => {
                    r.Z.captureMessage('Failed to load notification avatar to circle crop with secondary image: '.concat(e)), t(n.src);
                });
        })
    );
}
