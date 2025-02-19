var n = r(325008),
    i = r(973326),
    o = r(332916),
    a = r(4340),
    c = r(644659).get,
    u = RegExp.prototype,
    s = TypeError;
n &&
    i &&
    a(u, 'dotAll', {
        configurable: !0,
        get: function () {
            if (this !== u) {
                if ('RegExp' === o(this)) return !!c(this).dotAll;
                throw s('Incompatible receiver, RegExp required');
            }
        }
    });
