"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(495544),
    s = n(290863),
    a = n(685396),
    o = n(652215);
function l(e) {
    let t = (0, i.bG)([r.default], () => r.default.getId() === e),
        n = (0, a.K)(),
        l = (0, i.bG)([s.A], () =>
            s.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === o.$pd.CUSTOM_STATUS;
            }),
        );
    return t ? n : l;
}
