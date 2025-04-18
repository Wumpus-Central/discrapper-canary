r.d(t, { Z: () => f });
var n = r(200651);
r(192379);
var i = r(481060),
    s = r(201895),
    o = r(471445),
    l = r(823379),
    a = r(303737),
    c = r(293810),
    h = r(388032),
    v = r(892185);
function u(e) {
    let { channelId: t } = e,
        r = (0, a.m7)(t);
    if (null == r) return '['.concat(h.NW.string(h.t.bz1PZW), ']');
    let l = r.isMediaChannel() ? i.XBm : (0, o.Th)(r.type);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.nn4, { children: (0, s.ZP)({ channel: r }) }),
            (0, n.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != l &&
                        (0, n.jsx)(l, {
                            className: v.icon,
                            'aria-hidden': !0
                        }),
                    r.name
                ]
            })
        ]
    });
}
function f(e) {
    switch (e.ref_type) {
        case c.Qs.CHANNEL:
            return (0, n.jsx)(u, { channelId: e.ref_id });
        case c.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, l.vE)(e);
    }
}
