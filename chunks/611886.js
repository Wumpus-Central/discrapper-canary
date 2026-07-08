t.d(n, { i: () => i });
var a = t(321733),
    r = t(64700);
function i(e) {
    var n = {};
    return (
        Object.keys(e).forEach(function (t) {
            var i = e[t];
            if (t.endsWith("Ref")) n[t] = e[t];
            else {
                var s = function () {
                    var e,
                        n,
                        t,
                        s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!(0, r.isValidElement)(s)) return i(s, o), s;
                    if ("string" != typeof s.type) {
                        var l = s.type.displayName || s.type.name || "the component";
                        throw Error(
                            "Only native element nodes can now be passed to React DnD connectors." +
                                "You can either wrap ".concat(l, " into a <div>, or turn it into a ") +
                                "drag source or a drop target itself.",
                        );
                    }
                    return (
                        (e = s),
                        (n = o
                            ? function (e) {
                                  return i(e, o);
                              }
                            : i),
                        (t = e.ref),
                        ((0, a.V)(
                            "string" != typeof t,
                            "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                        ),
                        t)
                            ? (0, r.cloneElement)(e, {
                                  ref: function (e) {
                                      u(t, e), u(n, e);
                                  },
                              })
                            : (0, r.cloneElement)(e, { ref: n })
                    );
                };
                n[t] = function () {
                    return s;
                };
            }
        }),
        n
    );
}
function u(e, n) {
    "function" == typeof e ? e(n) : (e.current = n);
}
