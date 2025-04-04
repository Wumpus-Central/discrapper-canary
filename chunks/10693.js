var r = n(127849),
    i = n(426625);
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
