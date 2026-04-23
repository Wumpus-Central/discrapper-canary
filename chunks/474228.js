"use strict";
function r(e) {
    let t = new Image();
    return (
        (t.src = e),
        (t.crossOrigin = "anonymous"),
        new Promise((e) => {
            (t.onload = () => {
                var n;
                let r, i, s, a;
                "" !== t.src &&
                    e(
                        ((i = (r = document.createElement("canvas")).getContext("2d")),
                        (r.width = s = Math.min(t.width, t.height)),
                        (r.height = s),
                        null != i &&
                            ((n = i).beginPath(),
                            n.arc(s / 2, s / 2, s / 2, 0, 2 * Math.PI),
                            n.closePath(),
                            n.clip(),
                            n.drawImage(t, 0, 0, s, s, 0, 0, s, s),
                            (i = n)),
                        (a = r.toDataURL()),
                        r.remove(),
                        a),
                    );
            }),
                (t.onerror = () => {
                    e(t.src);
                });
        })
    );
}
n.d(t, { w: () => r });
