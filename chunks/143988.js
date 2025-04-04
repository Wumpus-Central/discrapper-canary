var r = n(138676),
    i = n(764459),
    o = n(819401);
e.exports = r
    ? function (e) {
          return r(e);
      }
    : i
      ? function (e) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw TypeError('getProto: not an object');
            return i(e);
        }
      : o
        ? function (e) {
              return o(e);
          }
        : null;
