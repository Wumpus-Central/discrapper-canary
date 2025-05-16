e.exports = function (e) {
    try {
        return !!e();
    } catch (e) {
        return !0;
    }
};
