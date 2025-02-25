t.d(n, { Z: () => s });
var r = t(442837),
    o = t(594174),
    i = t(184242),
    l = t(349902);
function s(e) {
    let { user: n, location: t } = e,
        s = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        c = (0, l.Z)(n);
    return !(0, i.Ac)({ location: t }) || ((null == s ? void 0 : s.id) !== n.id && !c);
}
