a.d(e, { O: () => o });
var r = a(151122),
    _ = a(642112),
    n = a(878719);
let o = (0, r._I)((t = {}) => {
    let e = t.limit || 5,
        a = t.key || 'cause';
    return {
        name: 'LinkedErrors',
        preprocessEvent(t, r, o) {
            let i = o.getOptions();
            (0, _.Z)(n.GJ, i.stackParser, i.maxValueLength, a, e, t, r);
        }
    };
});
