var r = n(391673);
e.exports = function (e) {
    try {
        if (r) return Function('return require("' + e + '")')();
    } catch (e) {}
};
