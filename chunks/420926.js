var r = n(96403),
    o = n(548828),
    a = n(982665),
    i = n(141603),
    s = n(780524),
    c = n(809235),
    l = Function,
    u = r([].concat),
    d = r([].join),
    p = {},
    h = function (e, t, n) {
        if (!i(p, t)) {
            for (var r = [], o = 0; o < t; o++) r[o] = 'a[' + o + ']';
            p[t] = l('C,a', 'return new C(' + d(r, ',') + ')');
        }
        return p[t](e, n);
    };
e.exports = c
    ? l.bind
    : function (e) {
          var t = o(this),
              n = t.prototype,
              r = s(arguments, 1),
              i = function () {
                  var n = u(r, s(arguments));
                  return this instanceof i ? h(t, n.length, n) : t.apply(e, n);
              };
          return a(n) && (i.prototype = n), i;
      };
