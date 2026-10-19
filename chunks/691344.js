n.d(t, { K: () => d });
var i = n(730602),
    r = n(197184),
    a = n(153207),
    s = n(260498),
    l = n(754027),
    o = n(165610);
function d(e) {
    let { known: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = s.Ay.getProject(e),
        d = n?.preview_application_id;
    if (null == d || (0, o.x1)((0, l.Rc)(d))) return;
    if (!t) {
        let t = s.Ay.getIntegrationStatus(e) ?? a.A.getIntegrationStatus(e);
        if (t?.preview_ready !== !0 || !0 !== t.has_activity) return;
    }
    let c = (0, l.Op)((0, l.jS)(n));
    (0, i.M)(d, (0, r.A)(c), c.type);
}
