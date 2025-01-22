r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(846519),
    s = r(864106),
    l = r(215023);
let u = 2147483647;
function c(e) {
    let [n, r] = a.useState(!1),
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            let n = () => {
                if (null == e || !('expiresAt' in e) || null == e.expiresAt) {
                    r(!1);
                    return;
                }
                let a = (0, s.fO)(e);
                r(a);
                let c = (null == e ? void 0 : e.skuId) === '1251324401459265537' || (null == e ? void 0 : e.skuId) === '1252353273256480818' ? 950400000 : l.Cm,
                    d = 1000 * e.expiresAt + c - Date.now();
                if (!a && d > 0) {
                    let e = new o.V7();
                    e.start(Math.min(u, d), () => n()), (i.current = e);
                }
            };
            return (
                n(),
                () => {
                    var e;
                    return null === (e = i.current) || void 0 === e ? void 0 : e.stop();
                }
            );
        }, [e]),
        a.useEffect(() => {
            if (n) {
                var e;
                null === (e = i.current) || void 0 === e || e.stop();
            }
        }, [n]),
        n ? void 0 : e
    );
}
