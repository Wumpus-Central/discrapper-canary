n.d(t, {
    AW: () => a,
    Ju: () => o,
    pR: () => s
});
var r = n(695346),
    i = n(990266);
function a(e) {
    r.up.updateSetting(e);
}
function o() {
    let { disabled: e } = i.i.useExperiment({ location: 'ExpressionSuggestions' });
    return e;
}
function s() {
    let e = r.up.useSetting();
    return !o() && e;
}
