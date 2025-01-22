var i = r(690244),
    a = r(160171),
    o = a(i('String.prototype.indexOf'));
e.exports = function (e, n) {
    var r = i(e, !!n);
    return 'function' == typeof r && o(e, '.prototype.') > -1 ? a(r) : r;
};
