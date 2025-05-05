n.d(t, { Z: () => s }), n(388685);
var r = n(73800),
    i = n(40851),
    a = n(228168),
    o = n(981631);
function s() {
    let [e, t] = r.useState(!1),
        n = (0, i.Aq)();
    return (
        r.useEffect(() => {
            function e(e) {
                e === a.Tg && t(!0);
            }
            function r(e) {
                e === a.Tg && t(!1);
            }
            return (
                n.subscribe(o.CkL.POPOUT_SHOW, e),
                n.subscribe(o.CkL.POPOUT_HIDE, r),
                () => {
                    n.unsubscribe(o.CkL.POPOUT_SHOW, e), n.unsubscribe(o.CkL.POPOUT_HIDE, r);
                }
            );
        }, [n]),
        e
    );
}
