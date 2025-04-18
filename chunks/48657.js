var r = n(35760),
    i = n(896471),
    a = n(621049),
    o = r(r.bind);
e.exports = function (e, t) {
    return (
        i(e),
        void 0 === t
            ? e
            : a
              ? o(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
