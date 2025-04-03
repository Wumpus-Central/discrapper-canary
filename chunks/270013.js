var e = n(804104).forEach;
t.exports = n(54659)('forEach')
    ? [].forEach
    : function (t) {
          return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
      };
