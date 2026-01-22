e.exports = function (e) {
    var t = {},
        n = e.stopCallback;
    return (
        (e.stopCallback = function (e, r, i, a) {
            return !t[i] && !t[a] && n(e, r, i);
        }),
        (e.bindGlobal = function (e, n, r) {
            if ((this.bind(e, n, r), e instanceof Array)) {
                for (var i = 0; i < e.length; i++) t[e[i]] = !0;
                return;
            }
            t[e] = !0;
        }),
        e
    );
};
