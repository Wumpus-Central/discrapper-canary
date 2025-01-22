var n = function (e) {
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
e.exports = function (e, r, i, a) {
    return ((r = r || '&'), (i = i || '='), null === e && (e = void 0), 'object' == typeof e)
        ? Object.keys(e)
              .map(function (a) {
                  var o = encodeURIComponent(n(a)) + i;
                  return Array.isArray(e[a])
                      ? e[a]
                            .map(function (e) {
                                return o + encodeURIComponent(n(e));
                            })
                            .join(r)
                      : o + encodeURIComponent(n(e[a]));
              })
              .filter(Boolean)
              .join(r)
        : a
          ? encodeURIComponent(n(a)) + i + encodeURIComponent(n(e))
          : '';
};
