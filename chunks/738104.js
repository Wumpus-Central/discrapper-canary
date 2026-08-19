"use strict";
n.d(t, { d: () => l });
var i = n(77468),
    r = n(723702),
    a = n(783419),
    s = n(652215);
async function l(e) {
    let {
            location: t,
            twoWayLinkType: n,
            successRedirect: l,
            handle: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        d = arguments.length > 2 ? arguments[2] : void 0,
        c = Math.round(screen.width / 2 - 350),
        u = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0,
        _ = null;
    (0, r.isDesktop)() ||
        (_ = window.open(
            `${window.location.protocol}//${window.location.host}${s.BVt.CONNECTIONS(e)}?loading=true`,
            "authorize",
            `scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=${u},left=${c},width=700,height=640`,
        ));
    let E = d;
    if (null == E && e !== a.zR)
        try {
            let { body: r } = await i.A.authorize(e, { location: t, twoWayLinkType: n, successRedirect: l, handle: o });
            E = r.url;
        } catch (e) {
            throw (_?.close(), e);
        }
    return null == E ? void _?.close() : (null != _ ? (_.location.href = E) : window.open(E), E);
}
