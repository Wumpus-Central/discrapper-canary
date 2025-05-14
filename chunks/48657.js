var e = r(35760),
    o = r(896471),
    i = r(621049),
    u = e(e.bind);
t.exports = function (t, n) {
    return (
        o(t),
        void 0 === n
            ? t
            : i
              ? u(t, n)
              : function () {
                    return t.apply(n, arguments);
                }
    );
};
