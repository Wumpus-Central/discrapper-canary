n.d(t, { Z: () => d }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(481060),
    o = n(728285),
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
        [d, f] = r.useState(!1),
        p = (0, o.Aq)();
    return (
        r.useEffect(() => {
            function e() {
                f(!0);
            }
            function t() {
                f(!1);
            }
            return (
                p.subscribe(c.CkL.POPOUT_SHOW, e),
                p.subscribe(c.CkL.POPOUT_HIDE, t),
                () => {
                    p.unsubscribe(c.CkL.POPOUT_SHOW, e), p.unsubscribe(c.CkL.POPOUT_HIDE, t);
                }
            );
        }, [p]),
        e || t || d || n
    );
}
