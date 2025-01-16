n.d(e, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(201895),
    o = n(471445),
    u = n(823379),
    a = n(303737),
    s = n(293810),
    c = n(388032),
    d = n(507641);
function f(t) {
    let { channelId: e } = t,
        n = (0, a.m7)(e);
    if (null == n) return (0, i.jsx)(i.Fragment, { children: '['.concat(c.intl.string(c.t.bz1PZW), ']') });
    let u = n.isMediaChannel() ? r.ImageIcon : (0, o.Th)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: (0, l.ZP)({ channel: n }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != u &&
                        (0, i.jsx)(u, {
                            className: d.icon,
                            'aria-hidden': !0
                        }),
                    n.name
                ]
            })
        ]
    });
}
function _(t) {
    switch (t.ref_type) {
        case s.Qs.CHANNEL:
            return (0, i.jsx)(f, { channelId: t.ref_id });
        case s.Qs.INTANGIBLE:
            return t.name;
        default:
            (0, u.vE)(t);
    }
}
