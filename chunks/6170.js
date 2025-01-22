var i = r(583738),
    a = r(508977),
    o = r(678529);
function s(e) {
    var n = (0, a.Z)(e);
    return 1 == n.length && n[0][2]
        ? (0, o.Z)(n[0][0], n[0][1])
        : function (r) {
              return r === e || (0, i.Z)(r, e, n);
          };
}
n.Z = s;
