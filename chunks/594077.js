var r = n(745872),
    i = n(166691),
    o = n(48511),
    a = n(579040),
    s = n(815329),
    l = r('%WeakMap%', !0),
    c = i('WeakMap.prototype.get', !0),
    u = i('WeakMap.prototype.set', !0),
    d = i('WeakMap.prototype.has', !0),
    f = i('WeakMap.prototype.delete', !0);
e.exports = l
    ? function () {
          var e,
              t,
              n = {
                  assert: function (e) {
                      if (!n.has(e)) throw new s('Side channel does not contain ' + o(e));
                  },
                  delete: function (n) {
                      if (l && n && ('object' == typeof n || 'function' == typeof n)) {
                          if (e) return f(e, n);
                      } else if (a && t) return t.delete(n);
                      return !1;
                  },
                  get: function (n) {
                      return l && n && ('object' == typeof n || 'function' == typeof n) && e ? c(e, n) : t && t.get(n);
                  },
                  has: function (n) {
                      return l && n && ('object' == typeof n || 'function' == typeof n) && e ? d(e, n) : !!t && t.has(n);
                  },
                  set: function (n, r) {
                      l && n && ('object' == typeof n || 'function' == typeof n) ? (e || (e = new l()), u(e, n, r)) : a && (t || (t = a()), t.set(n, r));
                  }
              };
          return n;
      }
    : a;
