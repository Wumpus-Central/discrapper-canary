var i = n(173850),
    r = n(526988),
    a = n(962557),
    s = i(i.bind);
e.exports = function (e, t) {
    return (
        r(e),
        void 0 === t
            ? e
            : a
              ? s(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
