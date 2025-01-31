n.d(t, { H: () => o });
var i = n(457330),
    r = n(358085),
    a = n(856651),
    s = n(981631);
async function o(e) {
    let { location: t, twoWayLinkType: n, successRedirect: o, handle: l } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = arguments.length > 2 ? arguments[2] : void 0,
        c = 700,
        d = 640,
        f = Math.round(screen.width / 2 - c / 2),
        _ = screen.height > d ? Math.round(screen.height / 2 - d / 2) : 0,
        p = null;
    (0, r.isDesktop)() || (p = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(s.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(_, ',left=').concat(f, ',width=').concat(c, ',height=').concat(d)));
    let h = u;
    if (null == h && e !== a.Kt)
        try {
            let { body: r } = await i.Z.authorize(e, {
                location: t,
                twoWayLinkType: n,
                successRedirect: o,
                handle: l
            });
            h = r.url;
        } catch (e) {
            throw (null == p || p.close(), e);
        }
    if (null == h) {
        null == p || p.close();
        return;
    }
    return null != p ? (p.location.href = h) : window.open(h), h;
}
