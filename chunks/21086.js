"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(225687),
    a = n(397927),
    o = n(251358),
    l = n(610223),
    u = n(346640);
function c(e, t) {
    let [c, d] = (0, i.useState)(null),
        _ = (0, l.W)(s.A),
        f = (0, i.useCallback)(async () => {
            _(), d((await (0, o.du)({ activity: e })).changes);
        }, [e, _]);
    return (
        (0, i.useEffect)(() => {
            (0, o.Ox)({ activity: e }).catch(() => {
                (0, o.Ak)(),
                    t(u.Q0.MAIN),
                    (0, a.mMO)(async () => {
                        let { default: e } = await n.e("98443").then(n.bind(n, 838694));
                        return (t) => (0, r.jsx)(e, { ...t });
                    });
            });
        }, [e, t]),
        { rewards: c, onSuccess: f }
    );
}
