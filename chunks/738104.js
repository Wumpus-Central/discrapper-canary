"use strict";
n.d(t, { d: () => o });
var r = n(77468),
    i = n(723702),
    a = n(783419),
    s = n(652215);
async function o(e) {
    let {
            location: t,
            twoWayLinkType: n,
            successRedirect: o,
            handle: l,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = arguments.length > 2 ? arguments[2] : void 0,
        c = 700,
        d = 640,
        _ = Math.round(screen.width / 2 - c / 2),
        f = screen.height > d ? Math.round(screen.height / 2 - d / 2) : 0,
        p = null;
    (0, i.isDesktop)() ||
        (p = window.open(
            `${window.location.protocol}//${window.location.host}${s.BVt.CONNECTIONS(e)}?loading=true`,
            "authorize",
            `scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=${f},left=${_},width=${c},height=${d}`,
        ));
    let h = u;
    if (null == h && e !== a.zR)
        try {
            let { body: i } = await r.A.authorize(e, { location: t, twoWayLinkType: n, successRedirect: o, handle: l });
            h = i.url;
        } catch (e) {
            throw (p?.close(), e);
        }
    return null == h ? void p?.close() : (null != p ? (p.location.href = h) : window.open(h), h);
}
