var a = {}.propertyIsEnumerable,
    r = Object.getOwnPropertyDescriptor,
    n = r && !a.call({ 1: 2 }, 1);
e.f = n
    ? function (t) {
          var e = r(this, t);
          return !!e && e.enumerable;
      }
    : a;
