"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(397927),
    l = n(183555),
    u = n(612630),
    c = n(518477),
    d = n(985018),
    _ = n(996414);
function f(e) {
    let { userId: t, isVisible: n, onOpenProfile: i } = e,
        { note: f } = (0, u.A)(t),
        h = null != f && "" !== f,
        p = h ? o.ueQ : o.i2Q,
        g = h ? d.intl.string(d.t["gs+qcM"]) : d.intl.string(d.t["1ZZtts"]),
        E = h ? f : d.intl.string(d.t["1ZZtts"]),
        { trackUserProfileAction: A } = (0, l.NJ)(),
        I = () => {
            A({ action: "PRESS_ADD_NOTE" }), i?.({ tabSection: c.RP.USER_INFO, scrollTarget: c.bk.NOTE });
        };
    return (0, r.jsx)(s.m_, {
        asContainer: !0,
        text: E,
        children: (0, r.jsx)(o.DUT, {
            "aria-label": g,
            onClick: I,
            className: a()(_.x, n && _.R),
            children: (0, r.jsx)(p, { size: "xs", color: "currentColor" }),
        }),
    });
}
