var e = n(764908),
    o = n(779688),
    i = n(6837),
    u = Object,
    s = e(''.split);
t.exports = o(function () {
    return !u('z').propertyIsEnumerable(0);
})
    ? function (t) {
          return 'String' === i(t) ? s(t, '') : u(t);
      }
    : u;
