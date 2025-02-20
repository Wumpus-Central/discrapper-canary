var r = n(690244),
    i = n(706165),
    o = r('%TypeError%');
e.exports = function (e, t) {
    if ('Object' !== e.Type(t)) return !1;
    var n = {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Get]]': !0,
        '[[Set]]': !0,
        '[[Value]]': !0,
        '[[Writable]]': !0
    };
    for (var r in t) if (i(t, r) && !n[r]) return !1;
    if (e.IsDataDescriptor(t) && e.IsAccessorDescriptor(t)) throw new o('Property Descriptors may not be both accessor and data descriptors');
    return !0;
};
