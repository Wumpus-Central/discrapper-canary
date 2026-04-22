i.d(e, { j: () => l, x: () => n });
var r = i(64700),
    s = i(828596);
function n(t) {
    let { applicationId: e, location: i } = t;
    r.useEffect(() => {
        null != e && (0, s.l9)({ applicationId: e, location: i });
    }, [e, i]);
}
function l(t) {
    let { skuIds: e, location: i } = t;
    r.useEffect(() => {
        0 !== e.length && (0, s.N4)({ skuIds: e, location: i });
    }, [e, i]);
}
