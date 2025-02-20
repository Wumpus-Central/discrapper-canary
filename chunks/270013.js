var r = n(804104).forEach,
    i = n(54659)('forEach');
e.exports = i
    ? [].forEach
    : function (e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
      };
