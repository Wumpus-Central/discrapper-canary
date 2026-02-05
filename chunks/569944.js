n.d(t, { c: () => r });
var i = n(260509),
    l = n(488926),
    s = n(652215);
function r(e, t) {
    return (
        !!((0, i.bM)(e, t) || l.$3({ permission: s.xBc.ADMINISTRATOR, context: e, user: t })) ||
        (l.$3({ permission: s.xBc.MANAGE_GUILD, context: e, user: t }) &&
            l.$3({ permission: s.xBc.MANAGE_ROLES, context: e, user: t }))
    );
}
