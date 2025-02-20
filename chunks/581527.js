var r = n(690244),
    i = r('%String%'),
    o = r('%TypeError%');
e.exports = function (e) {
    if ('symbol' == typeof e) throw new o('Cannot convert a Symbol value to a string');
    return i(e);
};
