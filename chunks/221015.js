var r = n(517737),
    i = n(514575),
    a = n(630017),
    s = r(r.bind);
e.exports = function (e, t) {
    return (
        i(e),
        void 0 === t
            ? e
            : a
              ? s(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
