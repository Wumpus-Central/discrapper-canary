"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    s = n(733391),
    a = n(832163);
function o(e) {
    let { applicationId: t } = e,
        n = (0, r.bG)([a.A], () => (null != t ? a.A.getStorefrontDataForApplicationId(t) : void 0), [t]);
    return (
        i.useEffect(() => {
            null != t && (0, s.ap)(t, { eager: !1 });
        }, [t]),
        n
    );
}
