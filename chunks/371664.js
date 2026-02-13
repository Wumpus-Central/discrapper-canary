i.d(t, { A: () => r, K: () => a });
var n = i(627968),
    s = i(64700),
    l = i(953727);
let a = 8;
function r(e) {
    let { width: t = 80, height: i = 28, color: r = "currentColor", foreground: o, ...c } = e,
        d = `pill-frame-pattern-${i}`,
        u = s.useMemo(() => {
            let e;
            return (
                (e = i - 8),
                `m0 0h8v${i}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [i]);
    return (0, n.jsxs)("svg", {
        ...(0, l.A)(c),
        width: t,
        height: i,
        viewBox: `0 0 ${t} ${i}`,
        children: [
            (0, n.jsx)("pattern", {
                id: d,
                width: a / t,
                height: "1",
                children: (0, n.jsx)("path", { d: u, fillRule: "evenodd", fill: r, className: o }),
            }),
            (0, n.jsx)("rect", { fill: `url(#${d})`, height: "100%", width: "100%" }),
        ],
    });
}
