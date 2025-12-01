n.d(t, { H: () => s });
var r = n(457330),
    i = n(358085),
    a = n(856651),
    o = n(981631);
async function s(e) {
    let {
            location: t,
            twoWayLinkType: n,
            successRedirect: s,
            handle: l,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = arguments.length > 2 ? arguments[2] : void 0,
        u = 700,
        d = 640,
        f = Math.round(screen.width / 2 - u / 2),
        p = screen.height > d ? Math.round(screen.height / 2 - d / 2) : 0,
        _ = null;
    (0, i.isDesktop)() ||
        (_ = window.open(
            ""
                .concat(window.location.protocol, "//")
                .concat(window.location.host)
                .concat(o.Z5c.CONNECTIONS(e), "?loading=true"),
            "authorize",
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top="
                .concat(p, ",left=")
                .concat(f, ",width=")
                .concat(u, ",height=")
                .concat(d),
        ));
    let m = c;
    if (null == m && e !== a.Kt)
        try {
            let { body: i } = await r.Z.authorize(e, {
                location: t,
                twoWayLinkType: n,
                successRedirect: s,
                handle: l,
            });
            m = i.url;
        } catch (e) {
            throw (null == _ || _.close(), e);
        }
    if (null == m) {
        null == _ || _.close();
        return;
    }
    return null != _ ? (_.location.href = m) : window.open(m), m;
}
