n.d(t, {
    s: () => s,
});
var r = n(73153),
    i = n(303622);
let a = {};

function s(e) {
    let { enabled: t = !i.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
    r.h.dispatch({
        type: "LAB_FEATURE_TOGGLE",
        labFeature: e,
        enabled: t,
    });
}
