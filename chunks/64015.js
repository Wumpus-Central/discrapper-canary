var r = n(649852),
    i = n(980320);
e.exports = function (e, t, n) {
    var s = !0,
        o = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        i(n) && ((s = "leading" in n ? !!n.leading : s), (o = "trailing" in n ? !!n.trailing : o)),
        r(e, t, { leading: s, maxWait: t, trailing: o })
    );
};
