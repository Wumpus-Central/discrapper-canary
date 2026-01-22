var t = /([A-Z])/g;
e.exports = function (e) {
    return e.replace(t, "-$1").toLowerCase();
};
