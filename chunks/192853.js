var i = n(690244),
    r = n(160171),
    a = r(i('String.prototype.indexOf'));
e.exports = function (e, t) {
    var n = i(e, !!t);
    return 'function' == typeof n && a(e, '.prototype.') > -1 ? r(n) : n;
};
