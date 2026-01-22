var e = {}.propertyIsEnumerable,
    n = Object.getOwnPropertyDescriptor;
r.f =
    n && !e.call({ 1: 2 }, 1)
        ? function (t) {
              var r = n(this, t);
              return !!r && r.enumerable;
          }
        : e;
