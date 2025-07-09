n.d(t, { s: () => a });
var i = n(570140),
    r = n(638395);
let s = {};
function a(e) {
    let { enabled: t = !r.Z.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    i.Z.dispatch({
        type: 'LAB_FEATURE_TOGGLE',
        labFeature: e,
        enabled: t
    });
}
