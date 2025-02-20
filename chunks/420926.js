var r = n(96403),
    i = n(548828),
    o = n(982665),
    a = n(141603),
    s = n(780524),
    l = n(809235),
    c = Function,
    u = r([].concat),
    d = r([].join),
    f = {},
    p = function (e, t, n) {
        if (!a(f, t)) {
            for (var r = [], i = 0; i < t; i++) r[i] = 'a[' + i + ']';
            f[t] = c('C,a', 'return new C(' + d(r, ',') + ')');
        }
        return f[t](e, n);
    };
e.exports = l
    ? c.bind
    : function (e) {
          var t = i(this),
              n = t.prototype,
              r = s(arguments, 1),
              a = function () {
                  var n = u(r, s(arguments));
                  return this instanceof a ? p(t, n.length, n) : t.apply(e, n);
              };
          return o(n) && (a.prototype = n), a;
      };
