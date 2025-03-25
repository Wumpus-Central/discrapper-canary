e.exports = function (e) {
    function t() {}
    var n = {
        log: t,
        warn: t,
        error: t
    };
    if (!e && window.console) {
        var r = function (e, t) {
            e[t] = function () {
                var e = console[t];
                if (e.apply) e.apply(console, arguments);
                else for (var n = 0; n < arguments.length; n++) e(arguments[n]);
            };
        };
        r(n, 'log'), r(n, 'warn'), r(n, 'error');
    }
    return n;
};
