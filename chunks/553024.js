n.d(t, { p: () => a });
var r = n(573654),
    i = n(473749);
function a(e) {
    var t = {};
    return (
        Object.keys(e).forEach(function (n) {
            var a = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
                var o = function () {
                    var e,
                        t,
                        n,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!(0, i.isValidElement)(o)) return a(o, c), o;
                    if ("string" != typeof o.type) {
                        var s = o.type.displayName || o.type.name || "the component";
                        throw Error(
                            "Only native element nodes can now be passed to React DnD connectors." +
                                "You can either wrap ".concat(s, " into a <div>, or turn it into a ") +
                                "drag source or a drop target itself.",
                        );
                    }
                    return (
                        (e = o),
                        (t = c
                            ? function (e) {
                                  return a(e, c);
                              }
                            : a),
                        (n = e.ref),
                        ((0, r.k)(
                            "string" != typeof n,
                            "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                        ),
                        n)
                            ? (0, i.cloneElement)(e, {
                                  ref: function (e) {
                                      l(n, e), l(t, e);
                                  },
                              })
                            : (0, i.cloneElement)(e, { ref: t })
                    );
                };
                t[n] = function () {
                    return o;
                };
            }
        }),
        t
    );
}
function l(e, t) {
    "function" == typeof e ? e(t) : (e.current = t);
}
