var i = r(96403),
    a = r(821819),
    o = r(726433),
    s = Object,
    l = i(''.split);
e.exports = a(function () {
    return !s('z').propertyIsEnumerable(0);
})
    ? function (e) {
          return 'String' === o(e) ? l(e, '') : s(e);
      }
    : s;
