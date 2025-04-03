var e = n(43740),
    o = n(548828),
    i = n(809235),
    u = e(e.bind);
t.exports = function (t, r) {
    return (
        o(t),
        void 0 === r
            ? t
            : i
              ? u(t, r)
              : function () {
                    return t.apply(r, arguments);
                }
    );
};
