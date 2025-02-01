n.d(t, { Z: () => s });
var i = n(934563),
    r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g;
let s = (0, i.Z)(function (e) {
    var t = [];
    return (
        46 === e.charCodeAt(0) && t.push(''),
        e.replace(r, function (e, n, i, r) {
            t.push(i ? r.replace(a, '$1') : n || e);
        }),
        t
    );
});
