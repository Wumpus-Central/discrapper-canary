n.d(e, { A: () => i });
var l = n(64700),
    r = n(647090);
function i(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, s] = l.useState(() => (0, r.CC)(t, e));
    return (
        l.useEffect(() => {
            if (!n) return;
            s((0, r.CC)(t, e));
            let l = setInterval(() => s((0, r.CC)(t, e)), 1e3);
            return () => {
                clearInterval(l);
            };
        }, [t, e, n]),
        i
    );
}
