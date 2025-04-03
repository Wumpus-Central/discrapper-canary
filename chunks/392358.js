n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(40851),
    o = n(981631);
let a = ['Shift', 'Alt', 'Meta', 'Control'];
function s(e, t) {
    let [n, s] = r.useState(0),
        l = (0, i.Aq)();
    r.useEffect(() => {
        let e = () => s((e) => e + 1),
            t = () => s((e) => Math.max(0, e - 1));
        return (
            l.subscribe(o.CkL.POPOUT_SHOW, e),
            l.subscribe(o.CkL.POPOUT_HIDE, t),
            () => {
                l.unsubscribe(o.CkL.POPOUT_SHOW, e), l.unsubscribe(o.CkL.POPOUT_HIDE, t);
            }
        );
    }, [l]);
    let [c, u] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            let r = (e) => {
                    if ((!t || n > 0) && c) return void u(!1);
                    (!c && n > 0) || (e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || a.indexOf(e.key) >= 0)) || u((e) => !e);
                },
                i = c ? 'keyup' : 'mousemove';
            return t && e.addEventListener(i, r), () => (null == e ? void 0 : e.removeEventListener(i, r));
        }, [e, c, n, t]),
        t && 0 === n && c
    );
}
