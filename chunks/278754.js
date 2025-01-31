n.d(t, {
    AW: () => a,
    Ju: () => s,
    pR: () => o
});
var i = n(695346),
    r = n(990266);
function a(e) {
    i.up.updateSetting(e);
}
function s() {
    let { disabled: e } = r.i.useExperiment({ location: 'ExpressionSuggestions' });
    return e;
}
function o() {
    let e = i.up.useSetting();
    return !s() && e;
}
