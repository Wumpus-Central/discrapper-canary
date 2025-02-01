n.d(t, { Z: () => o });
var i = n(595022),
    r = n(483266),
    a = n(334389),
    s = 200;
let o = function (e, t) {
    var n = this.__data__;
    if (n instanceof i.Z) {
        var o = n.__data__;
        if (!r.Z || o.length < s - 1) return o.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new a.Z(o);
    }
    return n.set(e, t), (this.size = n.size), this;
};
