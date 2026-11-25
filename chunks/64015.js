var a = t(649852),
    n = t(980320);
e.exports = function (e, r, t) {
    var o = !0,
        c = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        n(t) && ((o = "leading" in t ? !!t.leading : o), (c = "trailing" in t ? !!t.trailing : c)),
        a(e, r, { leading: o, maxWait: r, trailing: c })
    );
};
