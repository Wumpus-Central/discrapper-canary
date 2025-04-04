var r = n(815329),
    i = n(706165),
    o = {
        __proto__: null,
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Get]]': !0,
        '[[Set]]': !0,
        '[[Value]]': !0,
        '[[Writable]]': !0
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    for (var t in e) if (i(e, t) && !o[t]) return !1;
    var n = i(e, '[[Value]]') || i(e, '[[Writable]]'),
        a = i(e, '[[Get]]') || i(e, '[[Set]]');
    if (n && a) throw new r('Property Descriptors may not be both accessor and data descriptors');
    return !0;
};
