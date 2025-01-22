r.d(n, {
    AW: function () {
        return o;
    },
    Ju: function () {
        return s;
    },
    pR: function () {
        return l;
    }
});
var i = r(695346),
    a = r(990266);
function o(e) {
    i.up.updateSetting(e);
}
function s() {
    let { disabled: e } = a.Z.useExperiment({ location: 'ExpressionSuggestions' });
    return e;
}
function l() {
    let e = i.up.useSetting();
    return !s() && e;
}
