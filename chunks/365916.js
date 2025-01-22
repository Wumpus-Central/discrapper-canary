var i = r(690244),
    a = i('%Object.preventExtensions%', !0),
    o = i('%Object.isExtensible%', !0),
    s = r(814277);
e.exports = a
    ? function (e) {
          return !s(e) && o(e);
      }
    : function (e) {
          return !s(e);
      };
