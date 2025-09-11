function r(e, t) {
    return (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return (e.__proto__ = t), e;
          })(e, t);
}
n.d(t, { Z: () => r });
