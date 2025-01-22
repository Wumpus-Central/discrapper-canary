r.d(n, {
    H: function () {
        return l;
    }
});
var i = r(457330),
    a = r(358085),
    o = r(856651),
    s = r(981631);
async function l(e) {
    let { location: n, twoWayLinkType: r, successRedirect: l, handle: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = arguments.length > 2 ? arguments[2] : void 0,
        d = 700,
        f = 640,
        p = Math.round(screen.width / 2 - d / 2),
        h = screen.height > f ? Math.round(screen.height / 2 - f / 2) : 0,
        _ = null;
    !(0, a.isDesktop)() && (_ = window.open(''.concat(window.location.protocol, '//').concat(window.location.host).concat(s.Z5c.CONNECTIONS(e), '?loading=true'), 'authorize', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top='.concat(h, ',left=').concat(p, ',width=').concat(d, ',height=').concat(f)));
    let m = c;
    if (null == m && e !== o.Kt)
        try {
            let { body: a } = await i.Z.authorize(e, {
                location: n,
                twoWayLinkType: r,
                successRedirect: l,
                handle: u
            });
            m = a.url;
        } catch (e) {
            throw (null == _ || _.close(), e);
        }
    if (null == m) {
        null == _ || _.close();
        return;
    }
    return null != _ ? (_.location.href = m) : window.open(m), m;
}
