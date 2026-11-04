var i = n(976860),
    r = n(89310),
    a = n(260498),
    s = n(313537),
    l = n(735769),
    o = n(751841);
function d(e, t) {
    let n,
        r = void 0 === e ? (null == (n = l.A.getProjectId()) || null != (0, s.fL)(a.Ay.getProject(n)) ? null : n) : e,
        d = null == r ? (0, o.hU)(null) : (0, s.z$)(r);
    null == t ? (0, i.pX)(d) : (0, i.pX)(d, { state: { conjureEntryPoint: t } });
}
n.d(
    t,
    {},
    {
        A: d,
        o: function () {
            ((0, r.f)(), d(null));
        },
    },
);
