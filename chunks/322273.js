var t = /-(.)/g;
e.exports = function (e) {
    return e.replace(t, function (e, t) {
        return t.toUpperCase();
    });
};
