n.d(t, { s: () => o });
var r = n(570140),
    i = n(638395);
let a = {};
function o(e) {
    let { enabled: t = !i.Z.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
    r.Z.dispatch({
        type: "LAB_FEATURE_TOGGLE",
        labFeature: e,
        enabled: t,
    });
}
