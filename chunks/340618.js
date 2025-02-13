var r = a(354848),
    n = String,
    o = TypeError;
t.exports = function (t) {
    if ('object' == typeof t || r(t)) return t;
    throw o("Can't set " + n(t) + ' as a prototype');
};
