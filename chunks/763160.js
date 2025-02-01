e.exports = function (e) {
    function t() {}
    var n = {
        log: t,
        warn: t,
        error: t
    };
    if (!e && window.console) {
        var i = function (e, t) {
            e[t] = function () {
                var e = console[t];
                if (e.apply) e.apply(console, arguments);
                else for (var n = 0; n < arguments.length; n++) e(arguments[n]);
            };
        };
        i(n, 'log'), i(n, 'warn'), i(n, 'error');
    }
    return n;
};
