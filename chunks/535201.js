r.d(n, {
    p: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(913527),
    o = r.n(s),
    l = r(846519);
function u(e) {
    let n = o()(e),
        [r, i] = a.useState(() => n.isAfter(Date.now()));
    return (
        a.useEffect(() => {
            if (!r) return;
            let e = new l.V7(),
                a = () => {
                    let r = Math.min(n.diff(Date.now(), 'millisecond'), 86400000);
                    null == e ||
                        e.start(r, () => {
                            n.isBefore(Date.now()) ? i(!1) : a();
                        });
                };
            return a(), () => e.stop();
        }, [r, n]),
        r
    );
}
