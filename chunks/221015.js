var n = e(517737),
    o = e(514575),
    i = e(630017),
    a = n(n.bind);
r.exports = function (r, t) {
    return (
        o(r),
        void 0 === t
            ? r
            : i
              ? a(r, t)
              : function () {
                    return r.apply(t, arguments);
                }
    );
};
