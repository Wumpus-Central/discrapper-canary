r.d(e, { j: () => n, x: () => s });
var i = r(582128),
    l = r(828596);
function s(t) {
    let { applicationId: e } = t;
    i.useEffect(() => {
        null != e && (0, l.l9)({ applicationId: e });
    }, [e]);
}
function n(t) {
    let { skuIds: e } = t;
    i.useEffect(() => {
        0 !== e.length && (0, l.N4)({ skuIds: e });
    }, [e]);
}
