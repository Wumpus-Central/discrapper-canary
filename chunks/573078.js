var e = r(494465),
    o = r(117895);
t.exports = function (t, n, r) {
    return r.get && e(r.get, n, { getter: !0 }), r.set && e(r.set, n, { setter: !0 }), o.f(t, n, r);
};
