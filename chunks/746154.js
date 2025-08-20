e.exports = function (e) {
    var t = {};
    return function (n) {
        return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n];
    };
};
