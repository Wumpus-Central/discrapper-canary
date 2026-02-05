"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(961350),
    a = n(290863),
    s = n(685396),
    o = n(652215);
function l(e) {
    let t = (0, r.bG)([i.default], () => i.default.getId() === e),
        n = (0, s.K)(),
        l = (0, r.bG)([a.A], () =>
            a.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === o.$pd.CUSTOM_STATUS;
            }),
        );
    return t ? n : l;
}
