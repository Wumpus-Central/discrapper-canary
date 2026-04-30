r.exports = function (r) {
    try {
        return !!r();
    } catch (r) {
        return !0;
    }
};
