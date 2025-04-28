var n = String;
t.exports = function (t) {
    try {
        return n(t);
    } catch (t) {
        return 'Object';
    }
};
