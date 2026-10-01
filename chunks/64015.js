var i = n(649852),
    r = n(980320);
e.exports = function (e, t, n) {
    var o = !0,
        s = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        r(n) && ((o = "leading" in n ? !!n.leading : o), (s = "trailing" in n ? !!n.trailing : s)),
        i(e, t, { leading: o, maxWait: t, trailing: s })
    );
};
