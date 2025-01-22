var i = r(96403),
    a = r(548828),
    o = r(982665),
    s = r(141603),
    l = r(780524),
    u = r(809235),
    c = Function,
    d = i([].concat),
    f = i([].join),
    p = {},
    h = function (e, n, r) {
        if (!s(p, n)) {
            for (var i = [], a = 0; a < n; a++) i[a] = 'a[' + a + ']';
            p[n] = c('C,a', 'return new C(' + f(i, ',') + ')');
        }
        return p[n](e, r);
    };
e.exports = u
    ? c.bind
    : function (e) {
          var n = a(this),
              r = n.prototype,
              i = l(arguments, 1),
              s = function () {
                  var r = d(i, l(arguments));
                  return this instanceof s ? h(n, r.length, r) : n.apply(e, r);
              };
          return o(r) && (s.prototype = r), s;
      };
