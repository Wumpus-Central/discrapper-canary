var i = n(346391);
function r(e, t) {
    var n = i(this, e),
        r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
e.exports = r;
