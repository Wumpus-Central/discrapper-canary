var r = n(733359),
    i = n(65183).OrderedSet,
    a = r.substr,
    o = i();
e.exports = function (e, t) {
    var n = Array(e.length).fill(o);
    return (
        t &&
            t.forEach(function (t) {
                for (var r = a(e, 0, t.offset).length, i = r + a(e, t.offset, t.length).length; r < i; )
                    (n[r] = n[r].add(t.style)), r++;
            }),
        n
    );
};
