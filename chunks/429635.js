"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    a = n(733391),
    s = n(832163);
function l(e) {
    let { applicationId: t } = e,
        n = (0, r.bG)([s.A], () => (null != t ? s.A.getStorefrontDataForApplicationId(t) : void 0), [t]);
    return (
        i.useEffect(() => {
            null != t && (0, a.ap)(t, { eager: !1 });
        }, [t]),
        n
    );
}
