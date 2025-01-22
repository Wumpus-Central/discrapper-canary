var i = r(779518),
    a = r(474401),
    o = r(759248),
    s = r(320249),
    l = r(584428),
    u = r(85357),
    c = r(278757),
    d = 1,
    f = 2;
function p(e, n) {
    return s(e) && l(n)
        ? u(c(e), n)
        : function (r) {
              var s = a(r, e);
              return void 0 === s && s === n ? o(r, e) : i(n, s, d | f);
          };
}
e.exports = p;
