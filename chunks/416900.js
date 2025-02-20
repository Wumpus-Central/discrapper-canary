n.d(t, { Z: () => a });
var r = n(934563),
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    o = /\\(\\)?/g;
let a = (0, r.Z)(function (e) {
    var t = [];
    return (
        46 === e.charCodeAt(0) && t.push(''),
        e.replace(i, function (e, n, r, i) {
            t.push(r ? i.replace(o, '$1') : n || e);
        }),
        t
    );
});
