var r = n(507604),
    i = n(621523),
    a = n(179122),
    o = n(759319),
    s = Error.prototype.toString;
e.exports = i(function () {
    if (r) {
        var e = Object.create(
            Object.defineProperty({}, 'name', {
                get: function () {
                    return this === e;
                }
            })
        );
        if ('true' !== s.call(e)) return !0;
    }
    return (
        '2: 1' !==
            s.call({
                message: 1,
                name: 2
            }) || 'Error' !== s.call({})
    );
})
    ? function () {
          var e = a(this),
              t = o(e.name, 'Error'),
              n = o(e.message);
          return t ? (n ? t + ': ' + n : t) : n;
      }
    : s;
