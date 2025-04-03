r.d(t, { Z: () => i });
var n = r(934563),
    o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g;
let i = (0, n.Z)(function (e) {
    var t = [];
    return (
        46 === e.charCodeAt(0) && t.push(''),
        e.replace(o, function (e, r, n, o) {
            t.push(n ? o.replace(a, '$1') : r || e);
        }),
        t
    );
});
