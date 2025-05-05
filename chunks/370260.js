t.exports = {
    stringify: function (t) {
        return '_' + String(t);
    },
    unstringify: function (t) {
        return t.slice(1);
    }
};
