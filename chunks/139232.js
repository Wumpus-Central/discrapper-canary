n.d(t, { pi: () => r });
var r = function () {
    return (r =
        Object.assign ||
        function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
};
