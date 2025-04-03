r.d(t, { Z: () => o });
var n = r(790215);
let o = function (e, t) {
    var r = this.__data__,
        o = (0, n.Z)(r, e);
    return o < 0 ? (++this.size, r.push([e, t])) : (r[o][1] = t), this;
};
