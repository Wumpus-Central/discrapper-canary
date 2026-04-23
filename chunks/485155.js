var n = e(313400),
    o = e(4940);
r.exports = function (r, t, e) {
    return e.get && n(e.get, t, { getter: !0 }), e.set && n(e.set, t, { setter: !0 }), o.f(r, t, e);
};
