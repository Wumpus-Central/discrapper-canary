var r = n(689118),
    i = n(807799),
    o = n(676972),
    a = n(957578).Buffer,
    s = Array(160);
function l() {
    this.init(), (this._w = s), o.call(this, 128, 112);
}
r(l, i),
    (l.prototype.init = function () {
        return (this._ah = 3418070365), (this._bh = 1654270250), (this._ch = 2438529370), (this._dh = 355462360), (this._eh = 1731405415), (this._fh = 2394180231), (this._gh = 3675008525), (this._hh = 1203062813), (this._al = 3238371032), (this._bl = 914150663), (this._cl = 812702999), (this._dl = 4144912697), (this._el = 4290775857), (this._fl = 1750603025), (this._gl = 1694076839), (this._hl = 3204075428), this;
    }),
    (l.prototype._hash = function () {
        var e = a.allocUnsafe(48);
        function t(t, n, r) {
            e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4);
        }
        return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
    }),
    (e.exports = l);
