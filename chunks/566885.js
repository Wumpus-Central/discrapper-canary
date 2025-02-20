var r = n(173850),
    i = n(526988),
    o = n(962557),
    a = r(r.bind);
e.exports = function (e, t) {
    return (
        i(e),
        void 0 === t
            ? e
            : o
              ? a(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
