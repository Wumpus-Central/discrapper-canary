t.r(n), t.d(n, { default: () => b });
var a = t(54381),
    o = t(442837),
    r = t(728345),
    c = t(591472),
    i = t(455473),
    l = t(238246),
    d = t(952561),
    u = t(701011),
    s = t(388032);
function b(e) {
    var n, t;
    let { windowKey: b } = e,
        f = (0, d.Z)(),
        p = (0, o.e7)([c.Z], () => c.Z.getConnectedFrame()),
        { data: m } = (0, r.IX)(null == p ? void 0 : p.applicationId),
        h =
            null != (t = null != (n = null == f ? void 0 : f.name) ? n : null == m ? void 0 : m.name)
                ? t
                : s.intl.string(s.t.IC5Ann);
    return (0, a.jsx)(l.Z, {
        withTitleBar: !0,
        windowKey: b,
        title: h,
        children: null != f ? (0, a.jsx)(u.Z, {}) : (0, a.jsx)(i.Z, {}),
    });
}
