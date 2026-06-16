"use strict";
var i = n(741623),
    r = n(798493),
    s = n(630307),
    a = n(14665),
    o = n(44650),
    l = n(899204),
    u = n(159367),
    c = n(421580),
    d = n(732937),
    _ = n(94535),
    h = n(203894),
    f = n(227106);
e.exports = function (e, t, n, p, E) {
    var m,
        g = h(e);
    if (void 0 !== e && !f(e)) throw new i("Assertion failed: O must be undefined or an Object");
    if (!d(t)) throw new i("Assertion failed: P must be a Property Key");
    if ("boolean" != typeof n) throw new i("Assertion failed: extensible must be a Boolean");
    if (!a(p)) throw new i("Assertion failed: Desc must be a Property Descriptor");
    if (void 0 !== E && !a(E)) throw new i("Assertion failed: current must be a Property Descriptor, or undefined");
    if (void 0 === E)
        return (
            !!n &&
            ("Undefined" === g ||
                (l(p)
                    ? r(u, _, o, e, t, p)
                    : r(u, _, o, e, t, {
                          "[[Configurable]]": !!p["[[Configurable]]"],
                          "[[Enumerable]]": !!p["[[Enumerable]]"],
                          "[[Value]]": p["[[Value]]"],
                          "[[Writable]]": !!p["[[Writable]]"],
                      })))
        );
    if (!s({ IsAccessorDescriptor: l, IsDataDescriptor: u }, E))
        throw new i("`current`, when present, must be a fully populated and valid Property Descriptor");
    if (!E["[[Configurable]]"]) {
        if (
            ("[[Configurable]]" in p && p["[[Configurable]]"]) ||
            ("[[Enumerable]]" in p && !_(p["[[Enumerable]]"], E["[[Enumerable]]"])) ||
            (!c(p) && !_(l(p), l(E)))
        )
            return !1;
        if (l(E)) {
            if (
                ("[[Get]]" in p && !_(p["[[Get]]"], E["[[Get]]"])) ||
                ("[[Set]]" in p && !_(p["[[Set]]"], E["[[Set]]"]))
            )
                return !1;
        } else if (
            !E["[[Writable]]"] &&
            (("[[Writable]]" in p && p["[[Writable]]"]) || ("[[Value]]" in p && !_(p["[[Value]]"], E["[[Value]]"])))
        )
            return !1;
    }
    return (
        "Undefined" === g ||
        (u(E) && l(p)
            ? r(u, _, o, e, t, {
                  "[[Configurable]]": !!(m = ("[[Configurable]]" in p ? p : E)["[[Configurable]]"]),
                  "[[Enumerable]]": !!("[[Enumerable]]" in p ? p : E)["[[Enumerable]]"],
                  "[[Get]]": ("[[Get]]" in p ? p : E)["[[Get]]"],
                  "[[Set]]": ("[[Set]]" in p ? p : E)["[[Set]]"],
              })
            : l(E) && u(p)
              ? r(u, _, o, e, t, {
                    "[[Configurable]]": !!(m = ("[[Configurable]]" in p ? p : E)["[[Configurable]]"]),
                    "[[Enumerable]]": !!("[[Enumerable]]" in p ? p : E)["[[Enumerable]]"],
                    "[[Value]]": ("[[Value]]" in p ? p : E)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in p ? p : E)["[[Writable]]"],
                })
              : r(u, _, o, e, t, p))
    );
};
