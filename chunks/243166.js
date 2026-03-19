"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    l = n(183555),
    u = n(612630),
    c = n(518477),
    d = n(985018),
    _ = n(996414);
function f(e) {
    let { userId: t, isVisible: n, onOpenProfile: i } = e,
        { note: f } = (0, u.A)(t),
        p = null != f && "" !== f,
        h = p ? o.ueQ : o.i2Q,
        m = p ? d.intl.string(d.t["gs+qcM"]) : d.intl.string(d.t["1ZZtts"]),
        E = p ? f : d.intl.string(d.t["1ZZtts"]),
        { trackUserProfileAction: g } = (0, l.NJ)(),
        A = () => {
            g({ action: "PRESS_ADD_NOTE" }), i?.({ tabSection: c.RP.USER_INFO, scrollTarget: c.bk.NOTE });
        };
    return (0, r.jsx)(a.m_, {
        asContainer: !0,
        text: E,
        children: (0, r.jsx)(o.DUT, {
            "aria-label": m,
            onClick: A,
            className: s()(_.x, n && _.R),
            children: (0, r.jsx)(h, { size: "xs", color: "currentColor" }),
        }),
    });
}
