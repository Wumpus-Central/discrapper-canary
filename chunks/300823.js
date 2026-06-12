var i = n(776892),
    r = n(416412),
    s = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n) {
    var a = e[t];
    (s.call(e, t) && r(a, n) && (void 0 !== n || t in e)) || i(e, t, n);
};
