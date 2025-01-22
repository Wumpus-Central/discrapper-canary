var i = r(934563),
    a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    o = /\\(\\)?/g,
    s = (0, i.Z)(function (e) {
        var n = [];
        return (
            46 === e.charCodeAt(0) && n.push(''),
            e.replace(a, function (e, r, i, a) {
                n.push(i ? a.replace(o, '$1') : r || e);
            }),
            n
        );
    });
n.Z = s;
