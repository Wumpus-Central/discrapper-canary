n.d(t, { Z: () => r });
function r(e) {
    return (r = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
