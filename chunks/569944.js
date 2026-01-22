n.d(t, { c: () => s });
var l = n(260509),
    r = n(488926),
    i = n(652215);
function s(e, t) {
    return (
        !!(
            (0, l.bM)(e, t) ||
            r.$3({
                permission: i.xBc.ADMINISTRATOR,
                context: e,
                user: t,
            })
        ) ||
        (r.$3({
            permission: i.xBc.MANAGE_GUILD,
            context: e,
            user: t,
        }) &&
            r.$3({
                permission: i.xBc.MANAGE_ROLES,
                context: e,
                user: t,
            }))
    );
}
