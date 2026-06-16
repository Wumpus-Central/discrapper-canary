l.d(t, { A: () => s });
var r = l(627968),
    n = l(64700),
    a = l(552140);
let s = (e) => {
    let { colors: t, angle: l = 180, padding: s = 16, children: i } = e,
        c = n.useMemo(() => {
            if (t.length > 1) return `linear-gradient(${l}deg, ${t.join(", ")})`;
            if (t.length > 0) {
                let e = t[0];
                return `linear-gradient(${l}deg, ${e}, ${e})`;
            }
        }, [t, l]);
    return (0, r.jsx)("div", { className: a.k, style: { backgroundImage: c, padding: s }, children: i });
};
