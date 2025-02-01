var i = n(764900),
    r = n(170088),
    a = n(689118),
    s = n(957578).Buffer,
    o = {
        'des-ede3-cbc': r.CBC.instantiate(r.EDE),
        'des-ede3': r.EDE,
        'des-ede-cbc': r.CBC.instantiate(r.EDE),
        'des-ede': r.EDE,
        'des-cbc': r.CBC.instantiate(r.DES),
        'des-ecb': r.DES
    };
function l(e) {
    i.call(this);
    var t,
        n = e.mode.toLowerCase(),
        r = o[n];
    t = e.decrypt ? 'decrypt' : 'encrypt';
    var a = e.key;
    s.isBuffer(a) || (a = s.from(a)), ('des-ede' === n || 'des-ede-cbc' === n) && (a = s.concat([a, a.slice(0, 8)]));
    var l = e.iv;
    s.isBuffer(l) || (l = s.from(l)),
        (this._des = r.create({
            key: a,
            iv: l,
            type: t
        }));
}
(o.des = o['des-cbc']),
    (o.des3 = o['des-ede3-cbc']),
    (e.exports = l),
    a(l, i),
    (l.prototype._update = function (e) {
        return s.from(this._des.update(e));
    }),
    (l.prototype._final = function () {
        return s.from(this._des.final());
    });
