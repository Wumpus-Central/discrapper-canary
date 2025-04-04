var e = n(661155),
    o = n(691593),
    i = n(45051),
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
