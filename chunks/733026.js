n.d(t, { C: () => r }), n(653041);
var i = n(581364);
function r(e) {
    let t = e.split(',').map((e) => e.trim()),
        n = [],
        r = [];
    return (
        t.forEach((e) => {
            (0, i.BH)(e) ? n.push(e) : r.push(e);
        }),
        [r, n]
    );
}
