r.d(e, { j: () => l, x: () => s });
var i = r(582128),
    n = r(758445);
function s(t) {
    let { applicationId: e } = t;
    i.useEffect(() => {
        null != e && (0, n.l9)({ applicationId: e });
    }, [e]);
}
function l(t) {
    let { skuIds: e } = t;
    i.useEffect(() => {
        0 !== e.length && (0, n.N4)({ skuIds: e });
    }, [e]);
}
