n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(570928),
    r = n(540059),
    c = n(977059),
    u = n(388032),
    d = n(586802);
let h = function (e) {
    let { className: t, hasVideo: n, text: i, hasConnectedChannel: h, textVariant: N = 'text-md/medium' } = e,
        f = (0, r.Q3)('RTCConnectionStatusText'),
        { enabled: g } = (0, c.S)({ location: 'RTCConnectionStatusText' }),
        x = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, l.jsx)(a.Z, {
        className: s()(t, g ? d.hoverableStatus : d.status),
        hoverText:
            g && h
                ? f
                    ? (0, l.jsx)(o.Text, {
                          variant: N,
                          color: 'currentColor',
                          children: x
                      })
                    : x
                : null,
        children: f
            ? (0, l.jsx)(o.Text, {
                  variant: N,
                  color: 'currentColor',
                  children: i
              })
            : i
    });
};
