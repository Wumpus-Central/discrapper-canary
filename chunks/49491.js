var s = t(855986),
    i = t(501592),
    l = t(287809);
function a(e, n) {
    return null != e && !1 === n && (0, i.K)(e.contentClassification);
}
t.d(
    n,
    {},
    {
        A: function (e) {
            return a(
                e,
                (0, s.bG)([l.default], () => l.default.getCurrentUser()?.nsfwAllowed),
            );
        },
        b: a,
    },
);
