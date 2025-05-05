var t = {
    current: function (e) {
        return e;
    },
    inject: function (e) {
        t.current = e;
    }
};
e.exports = t;
