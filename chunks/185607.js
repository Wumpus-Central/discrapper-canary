var r = n(1140),
    i = n(116740).OrderedSet,
    a = r.substr,
    s = i();
e.exports = function (e, t) {
    var n = Array(e.length).fill(s);
    return (
        t &&
            t.forEach(function (t) {
                for (var r = a(e, 0, t.offset).length, i = r + a(e, t.offset, t.length).length; r < i; )
                    (n[r] = n[r].add(t.style)), r++;
            }),
        n
    );
};
