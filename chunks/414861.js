e.exports = function (e) {
    var n = {},
        r = e.stopCallback;
    return (
        (e.stopCallback = function (e, i, a, o) {
            return !n[a] && !n[o] && r(e, i, a);
        }),
        (e.bindGlobal = function (e, r, i) {
            if ((this.bind(e, r, i), e instanceof Array)) {
                for (var a = 0; a < e.length; a++) n[e[a]] = !0;
                return;
            }
            n[e] = !0;
        }),
        e
    );
};
