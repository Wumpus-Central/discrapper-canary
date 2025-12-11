n.d(t, {
    $: () => i,
    D: () => o,
});
var r = n(427164),
    i = (function (e) {
        return (e.Control = "control"), (e.NoSoftwareDecode = "no_software_decode"), (e.Disabled = "disabled"), e;
    })({});
let a = (0, r.le)({
    name: "2025-11-h265-no-software",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        1: { treatment: "no_software_decode" },
        2: { treatment: "disabled" },
    },
});
function o(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
