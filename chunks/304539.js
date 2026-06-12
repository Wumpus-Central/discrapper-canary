var i = n(250581);
e.exports = function (e, t) {
    var n = this.__data__,
        r = i(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
};
