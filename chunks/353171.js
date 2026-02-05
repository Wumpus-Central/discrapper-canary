n.d(t, { s: () => a });
var i = n(73153),
    l = n(303622);
let s = {};
function a(e) {
    let { enabled: t = !l.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    i.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
}
