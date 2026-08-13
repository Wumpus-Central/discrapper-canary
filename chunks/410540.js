"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(280450),
    a = n(290863),
    s = n(685396),
    l = n(652215);
function o(e) {
    let t = (0, i.bG)([r.default], () => r.default.getId() === e),
        n = (0, s.K)(),
        o = (0, i.bG)([a.A], () =>
            a.A.findActivity(e, (e) => {
                let { type: t } = e;
                return t === l.$pd.CUSTOM_STATUS;
            }),
        );
    return t ? n : o;
}
