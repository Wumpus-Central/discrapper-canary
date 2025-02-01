var i = n(690244),
    r = i('%String%'),
    a = i('%TypeError%');
e.exports = function (e) {
    if ('symbol' == typeof e) throw new a('Cannot convert a Symbol value to a string');
    return r(e);
};
