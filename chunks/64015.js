var i = t(649852),
    e = t(980320);
r.exports = function (r, n, t) {
    var o = !0,
        u = !0;
    if ("function" != typeof r) throw TypeError("Expected a function");
    return (
        e(t) && ((o = "leading" in t ? !!t.leading : o), (u = "trailing" in t ? !!t.trailing : u)),
        i(r, n, { leading: o, maxWait: n, trailing: u })
    );
};
