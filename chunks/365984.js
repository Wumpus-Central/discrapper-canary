n.d(t, { Z: () => s });
var r = n(595022),
    i = n(483266),
    o = n(334389),
    a = 200;
let s = function (e, t) {
    var n = this.__data__;
    if (n instanceof r.Z) {
        var s = n.__data__;
        if (!i.Z || s.length < a - 1) return s.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new o.Z(s);
    }
    return n.set(e, t), (this.size = n.size), this;
};
