n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(201895),
    s = n(471445),
    a = n(823379),
    o = n(303737),
    d = n(293810),
    u = n(388032),
    c = n(426615);
function h(e) {
    let { channelId: t } = e,
        n = (0, o.m7)(t);
    if (null == n) return (0, i.jsx)(i.Fragment, { children: '['.concat(u.intl.string(u.t.bz1PZW), ']') });
    let a = n.isMediaChannel() ? l.XBm : (0, s.Th)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.nn4, { children: (0, r.ZP)({ channel: n }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != a &&
                        (0, i.jsx)(a, {
                            className: c.icon,
                            'aria-hidden': !0
                        }),
                    n.name
                ]
            })
        ]
    });
}
function g(e) {
    switch (e.ref_type) {
        case d.Qs.CHANNEL:
            return (0, i.jsx)(h, { channelId: e.ref_id });
        case d.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, a.vE)(e);
    }
}
