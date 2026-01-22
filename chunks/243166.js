n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(397927),
    l = n(183555),
    c = n(612630),
    u = n(518477),
    d = n(985018),
    f = n(90460);
function p(e) {
    let { userId: t, isVisible: n, onOpenProfile: i } = e,
        { note: p } = (0, c.A)(t),
        _ = null != p && "" !== p,
        h = _ ? o.ueQ : o.i2Q,
        m = _ ? d.intl.string(d.t["gs+qcM"]) : d.intl.string(d.t["1ZZtts"]),
        g = _ ? p : d.intl.string(d.t["1ZZtts"]),
        { trackUserProfileAction: E } = (0, l.NJ)(),
        b = () => {
            E({ action: "PRESS_ADD_NOTE" }),
                null == i ||
                    i({
                        tabSection: u.RP.USER_INFO,
                        scrollTarget: u.bk.NOTE,
                    });
        };
    return (0, r.jsx)(s.m_, {
        asContainer: !0,
        text: g,
        children: (0, r.jsx)(o.DUT, {
            "aria-label": m,
            onClick: b,
            className: a()(f.x, n && f.R),
            children: (0, r.jsx)(h, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}
