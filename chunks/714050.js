var r = a(974971),
    n = String;
t.exports = function (t) {
    if ('Symbol' === r(t)) throw TypeError('Cannot convert a Symbol value to a string');
    return n(t);
};
