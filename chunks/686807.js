n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(201895),
    o = n(471445),
    u = n(823379),
    a = n(303737),
    s = n(293810),
    c = n(388032),
    d = n(24132);
function f(e) {
    let { channelId: t } = e,
        n = (0, a.m7)(t);
    if (null == n) return "[".concat(c.intl.string(c.t.bz1PZW), "]");
    let u = n.isMediaChannel() ? i.XBm : (0, o.Th)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.nn4, { children: (0, l.ZP)({ channel: n }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [
                    null != u &&
                        (0, r.jsx)(u, {
                            className: d.icon,
                            "aria-hidden": !0,
                        }),
                    n.name,
                ],
            }),
        ],
    });
}
function m(e) {
    switch (e.ref_type) {
        case s.Qs.CHANNEL:
            return (0, r.jsx)(f, { channelId: e.ref_id });
        case s.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, u.vE)(e);
    }
}
