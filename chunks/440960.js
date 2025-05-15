var r = n(709998),
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g;
e.exports = r(function (e) {
    var t = [];
    return (
        46 === e.charCodeAt(0) && t.push(''),
        e.replace(i, function (e, n, r, i) {
            t.push(r ? i.replace(a, '$1') : n || e);
        }),
        t
    );
});
