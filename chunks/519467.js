var r = n(684022),
    o = TypeError;
e.exports = function (e) {
    if ('object' == typeof e && 'size' in e && 'has' in e && 'get' in e && 'set' in e && 'delete' in e && 'entries' in e) return e;
    throw new o(r(e) + ' is not a map');
};
