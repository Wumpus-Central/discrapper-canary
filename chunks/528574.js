var r = n(655310),
    i = n(594230),
    a = n(868089),
    s = n(741623);
e.exports = r
    ? function (e, t) {
          if (r(e, t)) return e;
          throw new s("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      }
    : i ||
      (a
          ? function (e, t) {
                return a(e, t), e;
            }
          : null);
