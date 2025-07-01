var r = n(815869);
e.exports = function (e, t) {
    var n = this.__data__,
        i = r(n, e);
    return (i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this);
};
