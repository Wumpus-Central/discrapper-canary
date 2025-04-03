e.exports = function (e) {
    try {
        return {
            error: !1,
            value: e()
        };
    } catch (e) {
        return {
            error: !0,
            value: e
        };
    }
};
