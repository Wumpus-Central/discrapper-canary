"use strict";
n.d(t, { W: () => c });
var i = n(64700),
    s = n(735438),
    r = n(417597),
    l = n(493527),
    a = n(544395),
    o = n(352763);
let c = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, r.bG)([a.A], () => a.A.validate(e), [e]),
        u = (0, r.bG)([a.A], () => a.A.isRateLimited()),
        _ = i.useMemo(
            () => (0, s.debounce)((e) => l.A.attemptUsername(e, n ? "registration" : "modal", n, c), 800),
            [n, c],
        );
    return (
        i.useEffect(() => {
            t && !u && null == d && "" !== e && _(e);
        }, [t, u, d, e, _]),
        i.useMemo(() => (null != d ? (0, o.z)(d) : void 0), [d])
    );
};
