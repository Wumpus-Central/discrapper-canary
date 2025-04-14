n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(201895),
    o = n(471445),
    a = n(823379),
    s = n(303737),
    u = n(293810),
    c = n(388032),
    d = n(310045);
function f(e) {
    let { channelId: t } = e,
        n = (0, s.m7)(t);
    if (null == n) return '['.concat(c.NW.string(c.t.bz1PZW), ']');
    let a = n.isMediaChannel() ? i.XBm : (0, o.Th)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.nn4, { children: (0, l.ZP)({ channel: n }) }),
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != a &&
                        (0, r.jsx)(a, {
                            className: d.icon,
                            'aria-hidden': !0
                        }),
                    n.name
                ]
            })
        ]
    });
}
function p(e) {
    switch (e.ref_type) {
        case u.Qs.CHANNEL:
            return (0, r.jsx)(f, { channelId: e.ref_id });
        case u.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, a.vE)(e);
    }
}
