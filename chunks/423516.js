n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(570928),
    r = n(540059),
    c = n(977059),
    u = n(388032),
    d = n(110309);
let h = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: h, textVariant: f = 'text-md/medium' } = e,
        N = (0, r.Q3)('RTCConnectionStatusText'),
        { enabled: g } = (0, c.S)({ location: 'RTCConnectionStatusText' }),
        x = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, i.jsx)(a.Z, {
        className: o()(t, g ? d.hoverableStatus : d.status),
        hoverText:
            g && h
                ? N
                    ? (0, i.jsx)(s.Text, {
                          variant: f,
                          color: 'currentColor',
                          children: x
                      })
                    : x
                : null,
        children: N
            ? (0, i.jsx)(s.Text, {
                  variant: f,
                  color: 'currentColor',
                  children: l
              })
            : l
    });
};
