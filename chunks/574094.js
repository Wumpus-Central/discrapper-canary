var l = n(477900),
    i = n(582128),
    r = n(4616),
    s = n(528962);
function a(e, t) {
    let { innerWidth: n, innerHeight: l } = window;
    if (0 === e || 0 === t) return null;
    let i = t / e,
        r = n,
        s = Math.round(n * i);
    return (
        s < l && ((s = l), (r = Math.round(l * (i = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: r, height: s }
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { splash: t, children: n } = e,
                [{ width: o, height: d }, u] = i.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
            return (
                i.useEffect(() => {
                    function e() {
                        u((e) => {
                            let { naturalWidth: t, naturalHeight: n } = e;
                            return a(t, n) ?? e;
                        });
                    }
                    return (window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
                }, []),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.A, {
                            className: s.T,
                            onLoad: function (e) {
                                let { currentTarget: t } = e,
                                    { naturalWidth: n, naturalHeight: l } = t,
                                    i = a(n, l);
                                null != i && u(i);
                            },
                            src: t,
                            width: o,
                            height: d,
                        }),
                        (0, l.jsx)("div", { className: s.Q, children: n }),
                    ],
                })
            );
        },
    },
);
