var i = r(595022),
    a = r(483266),
    o = r(334389),
    s = 200;
function l(e, n) {
    var r = this.__data__;
    if (r instanceof i.Z) {
        var l = r.__data__;
        if (!a.Z || l.length < s - 1) return l.push([e, n]), (this.size = ++r.size), this;
        r = this.__data__ = new o.Z(l);
    }
    return r.set(e, n), (this.size = r.size), this;
}
n.Z = l;
