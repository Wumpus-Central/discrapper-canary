n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(201895),
    o = n(471445),
    s = n(823379),
    l = n(303737),
    c = n(293810),
    u = n(388032),
    d = n(24132);
function f(e) {
    let { channelId: t } = e,
        n = (0, l.m7)(t);
    if (null == n) return "[".concat(u.intl.string(u.t.bz1PZX), "]");
    let s = n.isMediaChannel() ? i.XBm : (0, o.Th)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.nn4, { children: (0, a.ZP)({ channel: n }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [
                    null != s &&
                        (0, r.jsx)(s, {
                            className: d.icon,
                            "aria-hidden": !0,
                        }),
                    n.name,
                ],
            }),
        ],
    });
}
function p(e) {
    switch (e.ref_type) {
        case c.Qs.CHANNEL:
            return (0, r.jsx)(f, { channelId: e.ref_id });
        case c.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, s.vE)(e);
    }
}
