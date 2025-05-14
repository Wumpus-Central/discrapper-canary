var r = n(745872),
    i = r('%Object.preventExtensions%', !0),
    o = r('%Object.isExtensible%', !0),
    a = n(983281);
e.exports = i
    ? function (e) {
          return !a(e) && o(e);
      }
    : function (e) {
          return !a(e);
      };
