var r = n(138676),
    i = n(764459),
    a = n(819401);
e.exports = r
    ? function (e) {
          return r(e);
      }
    : i
      ? function (e) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw TypeError('getProto: not an object');
            return i(e);
        }
      : a
        ? function (e) {
              return a(e);
          }
        : null;
