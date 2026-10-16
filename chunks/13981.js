n.d(t, { M6: () => a, Q9: () => l, ik: () => o, sC: () => s });
var i = n(196765),
    r = n(437614);
let a = (0, i.v)(() => ({ campaignId: null, status: r.yY.PENDING }));
function s(e) {
    let { isPreview: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    a.setState({ campaignId: e, status: t ? r.yY.PREVIEW : r.yY.PENDING });
}
function l() {
    a.setState({ status: r.yY.READY });
}
function o(e) {
    null != a.getState().campaignId && a.setState({ campaignId: null, status: r.yY.PENDING });
}
