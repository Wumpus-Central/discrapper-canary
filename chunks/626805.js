var i = n(689118),
    r = n(807799),
    a = n(676972),
    s = n(957578).Buffer,
    o = Array(160);
function l() {
    this.init(), (this._w = o), a.call(this, 128, 112);
}
i(l, r),
    (l.prototype.init = function () {
        return (this._ah = 3418070365), (this._bh = 1654270250), (this._ch = 2438529370), (this._dh = 355462360), (this._eh = 1731405415), (this._fh = 2394180231), (this._gh = 3675008525), (this._hh = 1203062813), (this._al = 3238371032), (this._bl = 914150663), (this._cl = 812702999), (this._dl = 4144912697), (this._el = 4290775857), (this._fl = 1750603025), (this._gl = 1694076839), (this._hl = 3204075428), this;
    }),
    (l.prototype._hash = function () {
        var e = s.allocUnsafe(48);
        function t(t, n, i) {
            e.writeInt32BE(t, i), e.writeInt32BE(n, i + 4);
        }
        return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
    }),
    (e.exports = l);
