n.d(t, { A: () => d });
var i = n(477900),
    l = n(582128),
    s = n(4616),
    r = n(528962);
function a(e, t) {
    let { innerWidth: n, innerHeight: i } = window;
    if (0 === e || 0 === t) return null;
    let l = t / e,
        s = n,
        r = Math.round(n * l);
    return (
        r < i && ((r = i), (s = Math.round(i * (l = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: s, height: r }
    );
}
function d(e) {
    let { splash: t, children: n } = e,
        [{ width: d, height: o }, h] = l.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
    return (
        l.useEffect(() => {
            function e() {
                h((e) => {
                    let { naturalWidth: t, naturalHeight: n } = e;
                    return a(t, n) ?? e;
                });
            }
            return (window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.A, {
                    className: r.T,
                    onLoad: function (e) {
                        let { currentTarget: t } = e,
                            { naturalWidth: n, naturalHeight: i } = t,
                            l = a(n, i);
                        null != l && h(l);
                    },
                    src: t,
                    width: d,
                    height: o,
                }),
                (0, i.jsx)("div", { className: r.Q, children: n }),
            ],
        })
    );
}
