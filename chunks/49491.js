var l = t(855986),
    s = t(501592),
    a = t(287809);
function i(e, n) {
    return null != e && !1 === n && (0, s.K)(e.contentClassification);
}
t.d(
    n,
    {},
    {
        A: function (e) {
            return i(
                e,
                (0, l.bG)([a.default], () => a.default.getCurrentUser()?.nsfwAllowed),
            );
        },
        b: i,
    },
);
