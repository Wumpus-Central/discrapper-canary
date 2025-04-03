var e = /-(.)/g;
t.exports = function (t) {
    return t.replace(e, function (t, e) {
        return e.toUpperCase();
    });
};
