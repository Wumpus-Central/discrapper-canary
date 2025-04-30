var r = {
    current: function (e) {
        return n.g.requestAnimationFrame(e);
    },
    inject: function (e) {
        r.current = e;
    }
};
e.exports = r;
