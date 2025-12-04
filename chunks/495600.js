r.d(t, { O: () => o });
var n = r(688560),
    a = r(481081),
    i = r(350171);
let o = (0, n._I)((e = {}) => {
    let t = e.limit || 5,
        r = e.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(e, n, o) {
            let _ = o.getOptions();
            (0, a.Z)(i.GJ, _.stackParser, _.maxValueLength, r, t, e, n);
        },
    };
});
