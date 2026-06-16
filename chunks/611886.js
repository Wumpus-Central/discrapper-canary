"use strict";
n.d(t, { i: () => s });
var i = n(321733),
    r = n(64700);
function s(e) {
    var t = {};
    return (
        Object.keys(e).forEach(function (n) {
            var s = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
                var o = function () {
                    var e,
                        t,
                        n,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!(0, r.isValidElement)(o)) return s(o, l), o;
                    if ("string" != typeof o.type) {
                        var u = o.type.displayName || o.type.name || "the component";
                        throw Error(
                            "Only native element nodes can now be passed to React DnD connectors." +
                                "You can either wrap ".concat(u, " into a <div>, or turn it into a ") +
                                "drag source or a drop target itself.",
                        );
                    }
                    return (
                        (e = o),
                        (t = l
                            ? function (e) {
                                  return s(e, l);
                              }
                            : s),
                        (n = e.ref),
                        ((0, i.V)(
                            "string" != typeof n,
                            "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                        ),
                        n)
                            ? (0, r.cloneElement)(e, {
                                  ref: function (e) {
                                      a(n, e), a(t, e);
                                  },
                              })
                            : (0, r.cloneElement)(e, { ref: t })
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
function a(e, t) {
    "function" == typeof e ? e(t) : (e.current = t);
}
