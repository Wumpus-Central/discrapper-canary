var r = a(581031),
    n = a(936940),
    o = a(332916),
    _ = Object,
    i = r(''.split);
t.exports = n(function () {
    return !_('z').propertyIsEnumerable(0);
})
    ? function (t) {
          return 'String' === o(t) ? i(t, '') : _(t);
      }
    : _;
