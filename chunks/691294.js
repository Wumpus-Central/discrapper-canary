e.d(i, {
    D: () => s,
    m: () => c
});
var n = e(960048);
let o = 5 / 11,
    a = 1 + 1 / 11,
    l = 1 / 11;
function r(t, i, e) {
    return i.beginPath(), i.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI), i.closePath(), i.clip(), i.drawImage(t, 0, 0, e, e, 0, 0, e, e), i;
}
function s(t) {
    let i = new Image();
    return (
        (i.src = t),
        (i.crossOrigin = 'anonymous'),
        new Promise((t, e) => {
            (i.onload = () => {
                '' !== i.src &&
                    t(
                        (function (t) {
                            let i = document.createElement('canvas'),
                                e = i.getContext('2d'),
                                n = Math.min(t.width, t.height);
                            (i.width = n), (i.height = n), null != e && (e = r(t, e, n));
                            let o = i.toDataURL();
                            return i.remove(), o;
                        })(i)
                    );
            }),
                (i.onerror = (t) => {
                    n.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), e(i.src);
                });
        })
    );
}
function c(t, i) {
    if (null == i) return s(t);
    let e = new Image();
    (e.src = t), (e.crossOrigin = 'anonymous');
    let c = new Image();
    return (
        (c.src = i),
        (c.crossOrigin = 'anonymous'),
        new Promise((t, i) => {
            (e.onload = () => {
                '' !== e.src &&
                    ((c.onload = () => {
                        t(
                            (function (t, i) {
                                let e = document.createElement('canvas'),
                                    n = e.getContext('2d'),
                                    s = Math.min(t.width, t.height);
                                (e.width = s * a), (e.height = s * a);
                                let c = s * o,
                                    u = e.width - c;
                                null != n && (n.save(), (n = r(t, n, s)).restore(), n.beginPath(), n.moveTo(u, u), n.roundRect(u, u, c, c, l * s), n.closePath(), n.clip(), n.drawImage(i, 0, 0, i.width, i.height, u, u, c, c));
                                let d = e.toDataURL();
                                return e.remove(), d;
                            })(e, c)
                        );
                    }),
                    (c.onerror = (t) => {
                        n.Z.captureMessage('Failed to load notification avatar to circle crop with secondary image: '.concat(t)), i(e.src);
                    }));
            }),
                (e.onerror = (t) => {
                    n.Z.captureMessage('Failed to load notification avatar to circle crop with secondary image: '.concat(t)), i(e.src);
                });
        })
    );
}
