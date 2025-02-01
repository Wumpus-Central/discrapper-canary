var i = n(709998),
    r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g,
    s = i(function (e) {
        var t = [];
        return (
            46 === e.charCodeAt(0) && t.push(''),
            e.replace(r, function (e, n, i, r) {
                t.push(i ? r.replace(a, '$1') : n || e);
            }),
            t
        );
    });
e.exports = s;
