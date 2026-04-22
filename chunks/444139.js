"use strict";
var r = n(741623),
    i = n(798493),
    s = n(630307),
    a = n(14665),
    o = n(44650),
    l = n(899204),
    u = n(159367),
    d = n(421580),
    c = n(732937),
    _ = n(94535),
    f = n(203894),
    E = n(227106);
e.exports = function (e, t, n, h, p) {
    var m,
        g = f(e);
    if (void 0 !== e && !E(e)) throw new r("Assertion failed: O must be undefined or an Object");
    if (!c(t)) throw new r("Assertion failed: P must be a Property Key");
    if ("boolean" != typeof n) throw new r("Assertion failed: extensible must be a Boolean");
    if (!a(h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
    if (void 0 !== p && !a(p)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
    if (void 0 === p)
        return (
            !!n &&
            ("Undefined" === g ||
                (l(h)
                    ? i(u, _, o, e, t, h)
                    : i(u, _, o, e, t, {
                          "[[Configurable]]": !!h["[[Configurable]]"],
                          "[[Enumerable]]": !!h["[[Enumerable]]"],
                          "[[Value]]": h["[[Value]]"],
                          "[[Writable]]": !!h["[[Writable]]"],
                      })))
        );
    if (!s({ IsAccessorDescriptor: l, IsDataDescriptor: u }, p))
        throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
    if (!p["[[Configurable]]"]) {
        if (
            ("[[Configurable]]" in h && h["[[Configurable]]"]) ||
            ("[[Enumerable]]" in h && !_(h["[[Enumerable]]"], p["[[Enumerable]]"])) ||
            (!d(h) && !_(l(h), l(p)))
        )
            return !1;
        if (l(p)) {
            if (
                ("[[Get]]" in h && !_(h["[[Get]]"], p["[[Get]]"])) ||
                ("[[Set]]" in h && !_(h["[[Set]]"], p["[[Set]]"]))
            )
                return !1;
        } else if (
            !p["[[Writable]]"] &&
            (("[[Writable]]" in h && h["[[Writable]]"]) || ("[[Value]]" in h && !_(h["[[Value]]"], p["[[Value]]"])))
        )
            return !1;
    }
    return (
        "Undefined" === g ||
        (u(p) && l(h)
            ? i(u, _, o, e, t, {
                  "[[Configurable]]": !!(m = ("[[Configurable]]" in h ? h : p)["[[Configurable]]"]),
                  "[[Enumerable]]": !!("[[Enumerable]]" in h ? h : p)["[[Enumerable]]"],
                  "[[Get]]": ("[[Get]]" in h ? h : p)["[[Get]]"],
                  "[[Set]]": ("[[Set]]" in h ? h : p)["[[Set]]"],
              })
            : l(p) && u(h)
              ? i(u, _, o, e, t, {
                    "[[Configurable]]": !!(m = ("[[Configurable]]" in h ? h : p)["[[Configurable]]"]),
                    "[[Enumerable]]": !!("[[Enumerable]]" in h ? h : p)["[[Enumerable]]"],
                    "[[Value]]": ("[[Value]]" in h ? h : p)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in h ? h : p)["[[Writable]]"],
                })
              : i(u, _, o, e, t, h))
    );
};
