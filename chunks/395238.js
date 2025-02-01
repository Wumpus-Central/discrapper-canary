var i = n(690244),
    r = n(706165),
    a = i('%TypeError%');
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
    for (var i in t) if (r(t, i) && !n[i]) return !1;
    if (e.IsDataDescriptor(t) && e.IsAccessorDescriptor(t)) throw new a('Property Descriptors may not be both accessor and data descriptors');
    return !0;
};
