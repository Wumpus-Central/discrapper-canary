e.exports = function (e) {
    var t = {},
        n = e.stopCallback;
    return (
        (e.stopCallback = function (e, i, r, a) {
            return !t[r] && !t[a] && n(e, i, r);
        }),
        (e.bindGlobal = function (e, n, i) {
            if ((this.bind(e, n, i), e instanceof Array)) {
                for (var r = 0; r < e.length; r++) t[e[r]] = !0;
                return;
            }
            t[e] = !0;
        }),
        e
    );
};
