var r = n(860511),
    i = n(13570);
e.exports = function (e) {
    if (i) {
        try {
            return r.process.getBuiltinModule(e);
        } catch (e) {}
        try {
            return Function('return require("' + e + '")')();
        } catch (e) {}
    }
};
