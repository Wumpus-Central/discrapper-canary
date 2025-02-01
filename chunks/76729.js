var t = function (e) {
    switch (typeof e) {
        case 'string':
            return e;
        case 'boolean':
            return e ? 'true' : 'false';
        case 'number':
            return isFinite(e) ? e : '';
        default:
            return '';
    }
};
e.exports = function (e, n, i, r) {
    return ((n = n || '&'), (i = i || '='), null === e && (e = void 0), 'object' == typeof e)
        ? Object.keys(e)
              .map(function (r) {
                  var a = encodeURIComponent(t(r)) + i;
                  return Array.isArray(e[r])
                      ? e[r]
                            .map(function (e) {
                                return a + encodeURIComponent(t(e));
                            })
                            .join(n)
                      : a + encodeURIComponent(t(e[r]));
              })
              .filter(Boolean)
              .join(n)
        : r
          ? encodeURIComponent(t(r)) + i + encodeURIComponent(t(e))
          : '';
};
