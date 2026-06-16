n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    r = n(4616),
    s = n(714087);
function a(e, t) {
    let { innerWidth: n, innerHeight: i } = window;
    if (0 === e || 0 === t) return null;
    let l = t / e,
        r = n,
        s = Math.round(n * l);
    return (
        s < i && ((s = i), (r = Math.round(i * (l = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: r, height: s }
    );
}
function o(e) {
    let { splash: t, children: n } = e,
        [{ width: o, height: d }, h] = l.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
    return (
        l.useEffect(() => {
            function e() {
                h((e) => {
                    let { naturalWidth: t, naturalHeight: n } = e;
                    return a(t, n) ?? e;
                });
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.A, {
                    className: s.T,
                    onLoad: function (e) {
                        let { currentTarget: t } = e,
                            { naturalWidth: n, naturalHeight: i } = t,
                            l = a(n, i);
                        null != l && h(l);
                    },
                    src: t,
                    width: o,
                    height: d,
                }),
                (0, i.jsx)("div", { className: s.Q, children: n }),
            ],
        })
    );
}
