var r = n(257943),
    i = n(503628),
    a = n(101968),
    s = n(862784),
    o = Error.prototype.toString;
e.exports = i(function () {
    if (r) {
        var e = Object.create(
            Object.defineProperty({}, "name", {
                get: function () {
                    return this === e;
                },
            }),
        );
        if ("true" !== o.call(e)) return !0;
    }
    return (
        "2: 1" !==
            o.call({
                message: 1,
                name: 2,
            }) || "Error" !== o.call({})
    );
})
    ? function () {
          var e = a(this),
              t = s(e.name, "Error"),
              n = s(e.message);
          return t ? (n ? t + ": " + n : t) : n;
      }
    : o;
