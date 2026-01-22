var r = n(741623),
    i = n(798493),
    a = n(630307),
    s = n(14665),
    o = n(44650),
    l = n(899204),
    c = n(159367),
    u = n(421580),
    d = n(732937),
    f = n(94535),
    p = n(203894),
    _ = n(227106);
e.exports = function (e, t, n, h, m) {
    var g,
        E,
        b = p(e);
    if (void 0 !== e && !_(e)) throw new r("Assertion failed: O must be undefined or an Object");
    if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
    if ("boolean" != typeof n) throw new r("Assertion failed: extensible must be a Boolean");
    if (!s(h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
    if (void 0 !== m && !s(m)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
    if (void 0 === m)
        return (
            !!n &&
            ("Undefined" === b ||
                (l(h)
                    ? i(c, f, o, e, t, h)
                    : i(c, f, o, e, t, {
                          "[[Configurable]]": !!h["[[Configurable]]"],
                          "[[Enumerable]]": !!h["[[Enumerable]]"],
                          "[[Value]]": h["[[Value]]"],
                          "[[Writable]]": !!h["[[Writable]]"],
                      })))
        );
    if (
        !a(
            {
                IsAccessorDescriptor: l,
                IsDataDescriptor: c,
            },
            m,
        )
    )
        throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
    if (!m["[[Configurable]]"]) {
        if (
            ("[[Configurable]]" in h && h["[[Configurable]]"]) ||
            ("[[Enumerable]]" in h && !f(h["[[Enumerable]]"], m["[[Enumerable]]"])) ||
            (!u(h) && !f(l(h), l(m)))
        )
            return !1;
        if (l(m)) {
            if (
                ("[[Get]]" in h && !f(h["[[Get]]"], m["[[Get]]"])) ||
                ("[[Set]]" in h && !f(h["[[Set]]"], m["[[Set]]"]))
            )
                return !1;
        } else if (
            !m["[[Writable]]"] &&
            (("[[Writable]]" in h && h["[[Writable]]"]) || ("[[Value]]" in h && !f(h["[[Value]]"], m["[[Value]]"])))
        )
            return !1;
    }
    return (
        "Undefined" === b ||
        (c(m) && l(h)
            ? i(c, f, o, e, t, {
                  "[[Configurable]]": !!(g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"]),
                  "[[Enumerable]]": !!(E = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
                  "[[Get]]": ("[[Get]]" in h ? h : m)["[[Get]]"],
                  "[[Set]]": ("[[Set]]" in h ? h : m)["[[Set]]"],
              })
            : l(m) && c(h)
              ? i(c, f, o, e, t, {
                    "[[Configurable]]": !!(g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"]),
                    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
                    "[[Value]]": ("[[Value]]" in h ? h : m)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in h ? h : m)["[[Writable]]"],
                })
              : i(c, f, o, e, t, h))
    );
};
