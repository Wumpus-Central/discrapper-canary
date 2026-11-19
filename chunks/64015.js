var n = r(649852),
    i = r(980320);
e.exports = function (e, t, r) {
    var s = !0,
        o = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        i(r) && ((s = "leading" in r ? !!r.leading : s), (o = "trailing" in r ? !!r.trailing : o)),
        n(e, t, { leading: s, maxWait: t, trailing: o })
    );
};
