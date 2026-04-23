n.d(t, { A: () => a, K: () => r });
var i = n(627968),
    l = n(64700),
    s = n(953727);
let r = 8;
function a(e) {
    let { width: t = 80, height: n = 28, color: a = "currentColor", foreground: o, ...u } = e,
        c = `pill-frame-pattern-${n}`,
        d = l.useMemo(() => {
            let e;
            return (
                (e = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(u),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [
            (0, i.jsx)("pattern", {
                id: c,
                width: r / t,
                height: "1",
                children: (0, i.jsx)("path", { d: d, fillRule: "evenodd", fill: a, className: o }),
            }),
            (0, i.jsx)("rect", { fill: `url(#${c})`, height: "100%", width: "100%" }),
        ],
    });
}
