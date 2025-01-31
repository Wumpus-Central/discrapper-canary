n.d(t, { Z: () => l }), n(47120);
var i = n(192379),
    r = n(846519),
    a = n(864106),
    s = n(215023);
let o = 2147483647;
function l(e) {
    let [t, n] = i.useState(!1),
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            let t = () => {
                if (null == e || !('expiresAt' in e) || null == e.expiresAt) {
                    n(!1);
                    return;
                }
                let i = (0, a.fO)(e);
                n(i);
                let u = (null == e ? void 0 : e.skuId) === '1251324401459265537' || (null == e ? void 0 : e.skuId) === '1252353273256480818' ? 950400000 : s.Cm,
                    c = 1000 * e.expiresAt + u - Date.now();
                if (!i && c > 0) {
                    let e = new r.V7();
                    e.start(Math.min(o, c), () => t()), (l.current = e);
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
        i.useEffect(() => {
            if (t) {
                var e;
                null === (e = l.current) || void 0 === e || e.stop();
            }
        }, [t]),
        t ? void 0 : e
    );
}
