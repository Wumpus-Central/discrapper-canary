var a = t(860511),
    n = t(13570);
e.exports = function (e) {
    if (n) {
        try {
            return a.process.getBuiltinModule(e);
        } catch (e) {}
        try {
            return Function('return require("' + e + '")')();
        } catch (e) {}
    }
};
