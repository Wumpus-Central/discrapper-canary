n.d(e, { A: () => i });
var l = n(582128),
    r = n(974930);
function i(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, a] = l.useState(() => (0, r.CC)(t, e));
    return (
        l.useEffect(() => {
            if (!n) return;
            a((0, r.CC)(t, e));
            let l = setInterval(() => a((0, r.CC)(t, e)), 1e3);
            return () => {
                clearInterval(l);
            };
        }, [t, e, n]),
        i
    );
}
