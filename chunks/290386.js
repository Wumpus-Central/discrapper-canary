n.d(t, { U: () => s, Z: () => l });
var i = n(945810),
    r = n(652215);
let a = (0, i.mj)({
    name: "2026-08-user-bio-max-length",
    kind: "user",
    defaultConfig: { maxLength: r.NA2 },
    variations: { 0: { maxLength: r.NA2 }, 1: { maxLength: r.wKD } },
});
function s(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).maxLength;
}
function l(e) {
    let { location: t } = e;
    return a.getConfig({ location: t }).maxLength;
}
