var i = n(43740),
    r = n(548828),
    a = n(809235),
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
