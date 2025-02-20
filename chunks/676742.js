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
                if (null == e || !('expiresAt' in e) || null == e.expiresAt) {
                    n(!1);
                    return;
                }
                let r = (0, o.fO)(e);
                n(r);
                let c = (null == e ? void 0 : e.skuId) === '1251324401459265537' || (null == e ? void 0 : e.skuId) === '1252353273256480818' ? 950400000 : a.Cm,
                    u = 1000 * e.expiresAt + c - Date.now();
                if (!r && u > 0) {
                    let e = new i.V7();
                    e.start(Math.min(s, u), () => t()), (l.current = e);
                }
            };
            return (
                t(),
                () => {
                    var e;
                    return null === (e = l.current) || void 0 === e ? void 0 : e.stop();
                }
            );
        }, [e]),
        r.useEffect(() => {
            if (t) {
                var e;
                null === (e = l.current) || void 0 === e || e.stop();
            }
        }, [t]),
        t ? void 0 : e
    );
}
