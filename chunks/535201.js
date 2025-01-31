n.d(t, { p: () => o }), n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(846519);
function o(e) {
    let t = a()(e),
        [n, r] = i.useState(() => t.isAfter(Date.now()));
    return (
        i.useEffect(() => {
            if (!n) return;
            let e = new s.V7(),
                i = () => {
                    let n = Math.min(t.diff(Date.now(), 'millisecond'), 86400000);
                    null == e ||
                        e.start(n, () => {
                            t.isBefore(Date.now()) ? r(!1) : i();
                        });
                };
            return i(), () => e.stop();
        }, [n, t]),
        n
    );
}
