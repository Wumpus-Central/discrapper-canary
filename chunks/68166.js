n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(267102),
    o = n(186111),
    l = n(712687),
    c = n(652215);

function u(e) {
    return !Object.entries(e).every((e) => {
        let [t, n] = e;
        return 0 === n.length;
    });
}

function d() {
    let e = (0, a.red)((e) => u(e)),
        t = (0, i.bG)([l.A], () => l.A.isOpen()),
        n = (0, i.bG)([o.A], () => o.A.hasLayers()),
        [d, f] = r.useState(!1),
        p = (0, s.aL)();
    return (
        r.useEffect(() => {
            function e() {
                f(!0);
            }

            function t() {
                f(!1);
            }
            return (
                p.subscribe(c.jej.POPOUT_SHOW, e),
                p.subscribe(c.jej.POPOUT_HIDE, t),
                () => {
                    p.unsubscribe(c.jej.POPOUT_SHOW, e), p.unsubscribe(c.jej.POPOUT_HIDE, t);
                }
            );
        }, [p]),
        e || t || d || n
    );
}
