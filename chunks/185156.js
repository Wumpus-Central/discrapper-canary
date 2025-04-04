var e = n(684022),
    o = TypeError;
t.exports = function (t) {
    if ('object' == typeof t && 'size' in t && 'has' in t && 'add' in t && 'delete' in t && 'keys' in t) return t;
    throw new o(e(t) + ' is not a set');
};
