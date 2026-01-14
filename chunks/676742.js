n.d(t, { Z: () => s }), n(388685);
var r = n(473749),
    i = n(846519),
    a = n(864106);
let o = 2147483647;
function s(e) {
    let [t, n] = r.useState(!1),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                let r = (0, a.fO)(e);
                n(r);
                let l = 1000 * e.expiresAt - Date.now();
                if (!r && l > 0) {
                    let e = new i.V7();
                    e.start(Math.min(o, l), () => t()), (s.current = e);
                }
            };
            return (
                t(),
                () => {
                    var e;
                    return null == (e = s.current) ? void 0 : e.stop();
                }
            );
        }, [e]),
        r.useEffect(() => {
            if (t) {
                var e;
                null == (e = s.current) || e.stop();
            }
        }, [t]),
        t ? void 0 : e
    );
}
