_.d(e, { O: () => o });
var a = _(151122),
    r = _(642112),
    n = _(878719);
let o = (0, a._I)((t = {}) => {
    let e = t.limit || 5,
        _ = t.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(t, a, o) {
            let E = o.getOptions();
            (0, r.Z)(n.GJ, E.stackParser, E.maxValueLength, _, e, t, a);
        },
    };
});
