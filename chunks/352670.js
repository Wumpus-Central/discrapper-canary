s.d(t, { Y: () => r }), s(323874), s(14289), s(35956);
var n = s(64700),
    l = s(873263),
    a = s(458518);
function r() {
    let e = (0, a.o)(),
        t = (0, l.W6)(),
        s = n.useRef(null),
        r = n.useCallback(
            (n) => {
                let l = new URLSearchParams(s.current ?? e);
                for (let [e, t] of Object.entries(n)) null == t ? l.delete(e) : l.set(e, t);
                (s.current = l),
                    t.replace({ search: l.toString() }),
                    Promise.resolve().then(() => {
                        s.current = null;
                    });
            },
            [e, t],
        );
    return [e, r];
}
