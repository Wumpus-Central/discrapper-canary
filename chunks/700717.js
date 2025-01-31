function a(e) {
    return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
r.d(t, { Z: () => a });
