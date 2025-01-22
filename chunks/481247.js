let i = r(689118),
    a = r(692656);
function o(e) {
    a.call(this, e), (this.enc = 'pem');
}
i(o, a),
    (e.exports = o),
    (o.prototype.encode = function (e, n) {
        let r = a.prototype.encode.call(this, e).toString('base64'),
            i = ['-----BEGIN ' + n.label + '-----'];
        for (let e = 0; e < r.length; e += 64) i.push(r.slice(e, e + 64));
        return i.push('-----END ' + n.label + '-----'), i.join('\n');
    });
