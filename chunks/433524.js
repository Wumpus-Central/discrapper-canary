var n = r(507604),
    i = r(923646),
    o = r(796138),
    a = r(573078),
    c = r(199838).get,
    u = RegExp.prototype,
    s = TypeError;
n &&
    i &&
    a(u, 'dotAll', {
        configurable: !0,
        get: function () {
            if (this !== u) {
                if ('RegExp' === o(this)) return !!c(this).dotAll;
                throw new s('Incompatible receiver, RegExp required');
            }
        }
    });
