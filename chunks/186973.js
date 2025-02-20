var r = n(96403),
    i = n(821819),
    o = n(726433),
    a = Object,
    s = r(''.split);
e.exports = i(function () {
    return !a('z').propertyIsEnumerable(0);
})
    ? function (e) {
          return 'String' === o(e) ? s(e, '') : a(e);
      }
    : a;
