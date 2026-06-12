var i = n(514119),
    r = n(646344);
e.exports = function (e) {
    if (!r(e)) return !1;
    var t = i(e);
    return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
    );
};
