var n = r(733359),
    i = r(65183).OrderedSet,
    o = n.substr,
    a = i();
t.exports = function (t, e) {
    var r = Array(t.length).fill(a);
    return (
        e &&
            e.forEach(function (e) {
                for (var n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length; n < i; ) (r[n] = r[n].add(e.style)), n++;
            }),
        r
    );
};
