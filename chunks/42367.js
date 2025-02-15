a.d(e, { O: () => o });
var r = a(151122),
    n = a(642112),
    _ = a(878719);
let o = (0, r._I)((t = {}) => {
    let e = t.limit || 5,
        a = t.key || 'cause';
    return {
        name: 'LinkedErrors',
        preprocessEvent(t, r, o) {
            let i = o.getOptions();
            (0, n.Z)(_.GJ, i.stackParser, i.maxValueLength, a, e, t, r);
        }
    };
});
