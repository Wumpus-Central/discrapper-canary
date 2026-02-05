"use strict";
n.d(t, { W: () => d });
var i = n(64700),
    s = n(735438),
    r = n(417597),
    l = n(32120),
    a = n(686683),
    o = n(574454),
    c = n(871210);
let d = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, r.bG)([o.A], () => o.A.validate(e), [e]),
        h = (0, r.bG)([o.A], () => o.A.isRateLimited()),
        _ = (0, a.G)(),
        p = i.useMemo(
            () => (0, s.debounce)((e) => l.A.attemptPomelo(e, n ? "registration" : "modal", n, d), _),
            [_, n, d],
        );
    return (
        i.useEffect(() => {
            t && !h && null == u && "" !== e && p(e);
        }, [t, h, u, e, p]),
        i.useMemo(() => (null != u ? (0, c.z2)(u) : void 0), [u])
    );
};
