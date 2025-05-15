n.d(t, { Z: () => s }), n(388685);
var r = n(73800),
    i = n(40851),
    a = n(981631);
let o = ['Shift', 'Alt', 'Meta', 'Control'];
function s(e, t) {
    let [n, s] = r.useState(0),
        l = (0, i.Aq)();
    r.useEffect(() => {
        let e = () => s((e) => e + 1),
            t = () => s((e) => Math.max(0, e - 1));
        return (
            l.subscribe(a.CkL.POPOUT_SHOW, e),
            l.subscribe(a.CkL.POPOUT_HIDE, t),
            () => {
                l.unsubscribe(a.CkL.POPOUT_SHOW, e), l.unsubscribe(a.CkL.POPOUT_HIDE, t);
            }
        );
    }, [l]);
    let [c, u] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            let r = (e) => {
                    if ((!t || n > 0) && c) return void u(!1);
                    (!c && n > 0) || (e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.indexOf(e.key) >= 0)) || u((e) => !e);
                },
                i = c ? 'keyup' : 'mousemove';
            return t && e.addEventListener(i, r), () => (null == e ? void 0 : e.removeEventListener(i, r));
        }, [e, c, n, t]),
        t && 0 === n && c
    );
}
