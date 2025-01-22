var i = r(821819),
    a = r(982665),
    o = r(726433),
    s = r(448894),
    l = Object.isExtensible,
    u = i(function () {
        l(1);
    });
e.exports =
    u || s
        ? function (e) {
              return !!a(e) && (!s || 'ArrayBuffer' !== o(e)) && (!l || l(e));
          }
        : l;
