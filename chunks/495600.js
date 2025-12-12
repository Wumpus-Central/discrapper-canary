n.d(t, { O: () => o });
var r = n(688560),
    i = n(481081),
    a = n(350171);
let o = (0, r._I)((e = {}) => {
    let t = e.limit || 5,
        n = e.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(e, r, o) {
            let _ = o.getOptions();
            (0, i.Z)(a.GJ, _.stackParser, _.maxValueLength, n, t, e, r);
        },
    };
});
