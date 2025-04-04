var e = n(958288).forEach;
t.exports = n(271537)('forEach')
    ? [].forEach
    : function (t) {
          return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
      };
