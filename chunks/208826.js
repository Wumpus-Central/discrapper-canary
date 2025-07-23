(n.d(t, { Z: () => d }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(819640),
    l = n(574254),
    c = n(981631);
function u(e) {
    return !Object.entries(e).every((e) => {
        let [t, n] = e;
        return 0 === n.length;
    });
}
function d() {
    let e = (0, a.s9z)((e) => u(e)),
        t = (0, i.e7)([l.Z], () => l.Z.isOpen()),
        n = (0, i.e7)([s.Z], () => s.Z.hasLayers()),
        [d, _] = r.useState(!1),
        f = (0, o.Aq)();
    return (
        r.useEffect(() => {
            function e() {
                _(!0);
            }
            function t() {
                _(!1);
            }
            return (
                f.subscribe(c.CkL.POPOUT_SHOW, e),
                f.subscribe(c.CkL.POPOUT_HIDE, t),
                () => {
                    (f.unsubscribe(c.CkL.POPOUT_SHOW, e), f.unsubscribe(c.CkL.POPOUT_HIDE, t));
                }
            );
        }, [f]),
        e || t || d || n
    );
}
