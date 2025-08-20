var t = "-";
e.exports = {
    encode: function (e, n, r) {
        return e + t + n + t + r;
    },
    decode: function (e) {
        var n = e.split(t).reverse(),
            r = n[0],
            i = n[1];
        return {
            blockKey: n.slice(2).reverse().join(t),
            decoratorKey: parseInt(i, 10),
            leafKey: parseInt(r, 10),
        };
    },
};
