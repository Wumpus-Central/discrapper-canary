var r = n(492476),
    i = n(381538),
    o = n(26018);
function a(e) {
    switch (e.arrayFormat) {
        case 'index':
            return function (t, n, r) {
                return null === n ? [l(t, e), '[', r, ']'].join('') : [l(t, e), '[', l(r, e), ']=', l(n, e)].join('');
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
function s(e) {
    var t;
    switch (e.arrayFormat) {
        case 'index':
            return function (e, n, r) {
                if (((t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, '')), !t)) {
                    r[e] = n;
                    return;
                }
                void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n);
            };
        case 'bracket':
            return function (e, n, r) {
                if (((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, '')), t)) {
                    if (void 0 === r[e]) {
                        r[e] = [n];
                        return;
                    }
                } else {
                    r[e] = n;
                    return;
                }
                r[e] = [].concat(r[e], n);
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
    return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
}
function c(e) {
    return Array.isArray(e)
        ? e.sort()
        : 'object' == typeof e
          ? c(Object.keys(e))
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
        var n = s((t = i({ arrayFormat: 'none' }, t))),
            r = Object.create(null);
        return 'string' == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ''))
            ? (e.split('&').forEach(function (e) {
                  var t = e.replace(/\+/g, ' ').split('='),
                      i = t.shift(),
                      a = t.length > 0 ? t.join('=') : void 0;
                  (a = void 0 === a ? null : o(a)), n(o(i), a, r);
              }),
              Object.keys(r)
                  .sort()
                  .reduce(function (e, t) {
                      var n = r[t];
                      return n && 'object' == typeof n && !Array.isArray(n) ? (e[t] = c(n)) : (e[t] = n), e;
                  }, Object.create(null)))
            : r;
    }),
    (t.stringify = function (e, t) {
        var n = a(
            (t = i(
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
                  .map(function (r) {
                      var i = e[r];
                      if (void 0 === i) return '';
                      if (null === i) return l(r, t);
                      if (Array.isArray(i)) {
                          var o = [];
                          return (
                              i.slice().forEach(function (e) {
                                  void 0 !== e && o.push(n(r, e, o.length));
                              }),
                              o.join('&')
                          );
                      }
                      return l(r, t) + '=' + l(i, t);
                  })
                  .filter(function (e) {
                      return e.length > 0;
                  })
                  .join('&')
            : '';
    });
