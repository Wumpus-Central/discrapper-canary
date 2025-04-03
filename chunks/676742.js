n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(846519),
    o = n(864106),
    a = n(215023);
let s = 2147483647;
function l(e) {
    let [t, n] = r.useState(!1),
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = () => {
                if (null == e || !('expiresAt' in e) || null == e.expiresAt) return void n(!1);
                let r = (0, o.fO)(e);
                n(r);
                let c = 1000 * e.expiresAt + a.Cm - Date.now();
                if (!r && c > 0) {
                    let e = new i.V7();
                    e.start(Math.min(s, c), () => t()), (l.current = e);
                }
            };
            return (
                t(),
                () => {
                    var e;
                    return null == (e = l.current) ? void 0 : e.stop();
                }
            );
        }, [e]),
        r.useEffect(() => {
            if (t) {
                var e;
                null == (e = l.current) || e.stop();
            }
        }, [t]),
        t ? void 0 : e
    );
}
