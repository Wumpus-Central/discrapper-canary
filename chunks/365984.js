r.d(t, { Z: () => i });
var n = r(595022),
    o = r(483266),
    a = r(334389);
let i = function (e, t) {
    var r = this.__data__;
    if (r instanceof n.Z) {
        var i = r.__data__;
        if (!o.Z || i.length < 199) return i.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new a.Z(i);
    }
    return r.set(e, t), (this.size = r.size), this;
};
