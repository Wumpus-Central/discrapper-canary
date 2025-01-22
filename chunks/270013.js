var i = r(804104).forEach,
    a = r(54659)('forEach');
e.exports = a
    ? [].forEach
    : function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      };
