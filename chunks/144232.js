function i(e, n) {
    return (i = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, n) {
              return (e.__proto__ = n), e;
          })(e, n);
}
r.d(n, {
    Z: function () {
        return i;
    }
});
