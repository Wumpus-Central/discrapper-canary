r.d(n, {
    C: function () {
        return o;
    }
});
var i = r(653041);
var a = r(581364);
function o(e) {
    let n = e.split(',').map((e) => e.trim()),
        r = [],
        i = [];
    return (
        n.forEach((e) => {
            (0, a.BH)(e) ? r.push(e) : i.push(e);
        }),
        [i, r]
    );
}
