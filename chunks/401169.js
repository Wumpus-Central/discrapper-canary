e.exports = {
    stringify: function (e) {
        return "_" + String(e);
    },
    unstringify: function (e) {
        return e.slice(1);
    },
};
