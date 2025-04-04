var e = n(872715),
    o = String;
t.exports = function (t) {
    if ('Symbol' === e(t)) throw TypeError('Cannot convert a Symbol value to a string');
    return o(t);
};
