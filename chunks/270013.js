var i = n(804104).forEach,
    r = n(54659)('forEach');
e.exports = r
    ? [].forEach
    : function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      };
