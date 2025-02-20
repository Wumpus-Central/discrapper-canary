var r = n(858698),
    i = TypeError;
e.exports = function (e) {
    if ('object' == typeof e && 'size' in e && 'has' in e && 'get' in e && 'set' in e && 'delete' in e && 'entries' in e) return e;
    throw new i(r(e) + ' is not a map');
};
