var i = r(689118),
    a = r(807799),
    o = r(676972),
    s = r(957578).Buffer,
    l = Array(160);
function u() {
    this.init(), (this._w = l), o.call(this, 128, 112);
}
i(u, a),
    (u.prototype.init = function () {
        return (this._ah = 3418070365), (this._bh = 1654270250), (this._ch = 2438529370), (this._dh = 355462360), (this._eh = 1731405415), (this._fh = 2394180231), (this._gh = 3675008525), (this._hh = 1203062813), (this._al = 3238371032), (this._bl = 914150663), (this._cl = 812702999), (this._dl = 4144912697), (this._el = 4290775857), (this._fl = 1750603025), (this._gl = 1694076839), (this._hl = 3204075428), this;
    }),
    (u.prototype._hash = function () {
        var e = s.allocUnsafe(48);
        function n(n, r, i) {
            e.writeInt32BE(n, i), e.writeInt32BE(r, i + 4);
        }
        return n(this._ah, this._al, 0), n(this._bh, this._bl, 8), n(this._ch, this._cl, 16), n(this._dh, this._dl, 24), n(this._eh, this._el, 32), n(this._fh, this._fl, 40), e;
    }),
    (e.exports = u);
