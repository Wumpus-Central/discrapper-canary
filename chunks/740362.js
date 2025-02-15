var r = a(581031),
    n = a(339718),
    _ = r({}.hasOwnProperty);
t.exports =
    Object.hasOwn ||
    function (t, e) {
        return _(n(t), e);
    };
