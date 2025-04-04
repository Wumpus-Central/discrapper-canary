var r = n(507604),
    i = n(923646),
    o = n(796138),
    a = n(573078),
    s = n(199838).get,
    l = RegExp.prototype,
    c = TypeError;
r &&
    i &&
    a(l, 'dotAll', {
        configurable: !0,
        get: function () {
            if (this !== l) {
                if ('RegExp' === o(this)) return !!s(this).dotAll;
                throw new c('Incompatible receiver, RegExp required');
            }
        }
    });
