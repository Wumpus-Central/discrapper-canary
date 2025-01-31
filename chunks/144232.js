function i(e, t) {
    return (i = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return (e.__proto__ = t), e;
          })(e, t);
}
n.d(t, { Z: () => i });
