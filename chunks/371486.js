var r = n(390650),
    i = n(61488),
    a = n(464688),
    o = n(815329);
e.exports = r
    ? function (e, t) {
          if (r(e, t)) return e;
          throw new o('Reflect.setPrototypeOf: failed to set [[Prototype]]');
      }
    : i ||
      (a
          ? function (e, t) {
                return a(e, t), e;
            }
          : null);
