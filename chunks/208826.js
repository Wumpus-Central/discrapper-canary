n.d(t, { Z: () => d }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(40851),
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
    let e = (0, o.s9z)((e) => u(e)),
        t = (0, i.e7)([l.Z], () => l.Z.isOpen()),
        n = (0, i.e7)([s.Z], () => s.Z.hasLayers()),
        [d, f] = r.useState(!1),
        _ = (0, a.Aq)();
    return (
        r.useEffect(() => {
            function e() {
                f(!0);
            }
            function t() {
                f(!1);
            }
            return (
                _.subscribe(c.CkL.POPOUT_SHOW, e),
                _.subscribe(c.CkL.POPOUT_HIDE, t),
                () => {
                    _.unsubscribe(c.CkL.POPOUT_SHOW, e), _.unsubscribe(c.CkL.POPOUT_HIDE, t);
                }
            );
        }, [_]),
        e || t || d || n
    );
}
