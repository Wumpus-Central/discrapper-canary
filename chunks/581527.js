var i = r(690244),
    a = i('%String%'),
    o = i('%TypeError%');
e.exports = function (e) {
    if ('symbol' == typeof e) throw new o('Cannot convert a Symbol value to a string');
    return a(e);
};
