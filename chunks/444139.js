"use strict";
var n = r(741623),
    o = r(798493),
    i = r(630307),
    a = r(14665),
    s = r(44650),
    l = r(899204),
    u = r(159367),
    c = r(421580),
    f = r(732937),
    p = r(94535),
    d = r(203894),
    h = r(227106);
e.exports = function (e, t, r, m, v) {
    var y,
        g = d(e);
    if (void 0 !== e && !h(e)) throw new n("Assertion failed: O must be undefined or an Object");
    if (!f(t)) throw new n("Assertion failed: P must be a Property Key");
    if ("boolean" != typeof r) throw new n("Assertion failed: extensible must be a Boolean");
    if (!a(m)) throw new n("Assertion failed: Desc must be a Property Descriptor");
    if (void 0 !== v && !a(v)) throw new n("Assertion failed: current must be a Property Descriptor, or undefined");
    if (void 0 === v)
        return (
            !!r &&
            ("Undefined" === g ||
                (l(m)
                    ? o(u, p, s, e, t, m)
                    : o(u, p, s, e, t, {
                          "[[Configurable]]": !!m["[[Configurable]]"],
                          "[[Enumerable]]": !!m["[[Enumerable]]"],
                          "[[Value]]": m["[[Value]]"],
                          "[[Writable]]": !!m["[[Writable]]"],
                      })))
        );
    if (!i({ IsAccessorDescriptor: l, IsDataDescriptor: u }, v))
        throw new n("`current`, when present, must be a fully populated and valid Property Descriptor");
    if (!v["[[Configurable]]"]) {
        if (
            ("[[Configurable]]" in m && m["[[Configurable]]"]) ||
            ("[[Enumerable]]" in m && !p(m["[[Enumerable]]"], v["[[Enumerable]]"])) ||
            (!c(m) && !p(l(m), l(v)))
        )
            return !1;
        if (l(v)) {
            if (
                ("[[Get]]" in m && !p(m["[[Get]]"], v["[[Get]]"])) ||
                ("[[Set]]" in m && !p(m["[[Set]]"], v["[[Set]]"]))
            )
                return !1;
        } else if (
            !v["[[Writable]]"] &&
            (("[[Writable]]" in m && m["[[Writable]]"]) || ("[[Value]]" in m && !p(m["[[Value]]"], v["[[Value]]"])))
        )
            return !1;
    }
    return (
        "Undefined" === g ||
        (u(v) && l(m)
            ? o(u, p, s, e, t, {
                  "[[Configurable]]": !!(y = ("[[Configurable]]" in m ? m : v)["[[Configurable]]"]),
                  "[[Enumerable]]": !!("[[Enumerable]]" in m ? m : v)["[[Enumerable]]"],
                  "[[Get]]": ("[[Get]]" in m ? m : v)["[[Get]]"],
                  "[[Set]]": ("[[Set]]" in m ? m : v)["[[Set]]"],
              })
            : l(v) && u(m)
              ? o(u, p, s, e, t, {
                    "[[Configurable]]": !!(y = ("[[Configurable]]" in m ? m : v)["[[Configurable]]"]),
                    "[[Enumerable]]": !!("[[Enumerable]]" in m ? m : v)["[[Enumerable]]"],
                    "[[Value]]": ("[[Value]]" in m ? m : v)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in m ? m : v)["[[Writable]]"],
                })
              : o(u, p, s, e, t, m))
    );
};
