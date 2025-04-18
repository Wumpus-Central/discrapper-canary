var r = n(745872),
    i = r('%Object.preventExtensions%', !0),
    a = r('%Object.isExtensible%', !0),
    o = n(983281);
e.exports = i
    ? function (e) {
          return !o(e) && a(e);
      }
    : function (e) {
          return !o(e);
      };
