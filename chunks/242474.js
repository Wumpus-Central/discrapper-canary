var i = r(764900),
    a = r(170088),
    o = r(689118),
    s = r(957578).Buffer,
    l = {
        'des-ede3-cbc': a.CBC.instantiate(a.EDE),
        'des-ede3': a.EDE,
        'des-ede-cbc': a.CBC.instantiate(a.EDE),
        'des-ede': a.EDE,
        'des-cbc': a.CBC.instantiate(a.DES),
        'des-ecb': a.DES
    };
function u(e) {
    i.call(this);
    var n,
        r = e.mode.toLowerCase(),
        a = l[r];
    n = e.decrypt ? 'decrypt' : 'encrypt';
    var o = e.key;
    !s.isBuffer(o) && (o = s.from(o)), ('des-ede' === r || 'des-ede-cbc' === r) && (o = s.concat([o, o.slice(0, 8)]));
    var u = e.iv;
    !s.isBuffer(u) && (u = s.from(u)),
        (this._des = a.create({
            key: o,
            iv: u,
            type: n
        }));
}
(l.des = l['des-cbc']),
    (l.des3 = l['des-ede3-cbc']),
    (e.exports = u),
    o(u, i),
    (u.prototype._update = function (e) {
        return s.from(this._des.update(e));
    }),
    (u.prototype._final = function () {
        return s.from(this._des.final());
    });
