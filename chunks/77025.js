var r = a(46015),
    n = a(527160),
    _ = r({}.hasOwnProperty);
t.exports =
    Object.hasOwn ||
    function (t, e) {
        return _(n(t), e);
    };
