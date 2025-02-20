a.d(e, { O: () => _ });
var r = a(151122),
    n = a(642112),
    o = a(878719);
let _ = (0, r._I)((t = {}) => {
    let e = t.limit || 5,
        a = t.key || 'cause';
    return {
        name: 'LinkedErrors',
        preprocessEvent(t, r, _) {
            let i = _.getOptions();
            (0, n.Z)(o.GJ, i.stackParser, i.maxValueLength, a, e, t, r);
        }
    };
});
