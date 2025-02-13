n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    o = n(570928),
    s = n(540059),
    c = n(977059),
    u = n(388032),
    d = n(110309);
let h = function (e) {
    let { className: t, hasVideo: n, text: i, hasConnectedChannel: h, textVariant: f = 'text-md/medium' } = e,
        g = (0, s.Q3)('RTCConnectionStatusText'),
        { enabled: p } = (0, c.S)({ location: 'RTCConnectionStatusText' }),
        N = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, l.jsx)(o.Z, {
        className: a()(t, p ? d.hoverableStatus : d.status),
        hoverText:
            p && h
                ? g
                    ? (0, l.jsx)(r.Text, {
                          variant: f,
                          color: 'currentColor',
                          children: N
                      })
                    : N
                : null,
        children: g
            ? (0, l.jsx)(r.Text, {
                  variant: f,
                  color: 'currentColor',
                  children: i
              })
            : i
    });
};
