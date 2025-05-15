var r = n(390650),
    i = n(61488),
    o = n(464688),
    a = n(815329);
e.exports = r
    ? function (e, t) {
          if (r(e, t)) return e;
          throw new a('Reflect.setPrototypeOf: failed to set [[Prototype]]');
      }
    : i ||
      (o
          ? function (e, t) {
                return o(e, t), e;
            }
          : null);
