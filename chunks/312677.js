var i = n(147018),
    r = n(161581),
    a = n(4340),
    s = n(325008),
    o = TypeError,
    l = Object.defineProperty,
    u = r.self !== r;
try {
    if (s) {
        var c = Object.getOwnPropertyDescriptor(r, 'self');
        (!u && c && c.get && c.enumerable) ||
            a(r, 'self', {
                get: function () {
                    return r;
                },
                set: function (e) {
                    if (this !== r) throw o('Illegal invocation');
                    l(r, 'self', {
                        value: e,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
                },
                configurable: !0,
                enumerable: !0
            });
    } else
        i(
            {
                global: !0,
                simple: !0,
                forced: u
            },
            { self: r }
        );
} catch (e) {}
