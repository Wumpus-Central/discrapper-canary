n.d(t, { P: () => a }), n(65234), n(111804), n(490233), n(97749), n(388685), n(704826), n(35282);
var r = n(473749),
    i = n(828700),
    l = n(169382);
function a() {
    let e = (0, l.l)(),
        t = (0, i.k6)(),
        n = r.useRef(null),
        a = r.useCallback(
            (r) => {
                var i;
                let l = new URLSearchParams(null != (i = n.current) ? i : e);
                for (let [e, t] of Object.entries(r)) null == t ? l.delete(e) : l.set(e, t);
                (n.current = l),
                    t.replace({ search: l.toString() }),
                    Promise.resolve().then(() => {
                        n.current = null;
                    });
            },
            [e, t],
        );
    return [e, a];
}
