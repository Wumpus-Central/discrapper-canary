n.d(t, { A: () => s });
var r = n(627968),
    l = n(64700),
    a = n(552140);
let s = function (e) {
    let { colors: t, angle: n = 180, padding: s = 16, children: i } = e,
        c = l.useMemo(() => {
            if (t.length > 1) return `linear-gradient(${n}deg, ${t.join(", ")})`;
            if (t.length > 0) {
                let e = t[0];
                return `linear-gradient(${n}deg, ${e}, ${e})`;
            }
        }, [t, n]);
    return (0, r.jsx)("div", { className: a.k, style: { backgroundImage: c, padding: s }, children: i });
};
