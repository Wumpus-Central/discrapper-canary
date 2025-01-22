var i = r(43740),
    a = r(548828),
    o = r(809235),
    s = i(i.bind);
e.exports = function (e, n) {
    return (
        a(e),
        void 0 === n
            ? e
            : o
              ? s(e, n)
              : function () {
                    return e.apply(n, arguments);
                }
    );
};
