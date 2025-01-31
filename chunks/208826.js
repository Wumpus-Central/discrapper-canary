n.d(t, { Z: () => d }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(40851),
    o = n(819640),
    l = n(574254),
    u = n(981631);
function c(e) {
    return !Object.entries(e).every((e) => {
        let [t, n] = e;
        return 0 === n.length;
    });
}
function d() {
    let e = (0, a.s9z)((e) => c(e)),
        t = (0, r.e7)([l.Z], () => l.Z.isOpen()),
        n = (0, r.e7)([o.Z], () => o.Z.hasLayers()),
        [d, f] = i.useState(!1),
        _ = (0, s.Aq)();
    return (
        i.useEffect(() => {
            function e() {
                f(!0);
            }
            function t() {
                f(!1);
            }
            return (
                _.subscribe(u.CkL.POPOUT_SHOW, e),
                _.subscribe(u.CkL.POPOUT_HIDE, t),
                () => {
                    _.unsubscribe(u.CkL.POPOUT_SHOW, e), _.unsubscribe(u.CkL.POPOUT_HIDE, t);
                }
            );
        }, [_]),
        e || t || d || n
    );
}
