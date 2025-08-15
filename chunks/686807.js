n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(201895),
    l = n(471445),
    o = n(823379),
    a = n(303737),
    u = n(293810),
    c = n(388032),
    d = n(24132);
function h(e) {
    let { channelId: t } = e,
        n = (0, a.m7)(t);
    if (null == n) return "[".concat(c.intl.string(c.t.bz1PZW), "]");
    let o = n.isMediaChannel() ? r.XBm : (0, l.Th)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.nn4, { children: (0, s.ZP)({ channel: n }) }),
            (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [
                    null != o &&
                        (0, i.jsx)(o, {
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
        case u.Qs.CHANNEL:
            return (0, i.jsx)(h, { channelId: e.ref_id });
        case u.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, o.vE)(e);
    }
}
