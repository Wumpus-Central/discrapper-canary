var i = n(96403),
    r = n(548828),
    a = n(982665),
    s = n(141603),
    o = n(780524),
    l = n(809235),
    u = Function,
    c = i([].concat),
    d = i([].join),
    f = {},
    _ = function (e, t, n) {
        if (!s(f, t)) {
            for (var i = [], r = 0; r < t; r++) i[r] = 'a[' + r + ']';
            f[t] = u('C,a', 'return new C(' + d(i, ',') + ')');
        }
        return f[t](e, n);
    };
e.exports = l
    ? u.bind
    : function (e) {
          var t = r(this),
              n = t.prototype,
              i = o(arguments, 1),
              s = function () {
                  var n = c(i, o(arguments));
                  return this instanceof s ? _(t, n.length, n) : t.apply(e, n);
              };
          return a(n) && (s.prototype = n), s;
      };
