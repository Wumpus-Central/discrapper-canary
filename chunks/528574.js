var n = r(655310),
    i = r(594230),
    o = r(868089),
    a = r(741623);
e.exports = n
    ? function (e, t) {
          if (n(e, t)) return e;
          throw new a("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      }
    : i ||
      (o
          ? function (e, t) {
                return o(e, t), e;
            }
          : null);
