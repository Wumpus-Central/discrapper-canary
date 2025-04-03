var e = n(821819),
    o = n(982665),
    i = n(726433),
    u = n(448894),
    s = Object.isExtensible;
t.exports =
    e(function () {
        s(1);
    }) || u
        ? function (t) {
              return !!o(t) && (!u || 'ArrayBuffer' !== i(t)) && (!s || s(t));
          }
        : s;
