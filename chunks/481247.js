let i = n(689118),
    r = n(692656);
function a(e) {
    r.call(this, e), (this.enc = 'pem');
}
i(a, r),
    (e.exports = a),
    (a.prototype.encode = function (e, t) {
        let n = r.prototype.encode.call(this, e).toString('base64'),
            i = ['-----BEGIN ' + t.label + '-----'];
        for (let e = 0; e < n.length; e += 64) i.push(n.slice(e, e + 64));
        return i.push('-----END ' + t.label + '-----'), i.join('\n');
    });
