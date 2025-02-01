var i = n(492476),
    r = n(381538),
    a = n(26018);
function s(e) {
    switch (e.arrayFormat) {
        case 'index':
            return function (t, n, i) {
                return null === n ? [l(t, e), '[', i, ']'].join('') : [l(t, e), '[', l(i, e), ']=', l(n, e)].join('');
            };
        case 'bracket':
            return function (t, n) {
                return null === n ? l(t, e) : [l(t, e), '[]=', l(n, e)].join('');
            };
        default:
            return function (t, n) {
                return null === n ? l(t, e) : [l(t, e), '=', l(n, e)].join('');
            };
    }
}
function o(e) {
    var t;
    switch (e.arrayFormat) {
        case 'index':
            return function (e, n, i) {
                if (((t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, '')), !t)) {
                    i[e] = n;
                    return;
                }
                void 0 === i[e] && (i[e] = {}), (i[e][t[1]] = n);
            };
        case 'bracket':
            return function (e, n, i) {
                if (((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, '')), t)) {
                    if (void 0 === i[e]) {
                        i[e] = [n];
                        return;
                    }
                } else {
                    i[e] = n;
                    return;
                }
                i[e] = [].concat(i[e], n);
            };
        default:
            return function (e, t, n) {
                if (void 0 === n[e]) {
                    n[e] = t;
                    return;
                }
                n[e] = [].concat(n[e], t);
            };
    }
}
function l(e, t) {
    return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
}
function u(e) {
    return Array.isArray(e)
        ? e.sort()
        : 'object' == typeof e
          ? u(Object.keys(e))
                .sort(function (e, t) {
                    return Number(e) - Number(t);
                })
                .map(function (t) {
                    return e[t];
                })
          : e;
}
(t.extract = function (e) {
    return e.split('?')[1] || '';
}),
    (t.parse = function (e, t) {
        var n = o((t = r({ arrayFormat: 'none' }, t))),
            i = Object.create(null);
        return 'string' == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ''))
            ? (e.split('&').forEach(function (e) {
                  var t = e.replace(/\+/g, ' ').split('='),
                      r = t.shift(),
                      s = t.length > 0 ? t.join('=') : void 0;
                  (s = void 0 === s ? null : a(s)), n(a(r), s, i);
              }),
              Object.keys(i)
                  .sort()
                  .reduce(function (e, t) {
                      var n = i[t];
                      return n && 'object' == typeof n && !Array.isArray(n) ? (e[t] = u(n)) : (e[t] = n), e;
                  }, Object.create(null)))
            : i;
    }),
    (t.stringify = function (e, t) {
        var n = s(
            (t = r(
                {
                    encode: !0,
                    strict: !0,
                    arrayFormat: 'none'
                },
                t
            ))
        );
        return e
            ? Object.keys(e)
                  .sort()
                  .map(function (i) {
                      var r = e[i];
                      if (void 0 === r) return '';
                      if (null === r) return l(i, t);
                      if (Array.isArray(r)) {
                          var a = [];
                          return (
                              r.slice().forEach(function (e) {
                                  void 0 !== e && a.push(n(i, e, a.length));
                              }),
                              a.join('&')
                          );
                      }
                      return l(i, t) + '=' + l(r, t);
                  })
                  .filter(function (e) {
                      return e.length > 0;
                  })
                  .join('&')
            : '';
    });
