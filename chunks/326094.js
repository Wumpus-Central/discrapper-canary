t.d(n, { Z: () => s });
var o = t(442837),
    r = t(594174),
    i = t(184242),
    l = t(349902);
function s(e) {
    let { user: n, location: t } = e,
        s = (0, o.e7)([r.default], () => r.default.getCurrentUser()),
        c = (0, l.Z)(n);
    return !(0, i.Ac)({ location: t }) || ((null == s ? void 0 : s.id) !== n.id && !c);
}
