n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(201895),
    o = n(471445),
    s = n(823379),
    a = n(303737),
    u = n(293810),
    d = n(388032),
    c = n(180197);
function h(e) {
    let { channelId: t } = e,
        n = (0, a.m7)(t);
    if (null == n) return (0, i.jsx)(i.Fragment, { children: '['.concat(d.NW.string(d.t.bz1PZW), ']') });
    let s = n.isMediaChannel() ? r.XBm : (0, o.Th)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.nn4, { children: (0, l.ZP)({ channel: n }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != s &&
                        (0, i.jsx)(s, {
                            className: c.icon,
                            'aria-hidden': !0
                        }),
                    n.name
                ]
            })
        ]
    });
}
function f(e) {
    switch (e.ref_type) {
        case u.Qs.CHANNEL:
            return (0, i.jsx)(h, { channelId: e.ref_id });
        case u.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, s.vE)(e);
    }
}
