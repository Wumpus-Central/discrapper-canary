var r = n(35760),
    i = n(896471),
    o = n(621049),
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
