var r = n(764900),
    i = n(170088),
    o = n(689118),
    a = n(957578).Buffer,
    s = {
        'des-ede3-cbc': i.CBC.instantiate(i.EDE),
        'des-ede3': i.EDE,
        'des-ede-cbc': i.CBC.instantiate(i.EDE),
        'des-ede': i.EDE,
        'des-cbc': i.CBC.instantiate(i.DES),
        'des-ecb': i.DES
    };
function l(e) {
    r.call(this);
    var t,
        n = e.mode.toLowerCase(),
        i = s[n];
    t = e.decrypt ? 'decrypt' : 'encrypt';
    var o = e.key;
    a.isBuffer(o) || (o = a.from(o)), ('des-ede' === n || 'des-ede-cbc' === n) && (o = a.concat([o, o.slice(0, 8)]));
    var l = e.iv;
    a.isBuffer(l) || (l = a.from(l)),
        (this._des = i.create({
            key: o,
            iv: l,
            type: t
        }));
}
(s.des = s['des-cbc']),
    (s.des3 = s['des-ede3-cbc']),
    (e.exports = l),
    o(l, r),
    (l.prototype._update = function (e) {
        return a.from(this._des.update(e));
    }),
    (l.prototype._final = function () {
        return a.from(this._des.final());
    });
