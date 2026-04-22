var r = n(514119),
    i = n(646344);
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
    );
};
