n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(201895),
    o = n(471445),
    l = n(823379),
    a = n(303737),
    c = n(293810),
    u = n(388032),
    d = n(310045);
function f(e) {
    let { channelId: t } = e,
        n = (0, a.m7)(t);
    if (null == n) return '['.concat(u.intl.string(u.t.bz1PZW), ']');
    let l = n.isMediaChannel() ? i.XBm : (0, o.Th)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.nn4, { children: (0, s.ZP)({ channel: n }) }),
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != l &&
                        (0, r.jsx)(l, {
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
        case c.Qs.CHANNEL:
            return (0, r.jsx)(f, { channelId: e.ref_id });
        case c.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, l.vE)(e);
    }
}
