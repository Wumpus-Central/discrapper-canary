a.d(t, { CL: () => n, jy: () => l });
var s,
    i = a(945810),
    n =
        (((s = {}).CONTROL = "control"),
        (s.TREATMENT_A = "treatment_a"),
        (s.TREATMENT_B = "treatment_b"),
        (s.TREATMENT_C = "treatment_c"),
        s);
let r = (0, i.mj)({
    name: "2026-05-nitro-home-header",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "treatment_a" },
        2: { treatment: "treatment_b" },
        3: { treatment: "treatment_c" },
    },
});
function l(e) {
    let t = r.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
