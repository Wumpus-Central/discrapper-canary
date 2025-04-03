var r = a(915646),
    n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    _ = /\\(\\)?/g;
t.exports = r(function (t) {
    var e = [];
    return (
        46 === t.charCodeAt(0) && e.push(''),
        t.replace(n, function (t, a, r, n) {
            e.push(r ? n.replace(_, '$1') : a || t);
        }),
        e
    );
});
