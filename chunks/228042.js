var i = r(858698),
    a = TypeError;
e.exports = function (e) {
    if ('object' == typeof e && 'size' in e && 'has' in e && 'get' in e && 'set' in e && 'delete' in e && 'entries' in e) return e;
    throw new a(i(e) + ' is not a map');
};
