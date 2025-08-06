var r = n(733359),
    i = n(65183).OrderedSet,
    o = r.substr,
    a = i();
e.exports = function (e, t) {
    var n = Array(e.length).fill(a);
    return (
        t &&
            t.forEach(function (t) {
                for (var r = o(e, 0, t.offset).length, i = r + o(e, t.offset, t.length).length; r < i; ) ((n[r] = n[r].add(t.style)), r++);
            }),
        n
    );
};
