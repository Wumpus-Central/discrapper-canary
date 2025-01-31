n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(481060),
    r = n(125268),
    s = n(673125),
    o = n(984063),
    c = n(871499),
    d = n(304388),
    u = n(388032);
function h() {
    let e = (0, l.e7)([s.Z], () => s.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === o.W.LINE,
        n = () => {
            t ? (0, r.Bo)(null) : (0, r.Bo)({ type: o.W.LINE });
        };
    return (0, i.jsx)(d.Z, {
        renderPopout: () => null,
        children: (e) => {
            let { ...l } = e;
            return (0, i.jsx)(c.Z, {
                ...l,
                label: u.intl.string(u.t.ZQCf9f),
                isActive: t,
                iconComponent: a.vdY,
                onClick: n
            });
        }
    });
}
