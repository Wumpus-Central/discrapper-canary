var i = n(690244),
    r = i('%Object.preventExtensions%', !0),
    a = i('%Object.isExtensible%', !0),
    s = n(814277);
e.exports = r
    ? function (e) {
          return !s(e) && a(e);
      }
    : function (e) {
          return !s(e);
      };
