t.exports = function (t) {
    try {
        return !!t();
    } catch (t) {
        return !0;
    }
};
