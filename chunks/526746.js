t.d(n, { Z: () => c }), t(953529);
var l = t(951288);
t(647438);
var i = t(442837),
    a = t(481060),
    o = t(535139),
    r = t(812206),
    s = t(826380),
    u = t(388032);
function c(e) {
    var n;
    let { connection: t } = e,
        c = (0, i.e7)([r.Z], () => (null != t.application_id ? r.Z.getApplication(t.application_id) : null), [
            t.application_id,
        ]),
        d = null != (n = null == c ? void 0 : c.name) ? n : u.intl.string(u.t.cgPbaZ),
        { hasAlreadyLinked: m, canStartAuthorization: h, startAuthorization: x, fetched: f } = (0, o.F)(c),
        g = (0, l.jsx)(a.xPt, {
            size: "custom",
            width: 40,
            height: 40,
            color: "currentColor",
        });
    return (0, l.jsx)(s.Z, {
        displayName: d,
        description: t.description,
        icon: g,
        isLoading: !f,
        isConnected: m,
        canConnect: h,
        onConnect: x,
    });
}
