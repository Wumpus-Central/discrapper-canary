n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(40851),
    o = n(228168),
    a = n(981631);
function s() {
    let [e, t] = r.useState(!1),
        n = (0, i.Aq)();
    return (
        r.useEffect(() => {
            function e(e) {
                e === o.Tg && t(!0);
            }
            function r(e) {
                e === o.Tg && t(!1);
            }
            return (
                n.subscribe(a.CkL.POPOUT_SHOW, e),
                n.subscribe(a.CkL.POPOUT_HIDE, r),
                () => {
                    n.unsubscribe(a.CkL.POPOUT_SHOW, e), n.unsubscribe(a.CkL.POPOUT_HIDE, r);
                }
            );
        }, [n]),
        e
    );
}
