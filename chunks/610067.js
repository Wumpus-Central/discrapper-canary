var a = {}.propertyIsEnumerable,
    r = Object.getOwnPropertyDescriptor;
e.f =
    r && !a.call({ 1: 2 }, 1)
        ? function (t) {
              var e = r(this, t);
              return !!e && e.enumerable;
          }
        : a;
