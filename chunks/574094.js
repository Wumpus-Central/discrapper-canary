"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    r = n(4616),
    l = n(714087);
function a(e, t) {
    let { innerWidth: n, innerHeight: i } = window;
    if (0 === e || 0 === t) return null;
    let s = t / e,
        r = n,
        l = Math.round(n * s);
    return (
        l < i && ((l = i), (r = Math.round(i * (s = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: r, height: l }
    );
}
function o(e) {
    let { splash: t, children: n } = e,
        [{ width: o, height: c }, d] = s.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
    return (
        s.useEffect(() => {
            function e() {
                d((e) => {
                    let { naturalWidth: t, naturalHeight: n } = e;
                    return a(t, n) ?? e;
                });
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.A, {
                    className: l.T,
                    onLoad: function (e) {
                        let { currentTarget: t } = e,
                            { naturalWidth: n, naturalHeight: i } = t,
                            s = a(n, i);
                        null != s && d(s);
                    },
                    src: t,
                    width: o,
                    height: c,
                }),
                (0, i.jsx)("div", { className: l.Q, children: n }),
            ],
        })
    );
}
