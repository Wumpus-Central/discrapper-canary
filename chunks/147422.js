"use strict";
n.d(t, { u: () => o }), n(321073);
var r = n(64700),
    i = n(349786),
    s = n(921925),
    a = n(520796);
let o = () => {
    let { errorMessage: e } = (0, s.e)({}),
        t = (0, a.P)(),
        n = (0, i.f)();
    return {
        errorMessage: e,
        warningMessage: t,
        richNotices: r.useMemo(() => {
            let e = [];
            return null != n && e.push(n), e;
        }, [n]),
    };
};
