r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(40851),
    u = r(819640),
    c = r(574254),
    d = r(981631);
function f(e) {
    return !Object.entries(e).every((e) => {
        let [n, r] = e;
        return 0 === r.length;
    });
}
function p() {
    let e = (0, s.useModalsStore)((e) => f(e)),
        n = (0, o.e7)([c.Z], () => c.Z.isOpen()),
        r = (0, o.e7)([u.Z], () => u.Z.hasLayers()),
        [i, p] = a.useState(!1),
        h = (0, l.Aq)();
    return (
        a.useEffect(() => {
            function e() {
                p(!0);
            }
            function n() {
                p(!1);
            }
            return (
                h.subscribe(d.CkL.POPOUT_SHOW, e),
                h.subscribe(d.CkL.POPOUT_HIDE, n),
                () => {
                    h.unsubscribe(d.CkL.POPOUT_SHOW, e), h.unsubscribe(d.CkL.POPOUT_HIDE, n);
                }
            );
        }, [h]),
        e || n || i || r
    );
}
