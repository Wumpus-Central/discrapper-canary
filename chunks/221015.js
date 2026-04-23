var n = e(517737),
    o = e(514575),
    a = e(630017),
    i = n(n.bind);
r.exports = function (r, t) {
    return (
        o(r),
        void 0 === t
            ? r
            : a
              ? i(r, t)
              : function () {
                    return r.apply(t, arguments);
                }
    );
};
