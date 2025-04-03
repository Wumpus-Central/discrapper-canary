e.exports = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= +!!t), t;
};
