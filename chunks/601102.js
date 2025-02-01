var i = {
    current: function (e) {
        return n.g.requestAnimationFrame(e);
    },
    inject: function (e) {
        i.current = e;
    }
};
e.exports = i;
