var r = n(325008),
    i = n(936940),
    o = n(24033),
    a = n(803938),
    s = n(892725),
    l = Error.prototype.toString;
e.exports = i(function () {
    if (r) {
        var e = a(
            Object.defineProperty({}, 'name', {
                get: function () {
                    return this === e;
                }
            })
        );
        if ('true' !== l.call(e)) return !0;
    }
    return (
        '2: 1' !==
            l.call({
                message: 1,
                name: 2
            }) || 'Error' !== l.call({})
    );
})
    ? function () {
          var e = o(this),
              t = s(e.name, 'Error'),
              n = s(e.message);
          return t ? (n ? t + ': ' + n : t) : n;
      }
    : l;
