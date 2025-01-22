var i = r(690244),
    a = r(706165),
    o = i('%TypeError%');
e.exports = function (e, n) {
    if ('Object' !== e.Type(n)) return !1;
    var r = {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Get]]': !0,
        '[[Set]]': !0,
        '[[Value]]': !0,
        '[[Writable]]': !0
    };
    for (var i in n) if (a(n, i) && !r[i]) return !1;
    if (e.IsDataDescriptor(n) && e.IsAccessorDescriptor(n)) throw new o('Property Descriptors may not be both accessor and data descriptors');
    return !0;
};
