var i = n(821819),
    r = n(982665),
    a = n(726433),
    s = n(448894),
    o = Object.isExtensible,
    l = i(function () {
        o(1);
    });
e.exports =
    l || s
        ? function (e) {
              return !!r(e) && (!s || 'ArrayBuffer' !== a(e)) && (!o || o(e));
          }
        : o;
