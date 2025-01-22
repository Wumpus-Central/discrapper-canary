e.d(n, {
    Z: function () {
        return _;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(201895),
    u = e(471445),
    o = e(823379),
    a = e(303737),
    s = e(293810),
    c = e(388032),
    d = e(507641);
function f(t) {
    let { channelId: n } = t,
        e = (0, a.m7)(n);
    if (null == e) return (0, i.jsx)(i.Fragment, { children: '['.concat(c.intl.string(c.t.bz1PZW), ']') });
    let o = e.isMediaChannel() ? r.ImageIcon : (0, u.Th)(e.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: (0, l.ZP)({ channel: e }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != o &&
                        (0, i.jsx)(o, {
                            className: d.icon,
                            'aria-hidden': !0
                        }),
                    e.name
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
            (0, o.vE)(t);
    }
}
