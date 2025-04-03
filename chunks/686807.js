r.d(t, { Z: () => p });
var n = r(200651);
r(192379);
var h = r(481060),
    v = r(201895),
    i = r(471445),
    l = r(823379),
    o = r(303737),
    a = r(293810),
    s = r(388032),
    c = r(310045);
function f(e) {
    let { channelId: t } = e,
        r = (0, o.m7)(t);
    if (null == r) return '['.concat(s.NW.string(s.t.bz1PZW), ']');
    let l = r.isMediaChannel() ? h.XBm : (0, i.Th)(r.type);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(h.nn4, { children: (0, v.ZP)({ channel: r }) }),
            (0, n.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != l &&
                        (0, n.jsx)(l, {
                            className: c.icon,
                            'aria-hidden': !0
                        }),
                    r.name
                ]
            })
        ]
    });
}
function p(e) {
    switch (e.ref_type) {
        case a.Qs.CHANNEL:
            return (0, n.jsx)(f, { channelId: e.ref_id });
        case a.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, l.vE)(e);
    }
}
