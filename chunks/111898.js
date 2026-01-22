var r = n(59221),
    i = n(31289),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n) {
    var s = e[t];
    (a.call(e, t) && i(s, n) && (void 0 !== n || t in e)) || r(e, t, n);
};
