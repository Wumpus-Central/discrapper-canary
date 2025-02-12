var r = a(354848),
    n = String,
    _ = TypeError;
t.exports = function (t) {
    if ('object' == typeof t || r(t)) return t;
    throw _("Can't set " + n(t) + ' as a prototype');
};
