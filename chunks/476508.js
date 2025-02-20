var r = n(43740),
    i = n(548828),
    o = n(809235),
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
