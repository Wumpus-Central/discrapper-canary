n.d(t, { H: () => s });
var r = n(457330),
    i = n(358085),
    o = n(856651),
    a = n(981631);
async function s(e) {
    let { location: t, twoWayLinkType: n, successRedirect: s, handle: l } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = arguments.length > 2 ? arguments[2] : void 0,
        u = 700,
        d = 640,
        f = Math.round(screen.width / 2 - u / 2),
        _ = screen.height > d ? Math.round(screen.height / 2 - d / 2) : 0,
        p = null;
    (0, i.isDesktop)() || (p = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(a.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(_, ',left=').concat(f, ',width=').concat(u, ',height=').concat(d)));
    let h = c;
    if (null == h && e !== o.Kt)
        try {
            let { body: i } = await r.Z.authorize(e, {
                location: t,
                twoWayLinkType: n,
                successRedirect: s,
                handle: l
            });
            h = i.url;
        } catch (e) {
            throw (null == p || p.close(), e);
        }
    if (null == h) {
        null == p || p.close();
        return;
    }
    return null != p ? (p.location.href = h) : window.open(h), h;
}
