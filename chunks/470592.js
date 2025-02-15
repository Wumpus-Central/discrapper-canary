var r = a(581031),
    n = a(936940),
    _ = a(332916),
    o = Object,
    i = r(''.split);
t.exports = n(function () {
    return !o('z').propertyIsEnumerable(0);
})
    ? function (t) {
          return 'String' === _(t) ? i(t, '') : o(t);
      }
    : o;
