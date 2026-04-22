"use strict";
n.d(t, { d: () => o });
var r = n(77468),
    i = n(723702),
    s = n(783419),
    a = n(652215);
async function o(e) {
    let {
            location: t,
            twoWayLinkType: n,
            successRedirect: o,
            handle: l,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = arguments.length > 2 ? arguments[2] : void 0,
        d = Math.round(screen.width / 2 - 350),
        c = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0,
        _ = null;
    (0, i.isDesktop)() ||
        (_ = window.open(
            `${window.location.protocol}//${window.location.host}${a.BVt.CONNECTIONS(e)}?loading=true`,
            "authorize",
            `scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=${c},left=${d},width=700,height=640`,
        ));
    let f = u;
    if (null == f && e !== s.zR)
        try {
            let { body: i } = await r.A.authorize(e, { location: t, twoWayLinkType: n, successRedirect: o, handle: l });
            f = i.url;
        } catch (e) {
            throw (_?.close(), e);
        }
    return null == f ? void _?.close() : (null != _ ? (_.location.href = f) : window.open(f), f);
}
